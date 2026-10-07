const { spawn } = require('child_process');
const fs = require('fs');

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9285;
const sleep = (ms) => new Promise(res => setTimeout(res, ms));

async function main() {
  const profileDir = `/tmp/chrome-sec3-profile-${Date.now()}`;
  fs.mkdirSync(profileDir, { recursive: true });

  const chrome = spawn(CHROME_PATH, [
    '--headless=new',
    `--remote-debugging-port=${PORT}`,
    `--user-data-dir=${profileDir}`,
    '--window-size=1440,900',
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    '--hide-scrollbars',
    'http://localhost:3000'
  ], { stdio: 'ignore' });

  let targetWsUrl = null;
  for (let i = 0; i < 30; i++) {
    await sleep(300);
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/json`);
      const list = await res.json();
      const page = list.find(p => p.type === 'page');
      if (page && page.webSocketDebuggerUrl) {
        targetWsUrl = page.webSocketDebuggerUrl;
        break;
      }
    } catch (e) {}
  }

  const ws = new WebSocket(targetWsUrl);
  let id = 1;
  const pending = new Map();

  ws.onmessage = (e) => {
    const msg = JSON.parse(e.data);
    if (msg.id && pending.has(msg.id)) {
      const { res, rej, timer } = pending.get(msg.id);
      clearTimeout(timer);
      pending.delete(msg.id);
      if (msg.error) rej(new Error(JSON.stringify(msg.error)));
      else res(msg.result);
    }
  };

  const call = (method, params = {}) => new Promise((res, rej) => {
    const reqId = id++;
    const timer = setTimeout(() => {
      pending.delete(reqId);
      rej(new Error(`Timeout calling ${method}`));
    }, 15000);
    pending.set(reqId, { res, rej, timer });
    ws.send(JSON.stringify({ id: reqId, method, params }));
  });

  await new Promise((res) => { ws.onopen = res; });
  await call('Page.enable');
  await call('Runtime.enable');

  const captureViewport = async (filename) => {
    const shot = await call('Page.captureScreenshot', {
      format: 'png',
      captureBeyondViewport: false
    });
    fs.writeFileSync(filename, Buffer.from(shot.data, 'base64'));
    console.log(`Saved ${filename}`);
  };

  // 1. Desktop 1440x900
  console.log('--- Desktop 1440x900 ---');
  await call('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 2,
    mobile: false
  });
  await sleep(600);
  await call('Runtime.evaluate', {
    expression: `
      document.fonts.ready.then(() => {
        const sec = document.getElementById('recognition');
        if (sec) window.scrollTo({ top: sec.offsetTop, behavior: 'instant' });
      })
    `,
    awaitPromise: true
  });
  await sleep(800);
  await captureViewport('03_recognition_1440x900.png');

  // 2. Mobile 390x844
  console.log('--- Mobile 390x844 ---');
  await call('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true
  });
  await sleep(600);
  await call('Runtime.evaluate', {
    expression: `
      const sec = document.getElementById('recognition');
      if (sec) window.scrollTo({ top: sec.offsetTop, behavior: 'instant' });
    `
  });
  await sleep(800);
  await captureViewport('03_recognition_390x844.png');

  // Check Font and Text Integrity in DOM
  const qaAudit = await call('Runtime.evaluate', {
    expression: `
      (() => {
        const sec = document.getElementById('recognition');
        const fontLoaded = document.fonts.check('24px ekinBOHO');
        const thoughts = Array.from(sec.querySelectorAll('.rec-thought')).map(el => el.textContent.trim());
        const lines = Array.from(sec.querySelectorAll('.rec-line')).map(el => el.textContent.trim());
        const closing = sec.querySelector('.rec-closing-line').innerText.trim();
        const rect = sec.getBoundingClientRect();
        return {
          fontLoaded,
          thoughts,
          lines,
          closing,
          height: rect.height,
          offsetTop: sec.offsetTop
        };
      })()
    `,
    returnByValue: true
  });

  console.log('\n=== QA AUDIT REPORT ===');
  console.log(JSON.stringify(qaAudit.result.value, null, 2));

  ws.close();
  chrome.kill();
  try { fs.rmSync(profileDir, { recursive: true, force: true }); } catch (e) {}
}

main().catch(console.error);

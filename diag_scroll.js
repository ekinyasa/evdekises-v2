const { spawn } = require('child_process');
const fs = require('fs');

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9266;
const sleep = (ms) => new Promise(res => setTimeout(res, ms));

async function main() {
  const profileDir = `/tmp/chrome-diag-${Date.now()}`;
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
      const { res, rej } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) rej(new Error(JSON.stringify(msg.error)));
      else res(msg.result);
    }
  };
  const call = (method, params = {}) => new Promise((res, rej) => {
    const reqId = id++;
    pending.set(reqId, { res, rej });
    ws.send(JSON.stringify({ id: reqId, method, params }));
  });

  await new Promise((res) => { ws.onopen = res; });
  await call('Page.enable');
  await call('Runtime.enable');
  await call('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 2,
    mobile: false
  });

  await call('Page.navigate', { url: 'http://localhost:3000' });
  await sleep(1500);

  const diag = await call('Runtime.evaluate', {
    expression: `
      (() => {
        const hero = document.getElementById('hero');
        const heroWrap = document.querySelector('.hero-frame-wrapper');
        const whiteSec = document.getElementById('giris-anlatisi');
        const recognition = document.getElementById('recognition');
        return {
          heroWrap: { top: heroWrap.offsetTop, height: heroWrap.offsetHeight },
          whiteSec: { top: whiteSec.offsetTop, height: whiteSec.offsetHeight, bg: getComputedStyle(whiteSec).backgroundColor },
          recognition: { top: recognition.offsetTop, height: recognition.offsetHeight },
          bodyHeight: document.body.offsetHeight,
          scrollY: window.scrollY
        };
      })()
    `,
    returnByValue: true
  });
  console.log('Layout Diagnostic:', JSON.stringify(diag.result.value, null, 2));

  // Now scroll to white section
  await call('Runtime.evaluate', {
    expression: `
      const sec = document.getElementById('giris-anlatisi');
      window.scrollTo({ top: sec.offsetTop, behavior: 'instant' });
    `
  });
  await sleep(600);

  const scrollDiag = await call('Runtime.evaluate', {
    expression: `
      (() => {
        return {
          scrollY: window.scrollY,
          whiteRect: document.getElementById('giris-anlatisi').getBoundingClientRect()
        };
      })()
    `,
    returnByValue: true
  });
  console.log('After scroll to whiteSec:', JSON.stringify(scrollDiag.result.value, null, 2));

  const shot = await call('Page.captureScreenshot', {
    format: 'png',
    clip: { x: 0, y: 0, width: 1440, height: 900, scale: 1 }
  });
  fs.writeFileSync('diag_white_sec.png', Buffer.from(shot.data, 'base64'));

  ws.close();
  chrome.kill();
}

main().catch(console.error);

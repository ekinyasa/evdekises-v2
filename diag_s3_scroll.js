const { spawn } = require('child_process');
const fs = require('fs');

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9290;
const sleep = (ms) => new Promise(res => setTimeout(res, ms));

async function main() {
  const profileDir = `/tmp/chrome-sec3-diag-${Date.now()}`;
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

  await call('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 2,
    mobile: false
  });
  await sleep(600);

  const diag = await call('Runtime.evaluate', {
    expression: `
      (() => {
        const s1 = document.querySelector(".hero-frame-wrapper");
        const s2 = document.getElementById("giris-anlatisi");
        const s3 = document.getElementById("recognition");
        
        return {
          s1: {
            offsetTop: s1 ? s1.offsetTop : null,
            offsetHeight: s1 ? s1.offsetHeight : null,
            scrollHeight: s1 ? s1.scrollHeight : null,
            computedHeight: s1 ? window.getComputedStyle(s1).height : null,
            marginTop: s1 ? window.getComputedStyle(s1).marginTop : null,
            marginBottom: s1 ? window.getComputedStyle(s1).marginBottom : null
          },
          s2: {
            offsetTop: s2 ? s2.offsetTop : null,
            offsetHeight: s2 ? s2.offsetHeight : null,
            scrollHeight: s2 ? s2.scrollHeight : null,
            computedHeight: s2 ? window.getComputedStyle(s2).height : null,
            marginTop: s2 ? window.getComputedStyle(s2).marginTop : null,
            marginBottom: s2 ? window.getComputedStyle(s2).marginBottom : null
          },
          s3: {
            offsetTop: s3 ? s3.offsetTop : null,
            offsetHeight: s3 ? s3.offsetHeight : null,
            scrollHeight: s3 ? s3.scrollHeight : null,
            computedHeight: s3 ? window.getComputedStyle(s3).height : null,
            marginTop: s3 ? window.getComputedStyle(s3).marginTop : null,
            marginBottom: s3 ? window.getComputedStyle(s3).marginBottom : null
          },
          windowInnerHeight: window.innerHeight
        };
      })()
    `,
    returnByValue: true
  });

  console.log('Section 1, 2, 3 geometry:', JSON.stringify(diag.result.value, null, 2));

  // Test scroll positions
  await call('Runtime.evaluate', { expression: 'window.scrollTo(0, 0);' });
  await sleep(400);

  // Scroll 1: Hero -> Scene 2
  await call('Input.dispatchMouseEvent', {
    type: 'mouseWheel',
    x: 720,
    y: 450,
    deltaX: 0,
    deltaY: 300
  });
  await sleep(1000);
  let pos1 = await call('Runtime.evaluate', { expression: 'window.scrollY', returnByValue: true });
  console.log('After 1st scroll (Hero -> S2):', pos1.result.value);

  // Scroll 2: Scene 2 -> Scene 3
  await call('Input.dispatchMouseEvent', {
    type: 'mouseWheel',
    x: 720,
    y: 450,
    deltaX: 0,
    deltaY: 300
  });
  await sleep(1000);
  let pos2 = await call('Runtime.evaluate', { expression: 'window.scrollY', returnByValue: true });
  console.log('After 2nd scroll (S2 -> S3):', pos2.result.value);

  // Let us capture what is seen at pos2
  const shot = await call('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('diag_s3_after_scroll.png', Buffer.from(shot.data, 'base64'));

  ws.close();
  chrome.kill();
  try { fs.rmSync(profileDir, { recursive: true, force: true }); } catch (e) {}
}

main().catch(console.error);

const { spawn } = require('child_process');
const fs = require('fs');

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9230;

const sleep = (ms) => new Promise(res => setTimeout(res, ms));

async function main() {
  const profileDir = `/tmp/chrome-refinement-profile-${Date.now()}`;
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

  if (!targetWsUrl) {
    console.error('Debugger page unavailable');
    chrome.kill();
    process.exit(1);
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
    const msgId = id++;
    const timer = setTimeout(() => {
      pending.delete(msgId);
      rej(new Error(`Timeout calling ${method}`));
    }, 10000);
    pending.set(msgId, { res, rej, timer });
    ws.send(JSON.stringify({ id: msgId, method, params }));
  });

  await new Promise(res => {
    if (ws.readyState === WebSocket.OPEN) res();
    else ws.onopen = res;
  });

  await call('Page.enable');
  await call('Runtime.enable');

  const capture = async (filename, width, height) => {
    await call('Emulation.setDeviceMetricsOverride', {
      width,
      height,
      deviceScaleFactor: 2,
      mobile: false
    });
    await call('Page.navigate', { url: 'http://localhost:3000' });
    await sleep(1500);
    await call('Runtime.evaluate', { expression: `window.scrollTo(0, 0);` });
    await sleep(500);

    const screenshotData = await call('Page.captureScreenshot', {
      format: 'png',
      captureBeyondViewport: false
    });

    fs.writeFileSync(filename, Buffer.from(screenshotData.data, 'base64'));
    console.log(`Saved: ${filename} (${width}x${height})`);
  };

  // 1. Standard Desktop Viewport (1440x900)
  await capture('01_desktop_hero_standard_1440x900.png', 1440, 900);

  // 2. Wide Desktop Viewport (1680x1050)
  await capture('02_desktop_hero_wide_1680x1050.png', 1680, 1050);

  // 3. Narrow Desktop Viewport at boundary where 2-field remains healthy (1120x800)
  await capture('03_desktop_hero_narrow_1120x800.png', 1120, 800);

  ws.close();
  chrome.kill();
  console.log('ALL REFINEMENT SCREENSHOTS CAPTURED SUCCESSFULLY!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

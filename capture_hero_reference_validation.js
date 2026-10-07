const { spawn } = require('child_process');
const fs = require('fs');

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9244;

const sleep = (ms) => new Promise(res => setTimeout(res, ms));

async function main() {
  const profileDir = `/tmp/chrome-hero-val-profile-${Date.now()}`;
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

  await call('Page.navigate', { url: 'http://localhost:3000' });
  await sleep(1500);

  // Ensure fonts and images loaded
  await call('Runtime.evaluate', {
    expression: 'document.fonts.ready',
    awaitPromise: true
  });
  await sleep(800);

  const viewports = [
    { name: '01_hero_ref_1440x900.png', width: 1440, height: 900 },
    { name: '02_hero_ref_1366x768.png', width: 1366, height: 768 },
    { name: '03_hero_ref_1600x900.png', width: 1600, height: 900 },
    { name: '04_hero_ref_1920x1080.png', width: 1920, height: 1080 },
    { name: '05_hero_ref_1280x800.png', width: 1280, height: 800 },
    { name: '06_hero_ref_1024x768.png', width: 1024, height: 768 }
  ];

  for (const vp of viewports) {
    await call('Emulation.setDeviceMetricsOverride', {
      width: vp.width,
      height: vp.height,
      deviceScaleFactor: 2,
      mobile: false
    });
    await call('Runtime.evaluate', { expression: 'window.scrollTo(0, 0);' });
    await sleep(500);

    const shot = await call('Page.captureScreenshot', {
      format: 'png',
      clip: {
        x: 0,
        y: 0,
        width: vp.width,
        height: vp.height,
        scale: 1
      }
    });
    fs.writeFileSync(vp.name, Buffer.from(shot.data, 'base64'));
    console.log(`Captured ${vp.name} (${vp.width}x${vp.height})`);
  }

  ws.close();
  chrome.kill();
  console.log('All hero reference captures completed successfully!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

const { spawn } = require('child_process');
const fs = require('fs');

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9228;

const sleep = (ms) => new Promise(res => setTimeout(res, ms));

async function main() {
  const profileDir = `/tmp/chrome-hero-pass-profile-${Date.now()}`;
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
  await sleep(1500);

  const capture = async (filename, width, height, scrollY, isMobile = false) => {
    await call('Emulation.setDeviceMetricsOverride', {
      width,
      height,
      deviceScaleFactor: 2,
      mobile: isMobile
    });
    await call('Runtime.evaluate', {
      expression: `window.scrollTo({ top: ${scrollY}, behavior: 'instant' });`
    });
    await sleep(400);

    const screenshotData = await call('Page.captureScreenshot', {
      format: 'png',
      captureBeyondViewport: false
    });

    fs.writeFileSync(filename, Buffer.from(screenshotData.data, 'base64'));
    console.log(`Captured: ${filename}`);
  };

  // 1. Desktop hero at first load (1440x900, scroll 0)
  console.log('1. Capturing Desktop Hero at First Load...');
  await capture('01_desktop_hero_first_load_1440x900.png', 1440, 900, 0, false);

  // 2. Desktop hero showing full first viewport / fold line
  console.log('2. Capturing Desktop Hero Viewport Fold Reference...');
  await capture('02_desktop_hero_first_viewport_1440x900.png', 1440, 900, 0, false);

  // 3. Navbar over a dark/photo section (e.g. scrollY = 1750 over #inside-world or #recognition)
  console.log('3. Capturing Navbar over Dark/Photo Section...');
  await capture('03_navbar_over_dark_photo_section_1440x900.png', 1440, 900, 2000, false);

  // 4. Navbar over white/light section (e.g. scrollY = 850 over #giris-anlatisi)
  console.log('4. Capturing Navbar over White/Light Section...');
  await capture('04_navbar_over_white_light_section_1440x900.png', 1440, 900, 850, false);

  // 5. Mobile Hero (390x844)
  console.log('5. Capturing Mobile Hero...');
  await capture('05_mobile_hero_390x844.png', 390, 844, 0, true);

  ws.close();
  chrome.kill();
  console.log('ALL 5 DELIVERABLE SCREENSHOTS CAPTURED SUCCESSFULLY!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

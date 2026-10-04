const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9222;

const sleep = (ms) => new Promise(res => setTimeout(res, ms));

async function main() {
  const profileDir = `/tmp/chrome-profile-${Date.now()}`;
  fs.mkdirSync(profileDir, { recursive: true });

  const chrome = spawn(CHROME_PATH, [
    '--headless=new',
    `--remote-debugging-port=${PORT}`,
    `--user-data-dir=${profileDir}`,
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    '--hide-scrollbars',
    'about:blank'
  ], { stdio: 'ignore' });

  let wsUrl = null;
  for (let i = 0; i < 20; i++) {
    await sleep(400);
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/json`);
      const list = await res.json();
      if (list && list.length > 0 && list[0].webSocketDebuggerUrl) {
        wsUrl = list[0].webSocketDebuggerUrl;
        break;
      }
    } catch (e) {}
  }

  if (!wsUrl) {
    console.error('Debugger unavailable');
    chrome.kill();
    process.exit(1);
  }

  const ws = new WebSocket(wsUrl);
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

  const fileUrl = 'file://' + path.resolve(__dirname, 'index.html');
  console.log('Navigating to:', fileUrl);
  await call('Page.navigate', { url: fileUrl });
  await sleep(2500);

  // 1. Desktop Hero (1440x900)
  console.log('1. Setting 1440x900 Desktop...');
  await call('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 2,
    mobile: false
  });
  await call('Runtime.evaluate', { expression: 'window.scrollTo(0, 0);' });
  await sleep(600);
  let snap = await call('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('01_hero_1440x900.png', Buffer.from(snap.data, 'base64'));
  console.log('Saved 01_hero_1440x900.png');

  // 2. Desktop Recognition / Method (1440x900)
  console.log('2. Scrolling to Recognition / Method...');
  await call('Runtime.evaluate', {
    expression: 'document.getElementById("recognition").scrollIntoView(true);'
  });
  await sleep(600);
  snap = await call('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('02_recognition_method_1440x900.png', Buffer.from(snap.data, 'base64'));
  console.log('Saved 02_recognition_method_1440x900.png');

  // 3. Desktop Photographic Scene (1440x900)
  console.log('3. Scrolling to Inside-World Photographic Scene...');
  await call('Runtime.evaluate', {
    expression: 'document.getElementById("inside-world").scrollIntoView(true);'
  });
  await sleep(600);
  snap = await call('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('03_photographic_scene_1440x900.png', Buffer.from(snap.data, 'base64'));
  console.log('Saved 03_photographic_scene_1440x900.png');

  // 4. Mobile Hero (390px)
  console.log('4. Setting 390x844 Mobile...');
  await call('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true
  });
  await call('Runtime.evaluate', { expression: 'window.scrollTo(0, 0);' });
  await sleep(600);
  snap = await call('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('04_hero_390px.png', Buffer.from(snap.data, 'base64'));
  console.log('Saved 04_hero_390px.png');

  console.log('DONE!');
  ws.close();
  chrome.kill();
  fs.rmSync(profileDir, { recursive: true, force: true });
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});

const { spawn } = require('child_process');
const fs = require('fs');

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9229;

const sleep = (ms) => new Promise(res => setTimeout(res, ms));

async function main() {
  const profileDir = `/tmp/chrome-studies-profile-${Date.now()}`;
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
  await call('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 2,
    mobile: false
  });

  const studies = [
    { key: 'a', filename: 'STUDY_A_LARGE_EDITORIAL.png', label: 'Study A: Large Editorial Title' },
    { key: 'b', filename: 'STUDY_B_LIGHT_INTERACTION.png', label: 'Study B: Title Interacts with Light' },
    { key: 'c', filename: 'STUDY_C_CROSS_FIELD.png', label: 'Study C: Cross-Field Composition' },
    { key: 'd', filename: 'STUDY_D_MINIMAL_NEGATIVE_SPACE.png', label: 'Study D: Minimal / Maximum Negative Space' }
  ];

  for (const s of studies) {
    console.log(`Navigating to ${s.label} (?study=${s.key})...`);
    await call('Page.navigate', { url: `http://localhost:3000/?study=${s.key}` });
    await sleep(1500);
    await call('Runtime.evaluate', { expression: `window.scrollTo(0, 0);` });
    await sleep(500);

    const screenshotData = await call('Page.captureScreenshot', {
      format: 'png',
      captureBeyondViewport: false
    });

    fs.writeFileSync(s.filename, Buffer.from(screenshotData.data, 'base64'));
    console.log(`Saved: ${s.filename}`);
  }

  ws.close();
  chrome.kill();
  console.log('ALL 4 COMPOSITION STUDIES CAPTURED SUCCESSFULLY!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

const { spawn } = require('child_process');
const fs = require('fs');

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9231;

const sleep = (ms) => new Promise(res => setTimeout(res, ms));

async function main() {
  const profileDir = `/tmp/chrome-scroll-profile-${Date.now()}`;
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

  await call('Page.navigate', { url: 'http://localhost:3000' });
  await sleep(1500);

  const captureAt = async (filename, scrollY) => {
    await call('Runtime.evaluate', {
      expression: `window.scrollTo({ top: ${scrollY}, behavior: 'instant' });`
    });
    await sleep(600);

    const screenshotData = await call('Page.captureScreenshot', {
      format: 'png',
      captureBeyondViewport: false
    });

    fs.writeFileSync(filename, Buffer.from(screenshotData.data, 'base64'));
    console.log(`Saved: ${filename} (scrollY: ${scrollY})`);
  };

  // Get offsets dynamically
  const getOffsets = await call('Runtime.evaluate', {
    expression: `(() => {
      const hero = document.getElementById('hero');
      const whiteSection = document.getElementById('giris-anlatisi');
      const recognition = document.getElementById('recognition');
      return {
        whiteTop: whiteSection ? whiteSection.offsetTop : 900,
        recognitionTop: recognition ? recognition.offsetTop : 1800
      };
    })()`,
    returnByValue: true
  });

  const { whiteTop, recognitionTop } = getOffsets.result.value;
  console.log(`Offsets: whiteTop=${whiteTop}, recognitionTop=${recognitionTop}`);

  // 1. Hero at initial load (scrollY: 0)
  await captureAt('01_hero_initial_load_1440x900.png', 0);

  // 2. White section settled into the viewport (scrollY: whiteTop)
  await captureAt('02_white_section_settled_1440x900.png', whiteTop);

  // 3. Header over the white section (scrollY: whiteTop + 60)
  await captureAt('03_header_over_white_section_1440x900.png', whiteTop + 60);

  // 4. Transition area from white section into "Belki başladın."
  await captureAt('04_transition_white_to_recognition_1440x900.png', recognitionTop - 450);

  ws.close();
  chrome.kill();
  console.log('ALL 4 SCENE SCREENSHOTS CAPTURED SUCCESSFULLY!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

const { spawn } = require('child_process');
const fs = require('fs');

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9226;

const sleep = (ms) => new Promise(res => setTimeout(res, ms));

async function main() {
  const profileDir = `/tmp/chrome-header-profile-${Date.now()}`;
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

  // Helper for desktop viewport
  const setDesktop = async () => {
    await call('Emulation.setDeviceMetricsOverride', {
      width: 1440,
      height: 900,
      deviceScaleFactor: 2,
      mobile: false
    });
    await sleep(300);
  };

  // Helper for mobile viewport
  const setMobile = async () => {
    await call('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true
    });
    await sleep(300);
  };

  // 1. Mobile State 1 (Top of page)
  console.log('1. Capturing Mobile State 1...');
  await setMobile();
  await call('Runtime.evaluate', { 
    expression: 'document.documentElement.style.scrollBehavior = "auto"; window.scrollTo(0, 0); document.getElementById("siteHeader").classList.remove("is-scrolled");' 
  });
  await sleep(600);
  let snap = await call('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('header_06_mobile_state1_390x844.png', Buffer.from(snap.data, 'base64'));

  // 2. Mobile State 2 (Scrolled)
  console.log('2. Capturing Mobile State 2...');
  await call('Runtime.evaluate', { 
    expression: 'document.documentElement.style.scrollBehavior = "auto"; window.scrollTo(0, 450); document.getElementById("siteHeader").classList.add("is-scrolled");' 
  });
  await sleep(600);
  snap = await call('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('header_07_mobile_state2_390x844.png', Buffer.from(snap.data, 'base64'));

  // 3. Desktop State 1 (Top of page)
  console.log('3. Capturing Desktop State 1...');
  await setDesktop();
  await call('Runtime.evaluate', { 
    expression: 'document.documentElement.style.scrollBehavior = "auto"; window.scrollTo(0, 0); document.getElementById("siteHeader").classList.remove("is-scrolled");' 
  });
  await sleep(600);
  snap = await call('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('header_01_state1_top_1440x900.png', Buffer.from(snap.data, 'base64'));

  // 4. Desktop Transition / Near-threshold
  console.log('4. Capturing Transition / Near-threshold...');
  await call('Runtime.evaluate', { 
    expression: 'document.documentElement.style.scrollBehavior = "auto"; window.scrollTo(0, 140); document.getElementById("siteHeader").classList.add("is-scrolled");' 
  });
  await sleep(600);
  snap = await call('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('header_02_transition_near_threshold_1440x900.png', Buffer.from(snap.data, 'base64'));

  // 5. Desktop State 2 over Dark Photographic (Inside-World)
  console.log('5. Capturing State 2 over Dark Photographic Section...');
  await call('Runtime.evaluate', { 
    expression: 'document.documentElement.style.scrollBehavior = "auto"; document.getElementById("inside-world").scrollIntoView(true); document.getElementById("siteHeader").classList.add("is-scrolled");' 
  });
  await sleep(600);
  snap = await call('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('header_03_state2_dark_photographic_1440x900.png', Buffer.from(snap.data, 'base64'));

  // 6. Desktop State 2 over Light Section (Six-Week Journey)
  console.log('6. Capturing State 2 over Light Section...');
  await call('Runtime.evaluate', { 
    expression: 'document.documentElement.style.scrollBehavior = "auto"; document.getElementById("journey").scrollIntoView(true); document.getElementById("siteHeader").classList.add("is-scrolled");' 
  });
  await sleep(600);
  snap = await call('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('header_04_state2_light_section_1440x900.png', Buffer.from(snap.data, 'base64'));

  // 7. Desktop State 2 over Terracotta Decision Section
  console.log('7. Capturing State 2 over Terracotta Decision Section...');
  await call('Runtime.evaluate', { 
    expression: 'document.documentElement.style.scrollBehavior = "auto"; document.getElementById("karar").scrollIntoView(true); document.getElementById("siteHeader").classList.add("is-scrolled");' 
  });
  await sleep(600);
  snap = await call('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('header_05_state2_terracotta_decision_1440x900.png', Buffer.from(snap.data, 'base64'));

  console.log('ALL SCREENSHOTS CAPTURED PERFECTLY!');
  ws.close();
  chrome.kill();
  try { fs.rmSync(profileDir, { recursive: true, force: true }); } catch(e){}
}

main().catch(err => {
  console.error('Fatal capture error:', err);
  process.exit(1);
});

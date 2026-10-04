const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9222;

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function capture() {
  const chromeProc = spawn(CHROME_PATH, [
    '--headless=new',
    `--remote-debugging-port=${PORT}`,
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    '--hide-scrollbars',
    'about:blank'
  ], { stdio: 'ignore' });

  // Wait for Chrome to initialize
  await sleep(1500);

  try {
    const listRes = await fetch(`http://127.0.0.1:${PORT}/json`);
    const pages = await listRes.json();
    const targetWsUrl = pages[0].webSocketDebuggerUrl;

    console.log('Connecting to WebSocket:', targetWsUrl);
    const ws = new WebSocket(targetWsUrl);

    let id = 1;
    const pending = new Map();

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && pending.has(msg.id)) {
        const { resolve, reject } = pending.get(msg.id);
        pending.delete(msg.id);
        if (msg.error) reject(msg.error);
        else resolve(msg.result);
      }
    };

    function send(method, params = {}) {
      return new Promise((resolve, reject) => {
        const msgId = id++;
        pending.set(msgId, { resolve, reject });
        ws.send(JSON.stringify({ id: msgId, method, params }));
      });
    }

    await new Promise(resolve => {
      if (ws.readyState === WebSocket.OPEN) resolve();
      else ws.onopen = resolve;
    });

    await send('Page.enable');
    await send('DOM.enable');
    await send('Runtime.enable');

    const fileUrl = 'file://' + path.resolve(__dirname, 'index.html');
    await send('Page.navigate', { url: fileUrl });
    await sleep(2000); // Wait for fonts and images

    // 1. Desktop 1440x900 - Hero
    console.log('Capturing Desktop Hero (1440x900)...');
    await send('Emulation.setDeviceMetricsOverride', {
      width: 1440,
      height: 900,
      deviceScaleFactor: 2,
      mobile: false
    });
    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 0);' });
    await sleep(500);
    let screenshot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('01_hero_1440x900.png', Buffer.from(screenshot.data, 'base64'));

    // 2. Desktop 1440x900 - Recognition / Method
    console.log('Capturing Desktop Recognition & Method (1440x900)...');
    await send('Runtime.evaluate', {
      expression: `
        const el = document.getElementById('recognition');
        if (el) {
          const rect = el.getBoundingClientRect();
          window.scrollTo(0, window.scrollY + rect.top);
        }
      `
    });
    await sleep(600);
    screenshot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('02_recognition_method_1440x900.png', Buffer.from(screenshot.data, 'base64'));

    // 3. Desktop 1440x900 - Photographic / Inside->World Scene
    console.log('Capturing Desktop Photographic Scene (1440x900)...');
    await send('Runtime.evaluate', {
      expression: `
        const el = document.getElementById('inside-world');
        if (el) {
          const rect = el.getBoundingClientRect();
          window.scrollTo(0, window.scrollY + rect.top);
        }
      `
    });
    await sleep(600);
    screenshot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('03_photographic_scene_1440x900.png', Buffer.from(screenshot.data, 'base64'));

    // 4. Mobile 390px - Hero
    console.log('Capturing Mobile Hero (390x844)...');
    await send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true
    });
    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 0);' });
    await sleep(600);
    screenshot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('04_hero_390px.png', Buffer.from(screenshot.data, 'base64'));

    // Also Mobile full scroll test for Recognition and Inside->World
    console.log('Capturing Mobile Recognition...');
    await send('Runtime.evaluate', {
      expression: `
        const el = document.getElementById('recognition');
        if (el) {
          const rect = el.getBoundingClientRect();
          window.scrollTo(0, window.scrollY + rect.top);
        }
      `
    });
    await sleep(500);
    screenshot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('mobile_recognition_390px.png', Buffer.from(screenshot.data, 'base64'));

    console.log('All screenshots captured successfully.');
    ws.close();
  } catch (err) {
    console.error('Error during capture:', err);
  } finally {
    chromeProc.kill();
  }
}

capture();

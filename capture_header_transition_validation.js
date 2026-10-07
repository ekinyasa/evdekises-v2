const { spawn } = require('child_process');
const fs = require('fs');

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9288;
const sleep = (ms) => new Promise(res => setTimeout(res, ms));

async function main() {
  const profileDir = `/tmp/chrome-header-trans-profile-${Date.now()}`;
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
  await call('Runtime.evaluate', {
    expression: 'document.fonts.ready',
    awaitPromise: true
  });
  await sleep(800);

  const captureViewport = async (filename) => {
    const shot = await call('Page.captureScreenshot', {
      format: 'png',
      captureBeyondViewport: false
    });
    fs.writeFileSync(filename, Buffer.from(shot.data, 'base64'));
    console.log(`Saved ${filename}`);
  };

  // 1. Initial hero state (1440x900)
  await call('Runtime.evaluate', { expression: 'window.scrollTo({ top: 0, behavior: "instant" });' });
  await sleep(400);
  await captureViewport('01_initial_hero_state_1440x900.png');

  // 2. Scrolled nav over the white section
  await call('Runtime.evaluate', {
    expression: `
      const sec = document.getElementById('giris-anlatisi');
      window.scrollTo({ top: sec.offsetTop, behavior: 'instant' });
    `
  });
  await sleep(500);
  await captureViewport('02_scrolled_nav_over_white_section_1440x900.png');

  // 3. Scrolled nav over a dark section (e.g. #recognition)
  await call('Runtime.evaluate', {
    expression: `
      const sec = document.getElementById('recognition');
      window.scrollTo({ top: sec.offsetTop, behavior: 'instant' });
    `
  });
  await sleep(500);
  await captureViewport('03_scrolled_nav_over_dark_section_1440x900.png');

  // 4. Hero immediately before first scroll
  await call('Runtime.evaluate', { expression: 'window.scrollTo({ top: 0, behavior: "instant" });' });
  await sleep(400);
  await captureViewport('04_hero_immediately_before_first_scroll_1440x900.png');

  // 5. White section immediately after one downward scroll gesture
  // Trigger gesture through our gesture transition or mouse wheel event
  await call('Input.dispatchMouseEvent', {
    type: 'mouseWheel',
    x: 720,
    y: 450,
    deltaX: 0,
    deltaY: 60
  });
  await sleep(1200); // wait for smooth scroll transition to complete
  await captureViewport('05_white_section_after_one_scroll_gesture_1440x900.png');

  // Multi-viewport test for scrolled nav
  const viewports = [
    { name: 'nav_1366x768.png', width: 1366, height: 768 },
    { name: 'nav_1280x800.png', width: 1280, height: 800 },
    { name: 'nav_1600x900.png', width: 1600, height: 900 },
    { name: 'nav_1920x1080.png', width: 1920, height: 1080 },
    { name: 'nav_1024x768.png', width: 1024, height: 768 },
    { name: 'nav_880x800.png', width: 880, height: 800 }
  ];

  for (const vp of viewports) {
    await call('Emulation.setDeviceMetricsOverride', {
      width: vp.width,
      height: vp.height,
      deviceScaleFactor: 2,
      mobile: false
    });
    await call('Runtime.evaluate', {
      expression: `
        const sec = document.getElementById('giris-anlatisi');
        window.scrollTo({ top: sec.offsetTop, behavior: 'instant' });
      `
    });
    await sleep(400);
    await captureViewport(vp.name);
  }

  // Check nav box dimensions via evaluate
  const navMetrics = await call('Runtime.evaluate', {
    expression: `
      (() => {
        const pill = document.querySelector('.header-pill');
        const brand = document.querySelector('.header-identity');
        const nav = document.querySelector('.header-nav');
        const cta = document.querySelector('.header-action');
        const pillRect = pill.getBoundingClientRect();
        return {
          pillWidth: pillRect.width,
          pillHeight: pillRect.height,
          brandWidth: brand.getBoundingClientRect().width,
          navWidth: nav.getBoundingClientRect().width,
          ctaWidth: cta.getBoundingClientRect().width
        };
      })()
    `,
    returnByValue: true
  });
  console.log('Nav Metrics at 880px:', JSON.stringify(navMetrics.result.value, null, 2));

  ws.close();
  chrome.kill();
  console.log('All tests completed successfully!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

const { spawn } = require('child_process');
const fs = require('fs');

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9245;
const sleep = (ms) => new Promise(res => setTimeout(res, ms));

async function main() {
  const profileDir = `/tmp/chrome-vp-profile-${Date.now()}`;
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

  const captureViewport = async (filename) => {
    const shot = await call('Page.captureScreenshot', {
      format: 'png',
      captureBeyondViewport: false
    });
    fs.writeFileSync(filename, Buffer.from(shot.data, 'base64'));
    console.log(`Saved ${filename}`);
  };

  const testViewports = [
    { name: '1440x900', width: 1440, height: 900, dsf: 2, mobile: false },
    { name: '1366x768', width: 1366, height: 768, dsf: 1, mobile: false },
    { name: '390x844', width: 390, height: 844, dsf: 2, mobile: true }
  ];

  for (const vp of testViewports) {
    console.log(`\n=== Testing Viewport: ${vp.name} ===`);
    await call('Emulation.setDeviceMetricsOverride', {
      width: vp.width,
      height: vp.height,
      deviceScaleFactor: vp.dsf,
      mobile: vp.mobile
    });
    await sleep(600);

    // Initial load / Hero
    await call('Runtime.evaluate', { expression: 'window.scrollTo({ top: 0, behavior: "instant" });' });
    await sleep(600);
    await captureViewport(`vp_${vp.name}_01_hero.png`);

    // Scene 2 / White section
    await call('Runtime.evaluate', {
      expression: `
        const s2 = document.getElementById('giris-anlatisi');
        if (s2) s2.scrollIntoView({ behavior: 'instant', block: 'start' });
      `
    });
    await sleep(600);
    await captureViewport(`vp_${vp.name}_02_scene2_white.png`);

    // Check scene heights
    const checkReport = await call('Runtime.evaluate', {
      expression: `
        (() => {
          const scenes = [
            { id: 'hero', el: document.querySelector('.hero-frame-wrapper') },
            { id: 'scene2', el: document.getElementById('giris-anlatisi') },
            { id: 'recognition', el: document.getElementById('tanima-alani') || document.getElementById('recognition') },
            { id: 'method', el: document.getElementById('yaklasim') || document.getElementById('method') },
            { id: 'inside-world', el: document.getElementById('ic-dunya') || document.getElementById('inside-world') },
            { id: 'journey', el: document.getElementById('yolculuk') || document.getElementById('journey') },
            { id: 'program', el: document.getElementById('program') },
            { id: 'fit', el: document.getElementById('uygunluk') || document.getElementById('fit') },
            { id: 'nilufer', el: document.getElementById('nilufer') },
            { id: 'decision', el: document.getElementById('karar') || document.getElementById('decision') },
            { id: 'faq', el: document.getElementById('sss') || document.getElementById('faq') },
            { id: 'close', el: document.getElementById('kapanis') || document.getElementById('close') }
          ];
          return scenes.map(s => {
            if (!s.el) return { id: s.id, missing: true };
            const h = s.el.offsetHeight;
            const vh = window.innerHeight;
            return {
              id: s.id,
              height: h,
              viewportHeight: vh,
              ratio: (h / vh).toFixed(2),
              exceedsViewport: h > vh + 5
            };
          });
        })()
      `,
      returnByValue: true
    });
    console.log(`Heights on ${vp.name}:`, JSON.stringify(checkReport.result.value, null, 2));
  }

  // Verify Scroll Snap Settlement on 1440x900
  console.log('\n=== Scroll Snap Gesture Verification (1440x900) ===');
  await call('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 2,
    mobile: false
  });
  await call('Runtime.evaluate', { expression: 'window.scrollTo({ top: 0, behavior: "instant" });' });
  await sleep(600);

  // Trigger one wheel scroll gesture
  await call('Input.dispatchMouseEvent', {
    type: 'mouseWheel',
    x: 720,
    y: 450,
    deltaX: 0,
    deltaY: 80
  });
  await sleep(1500);

  const finalPos = await call('Runtime.evaluate', {
    expression: `
      (() => {
        const s2 = document.getElementById('giris-anlatisi');
        return {
          scrollY: window.scrollY,
          s2OffsetTop: s2 ? s2.offsetTop : null,
          settledAtScene2: Math.abs(window.scrollY - (s2 ? s2.offsetTop : 0)) <= 2
        };
      })()
    `,
    returnByValue: true
  });
  console.log('Scroll settlement after 1 wheel gesture:', finalPos.result.value);

  await captureViewport('vp_1440x900_after_snap_gesture.png');

  ws.close();
  chrome.kill();
  fs.rmSync(profileDir, { recursive: true, force: true });
  console.log('\nAll tests complete!');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});

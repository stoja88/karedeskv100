/*
  Lightweight smoke test with Puppeteer.
  - Navigates a set of public routes
  - Captures console errors, page errors, and failed requests
  - Saves screenshots under tmp/
  - Exits non-zero if any error is detected
*/

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
const OUTPUT_DIR = path.join(process.cwd(), 'tmp');

const ROUTES = [
  '/',
  '/login',
  '/register',
  '/servicios/webs-express',
  '/servicios/asistencia-remota',
  '/servicios/consultoria-ia',
  '/servicios/vulnerabilidades',
];

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function sanitizeForFilename(text) {
  return text.replace(/[^a-z0-9-_]/gi, '_');
}

async function run() {
  ensureDir(OUTPUT_DIR);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  // Set a reasonable viewport to catch layout issues
  await page.setViewport({ width: 1366, height: 900, deviceScaleFactor: 1 });

  const globalErrors = [];

  page.on('pageerror', (err) => {
    const msg = `pageerror: ${err?.message || String(err)}`;
    globalErrors.push(msg);
    console.error(msg);
  });

  page.on('console', (msg) => {
    const type = msg.type?.() || 'log';
    // Only treat console.error as a failure. Warnings do not fail the smoke test.
    if (type === 'error') {
      const text = msg.text?.() || '';
      const formatted = `console: ${text}`;
      globalErrors.push(formatted);
      console.error(formatted);
    }
  });

  page.on('requestfailed', (req) => {
    const failure = req.failure?.();
    const msg = `requestfailed: ${req.url()} -> ${failure?.errorText || 'unknown error'}`;
    globalErrors.push(msg);
    console.error(msg);
  });

  for (const route of ROUTES) {
    const url = new URL(route, BASE_URL).toString();
    const label = sanitizeForFilename(route === '/' ? 'home' : route.slice(1));
    console.log(`\n==> Visiting ${url}`);
    try {
      const response = await page.goto(url, { waitUntil: 'networkidle2', timeout: 60_000 });
      const status = response?.status?.() ?? 'no-response';
      console.log(`status: ${status}`);
      const title = await page.title();
      console.log(`title: ${title}`);
      const screenshotPath = path.join(OUTPUT_DIR, `smoke-${label}.png`);
      await page.screenshot({ path: screenshotPath, fullPage: true });
      console.log(`screenshot: ${screenshotPath}`);
    } catch (err) {
      const msg = `navigation: ${url} -> ${(err && err.message) || String(err)}`;
      globalErrors.push(msg);
      console.error(msg);
    }
  }

  await browser.close();

  if (globalErrors.length > 0) {
    console.error(`\nSmoke test found ${globalErrors.length} error(s).`);
    process.exit(1);
  } else {
    console.log('\nSmoke test passed. No blocking errors detected.');
  }
}

run().catch((err) => {
  console.error('fatal:', err);
  process.exit(1);
});



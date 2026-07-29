// scripts/build-vercel.mjs
// Cross-platform build script for combined Vercel deployment.
// Builds ITM and NC Vite apps with explicit base paths and assembles them
// under dist/ alongside the root landing page and 404 page.

import { execFileSync } from 'node:child_process';
import {
  rmSync,
  mkdirSync,
  copyFileSync,
  cpSync,
  existsSync,
  readFileSync,
  readdirSync,
} from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Resolve repository root from this script's location
const __filename = fileURLToPath(import.meta.url);
const REPO_ROOT = path.resolve(path.dirname(__filename), '..');
const DIST = path.join(REPO_ROOT, 'dist');
const ITM_DIR = path.join(REPO_ROOT, 'itm');
const NC_DIR = path.join(REPO_ROOT, 'nc');
const IS_WIN = process.platform === 'win32';
const NPM_BIN = IS_WIN ? 'npm.cmd' : 'npm';

const REQUIRED_FILES = [
  path.join(DIST, 'index.html'),
  path.join(DIST, '404.html'),
  path.join(DIST, 'itm', 'index.html'),
  path.join(DIST, 'nc', 'index.html'),
];

function log(msg) {
  console.log(`[build-vercel] ${msg}`);
}

function fail(msg) {
  console.error(`[build-vercel] ERROR: ${msg}`);
  process.exit(1);
}

function buildApp(appDir, basePath) {
  log(`Building ${path.basename(appDir)} with VITE_BASE_PATH=${basePath}`);
  if (!existsSync(path.join(appDir, 'package.json'))) {
    fail(`Missing package.json in ${appDir}`);
  }
  const env = {
    ...process.env,
    VITE_BASE_PATH: basePath,
  };
  try {
    execFileSync(NPM_BIN, ['run', 'build'], {
      cwd: appDir,
      env,
      stdio: 'inherit',
      shell: IS_WIN,
    });
  } catch (err) {
    fail(`npm run build failed in ${appDir}: ${err.message}`);
  }
}

function copyTree(src, dest) {
  if (!existsSync(src)) {
    fail(`Source directory does not exist: ${src}`);
  }
  mkdirSync(path.dirname(dest), { recursive: true });
  cpSync(src, dest, { recursive: true });
}

function main() {
  // 1. Delete dist if exists
  if (existsSync(DIST)) {
    log(`Removing existing ${DIST}`);
    rmSync(DIST, { recursive: true, force: true });
  }

  // 2. Create fresh dist
  mkdirSync(DIST, { recursive: true });
  log(`Created ${DIST}`);

  // 3. Copy root index.html
  const rootIndex = path.join(REPO_ROOT, 'index.html');
  if (!existsSync(rootIndex)) fail(`Missing ${rootIndex}`);
  copyFileSync(rootIndex, path.join(DIST, 'index.html'));
  log('Copied root index.html');

  // 4. Copy root 404.html
  const root404 = path.join(REPO_ROOT, '404.html');
  if (!existsSync(root404)) fail(`Missing ${root404}`);
  copyFileSync(root404, path.join(DIST, '404.html'));
  log('Copied root 404.html');

  // 5-8. Build ITM and NC, copy dist trees
  buildApp(ITM_DIR, '/itm/');
  copyTree(path.join(ITM_DIR, 'dist'), path.join(DIST, 'itm'));

  buildApp(NC_DIR, '/nc/');
  copyTree(path.join(NC_DIR, 'dist'), path.join(DIST, 'nc'));

  // 10. Verify required files exist
  for (const f of REQUIRED_FILES) {
    if (!existsSync(f)) {
      fail(`Required file missing: ${f}`);
    }
  }

  // 11-12. Verify HTML asset references
  const itmHtml = readFileSync(path.join(DIST, 'itm', 'index.html'), 'utf8');
  if (!itmHtml.includes('/itm/assets/')) {
    fail('dist/itm/index.html does not reference /itm/assets/');
  }
  log('dist/itm/index.html references /itm/assets/ ✓');

  const ncHtml = readFileSync(path.join(DIST, 'nc', 'index.html'), 'utf8');
  if (!ncHtml.includes('/nc/assets/')) {
    fail('dist/nc/index.html does not reference /nc/assets/');
  }
  log('dist/nc/index.html references /nc/assets/ ✓');

  // 13. Print output tree (best effort — recursive)
  log('Final dist/ tree:');
  function walk(dir, prefix = '') {
    const entries = readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      console.log(`  ${prefix}${entry.isDirectory() ? '[dir] ' : '      '}${entry.name}`);
      if (entry.isDirectory() && !entry.name.startsWith('.')) {
        walk(full, prefix + '  ');
      }
    }
  }
  walk(DIST);

  console.log('');
  log('Build complete — dist/ is ready for Vercel deployment.');
}

main();

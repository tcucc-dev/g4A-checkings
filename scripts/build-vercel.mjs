// scripts/build-vercel.mjs
// Cross-platform build script for combined Vercel deployment.
// Builds all 3 department Vite apps (ITM, NC, WWW) with explicit base paths
// and assembles them under dist/ alongside the root landing page and 404 page.

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

const APPS = [
  { dir: path.join(REPO_ROOT, 'itm'), basePath: '/itm/' },
  { dir: path.join(REPO_ROOT, 'nc'),  basePath: '/nc/' },
  { dir: path.join(REPO_ROOT, 'www'), basePath: '/www/' },
  { dir: path.join(REPO_ROOT, 'freshman'), basePath: '/freshman/' },
];

const IS_WIN = process.platform === 'win32';
const NPM_BIN = IS_WIN ? 'npm.cmd' : 'npm';

const REQUIRED_FILES = [
  path.join(DIST, 'index.html'),
  path.join(DIST, '404.html'),
  ...APPS.map(a => path.join(DIST, path.basename(a.dir), 'index.html')),
];

function log(msg) {
  console.log(`[build-vercel] ${msg}`);
}

function fail(msg) {
  console.error(`[build-vercel] ERROR: ${msg}`);
  process.exit(1);
}

function buildApp(appDir, basePath) {
  const name = path.basename(appDir);
  log(`Building ${name} with VITE_BASE_PATH=${basePath}`);
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

  // 5-N. Build all apps, copy dist trees
  for (const app of APPS) {
    const name = path.basename(app.dir);
    buildApp(app.dir, app.basePath);
    copyTree(path.join(app.dir, 'dist'), path.join(DIST, name));
  }

  // N+1. Verify required files exist
  for (const f of REQUIRED_FILES) {
    if (!existsSync(f)) {
      fail(`Required file missing: ${f}`);
    }
  }

  // N+2. Verify HTML asset references
  for (const app of APPS) {
    const name = path.basename(app.dir);
    const html = readFileSync(path.join(DIST, name, 'index.html'), 'utf8');
    if (!html.includes(`${app.basePath}assets/`)) {
      fail(`dist/${name}/index.html does not reference ${app.basePath}assets/`);
    }
    log(`dist/${name}/index.html references ${app.basePath}assets/ ✓`);
  }

  // N+3. Print output tree (best effort)
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

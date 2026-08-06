import { defineConfig } from 'vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { DynamicPublicDirectory } from 'vite-multiple-assets';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Base path resolution (priority order):
//   1. VITE_BASE_PATH env var (used by root combined Vercel deploy):
//        ITM -> /itm/,  NC -> /nc/
//   2. VERCEL env var set (used by per-department Vercel projects):
//        base = '/'
//   3. Default (GitHub Pages sub-path under /g4A-checkings/<dept>/):
//        ITM -> /g4A-checkings/itm/,  NC -> /g4A-checkings/nc/
const defaultBase = '/g4A-checkings/itm/';
const basePath =
  process.env.VITE_BASE_PATH ||
  (process.env.VERCEL ? '/' : defaultBase);

export default defineConfig({
  base: basePath,
  // Use vite-multiple-assets to serve files from the repo-root shared/ dir.
  // Vite's native publicDir doesn't support external paths cleanly (see
  // vitejs/vite#16138), so this plugin (the community-validated workaround)
  // copies ../shared/** into dist/shared/ at build time.
  publicDir: false,
  plugins: [
    DynamicPublicDirectory(['../shared'])
  ],
  server: {
    port: 5173,
    host: '0.0.0.0',
    open: true,
    strictPort: false
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    emptyOutDir: true,
    assetsDir: 'assets',
    rollupOptions: {
      // /shared/* JS files are runtime URLs served by vite-multiple-assets.
      // Tell Rollup to leave them alone (browser fetches at request time).
      external: [/^\/[a-z0-9-]+\/(geo-toggle|style|stale-config)\.js$/]
    }
  }
});

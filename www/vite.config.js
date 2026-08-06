import { defineConfig } from 'vite';
import { DynamicPublicDirectory } from 'vite-multiple-assets';

// Base path resolution (priority order):
//   1. VITE_BASE_PATH env var (used by root combined Vercel deploy):
//        www -> /www/
//   2. VERCEL env var set (used by per-department Vercel projects):
//        base = '/'
//   3. Default (GitHub Pages sub-path under /www/www/):
//        www -> /www/www/
const defaultBase = '/www/www/';
const basePath =
  process.env.VITE_BASE_PATH ||
  (process.env.VERCEL ? '/' : defaultBase);

export default defineConfig({
  base: basePath,
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

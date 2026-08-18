import { defineConfig } from 'vite';

// Base path resolution (priority order):
//   1. VITE_BASE_PATH env var (used by root combined Vercel deploy):
//        ITM -> /itm/,  NC -> /nc/
//   2. VERCEL env var set (used by per-department Vercel projects):
//        base = '/'
//   3. Default (GitHub Pages sub-path under /g4A-checkings/<dept>/):
//        ITM -> /g4A-checkings/itm/,  NC -> /g4A-checkings/nc/
const defaultBase = '/g4A-checkings/nc/';
const basePath =
  process.env.VITE_BASE_PATH ||
  (process.env.VERCEL ? '/' : defaultBase);

export default defineConfig({
  base: basePath,
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
    assetsDir: 'assets'
  }
});

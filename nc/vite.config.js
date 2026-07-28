import { defineConfig } from 'vite';

// Base path resolution:
// - Vercel (VERCEL=1): deploy at root, use '/' for clean URLs
// - GitHub Pages (default): use sub-path under /g4A-checkings/<dept>/
const isVercel = !!process.env.VERCEL;
const basePath = isVercel ? '/' : '/g4A-checkings/nc/';

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

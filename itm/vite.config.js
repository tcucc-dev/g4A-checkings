import { defineConfig } from 'vite';

export default defineConfig({
  base: '/g4A-checkings/itm/',
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

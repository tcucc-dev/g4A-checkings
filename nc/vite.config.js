import { defineConfig } from 'vite';

export default defineConfig({
  base: '/g4A-checkings/nc/',
  server: {
    port: 5174,
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

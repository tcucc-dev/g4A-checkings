import { defineConfig } from 'vite';

const basePath = process.env.VITE_BASE_PATH || '/freshman/';

export default defineConfig({
  base: basePath,
  build: {
    target: 'esnext',
    assetsInlineLimit: 4096,
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    port: 5174,
  },
});

import { defineConfig } from 'vite';
import { DynamicPublicDirectory } from 'vite-multiple-assets';

const basePath = process.env.VITE_BASE_PATH || '/freshman/';

export default defineConfig({
  base: basePath,
  publicDir: false,
  plugins: [
    DynamicPublicDirectory(['../shared'])
  ],
  build: {
    target: 'esnext',
    assetsInlineLimit: 4096,
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      // /shared/* JS files are runtime URLs served by vite-multiple-assets.
      // Tell Rollup to leave them alone (browser fetches at request time).
      external: [/^\/[a-z0-9-]+\/(geo-toggle|style|stale-config)\.js$/]
    }
  },
  server: {
    port: 5174,
  },
});

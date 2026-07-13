import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative base so the build works when served from https://gmillia.github.io/illia
  base: './',
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      assets: path.resolve(__dirname, 'src/assets'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      views: path.resolve(__dirname, 'src/views'),
      layout: path.resolve(__dirname, 'src/layout'),
    },
  },
});

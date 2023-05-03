import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
      { find: '@styles', replacement: path.resolve(__dirname, 'src/styles') },
      { find: '@shared', replacement: path.resolve(__dirname, 'src/shared') },
      { find: '@routes', replacement: path.resolve(__dirname, 'src/routes') },
      {
        find: '@providers',
        replacement: path.resolve(__dirname, 'src/providers'),
      },
    ],
  },
});

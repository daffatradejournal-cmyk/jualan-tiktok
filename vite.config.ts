import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures relative assets paths so it works out of the box on GitHub Pages and local builds
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});

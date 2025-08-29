// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/cycle-rental-system/', // 👈 GitHub repo name (important for GitHub Pages)
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:3000', // 👈 Proxy for local backend during development
    },
  },
});

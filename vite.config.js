import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ace-website/', // ← must have trailing slash
  plugins: [react()],
});

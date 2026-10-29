import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/masterlab/', // ← cambia esto por el nombre de tu repo
});
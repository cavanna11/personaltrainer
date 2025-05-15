import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/<TU_REPO>/', // Reemplaza <TU_REPO> por el nombre de tu repo
  plugins: [react()],
});

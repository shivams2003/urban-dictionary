import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace 'urban-dictionary' with your actual repository name
const repositoryName = 'urban-dictionary';

// https://vitejs.dev/config/
export default defineConfig({
  base: `/${repositoryName}/`,
  plugins: [react()],
});

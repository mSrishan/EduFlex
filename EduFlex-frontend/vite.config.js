import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // The backend server address
        changeOrigin: true, // Controls the `Host` header
        rewrite: (path) => path.replace(/^\/api/, ''), // Removes `/api` prefix from the request URL
        secure: false, // If you are working with a self-signed certificate
      },
    },
  },
});

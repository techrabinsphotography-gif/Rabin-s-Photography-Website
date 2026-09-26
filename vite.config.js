import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      // During local dev, forward /api/v1/* to the hosted Render backend
      '/api/v1': {
        target: 'https://app-server-maaw.onrender.com',
        changeOrigin: true,
        secure: true,
      },
    },
  },
})

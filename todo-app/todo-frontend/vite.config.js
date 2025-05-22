import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.js'],
  },
  server: {
    allowedHosts: ['app', 'localhost', '127.0.0.1'], // 'app' whem nginx reverse proxy is used. 
    watch: {
      usePolling: true, // fixes live reload inside Docker. See https://vitejs.dev/config/server-options.html
    },
  },
})

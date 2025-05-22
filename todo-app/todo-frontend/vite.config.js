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
    watch: {
      usePolling: true, // fixes live reload inside Docker. See https://vitejs.dev/config/server-options.html
    },
  },
})

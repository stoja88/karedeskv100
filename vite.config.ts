import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  root: '.',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  define: {
    // Define process and other Node.js globals for browser compatibility
    global: 'globalThis',
    'process.env': {},
  },
  server: {
    port: 3001,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  // Add polyfills for Node.js modules
  optimizeDeps: {
    include: ['react', 'react-dom']
  },
})

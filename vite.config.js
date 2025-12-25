import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Note: PWA plugin temporarily disabled for Vite 7.x compatibility
// Re-enable after vite-plugin-pwa updates for Vite 7

export default defineConfig({
  base: '/',
  plugins: [
    react()
  ],
  build: {
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  server: {
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp'
    }
  },
  optimizeDeps: {
    exclude: ['@ffmpeg/ffmpeg', '@ffmpeg/util']
  }
})


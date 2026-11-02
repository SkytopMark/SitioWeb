import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: process.env.BASE_URL || '/',
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // Ignore unresolved import warnings for static assets
        if (warning.code === 'UNRESOLVED_IMPORT' && warning.source?.includes('/images/logos/')) {
          return
        }
        warn(warning)
      }
    }
  }
})

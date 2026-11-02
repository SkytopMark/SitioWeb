import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: process.env.BASE_URL || '/',
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // Only suppress expected static asset warnings from public folder
        if (
          warning.code === 'UNRESOLVED_IMPORT' &&
          warning.source?.includes('Header.vue') &&
          (warning.message?.includes('images/logos/isotipo-blanco.png') ||
           warning.message?.includes('images/logos/icono-horizontal-blanco.png'))
        ) {
          return // Expected: these are public folder assets
        }
        warn(warning)
      }
    }
  }
})

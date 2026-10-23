import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0A2540',
        orange: '#F58220',
        'light-blue': '#AEC3D5',
        'light-bg': '#D5DFE8',
        'page-bg': '#F5F5F5'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Saira', 'sans-serif']
      }
    }
  }
} satisfies Config

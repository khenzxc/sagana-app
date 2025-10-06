import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/sagana-app/', // ← palitan ng eksaktong repo name mo
})

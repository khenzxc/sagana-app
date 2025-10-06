import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Gumagana sa localhost at GitHub Pages
export default defineConfig({
  plugins: [react()],
})

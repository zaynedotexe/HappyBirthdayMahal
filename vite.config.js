import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // for GitHub Pages: https://zaynedotexe.github.io/HappyBirthdayMahal/
  base: process.env.NODE_ENV === 'production' ? '/HappyBirthdayMahal/' : '/',
  server: { port: 5173, host: true }
})

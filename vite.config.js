import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base URL must match the repository name for GitHub Pages project sites
  base: '/jedrzejmaciejewski.pl/',
  server: {
    host: true
  }
})

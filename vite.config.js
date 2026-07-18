import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Works for GitHub Pages project site: chowdaryram1.github.io/portfolio/
  base: process.env.GITHUB_PAGES === 'true' ? '/portfolio/' : './',
})

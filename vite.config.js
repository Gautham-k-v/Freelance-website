import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const pagesBase = '/Freelance-website/'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Actions sets GITHUB_ACTIONS and publishes this project site under
  // /Freelance-website/. Vercel and local builds are served from the domain root.
  base: process.env.GITHUB_ACTIONS ? pagesBase : '/',
})

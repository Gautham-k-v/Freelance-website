import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Project Pages lives at /Freelance-website/, not the domain root.
  // Dev stays at / so the local server does not need that prefix.
  base: command === 'build' ? '/Freelance-website/' : '/',
}))

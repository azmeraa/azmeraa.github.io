import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // This is a GitHub Pages user site (azmeraa.github.io), so the base is '/'.
  base: '/',
})

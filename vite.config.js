import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { sitemap } from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://gayatristeel.vercel.app',
      outDir: 'public',
      filename: 'sitemap.xml',
      lastmod: new Date().toISOString().split('T')[0],
      priority: 1.0,
    }),
  ],
})

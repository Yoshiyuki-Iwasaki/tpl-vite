import { resolve } from 'path'
import { defineConfig } from 'vite'

import VitePluginWebpAndPath from 'vite-plugin-webp-and-path'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
  root,
  build: {
    outDir,
    rollupOptions: {
      input: {
        index: resolve(root, 'index.html')
      }
    }
  },
  plugins: [VitePluginWebpAndPath()]
})

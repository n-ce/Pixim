import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  base: '/Pixim/',
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Pixim'
    }
  },
})

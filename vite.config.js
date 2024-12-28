import { defineConfig } from 'vite'
import { Path } from '@athenna/common'

export default defineConfig({
  build: {
    rollupOptions: {
      input: [Path.resources('css/app.scss'), Path.resources('js/app.js')]
    }
  }
})

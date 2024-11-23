import { defineConfig } from 'vite'
import PluginRestart from 'vite-plugin-restart'

export default defineConfig({
  assetsUrl: '/assets',
  buildDirectory: 'public/assets',
  build: {
    assetsDir: '',
    manifest: true,
    emptyOutDir: true,
    outDir: 'public/assets',
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      },
      input: ['src/resources/css/app.scss', 'src/resources/js/app.js']
    }
  },
  plugins: [PluginRestart({ reload: ['src/resources/views/**/*.edge'] })]
})

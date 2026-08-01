import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/ganesh/',

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        research: resolve(__dirname, 'research.html'),
        projects: resolve(__dirname, 'projects.html'),
        publications: resolve(__dirname, 'publications.html'),
        contact: resolve(__dirname, 'contact.html')
      }
    }
  },

  resolve: {
    alias: {
      'three/webgpu': resolve(
        __dirname,
        'node_modules/three/build/three.webgpu.js'
      ),
      'three/tsl': resolve(
        __dirname,
        'node_modules/three/build/three.tsl.js'
      )
    }
  }
})
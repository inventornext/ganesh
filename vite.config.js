import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/ganesh/',

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
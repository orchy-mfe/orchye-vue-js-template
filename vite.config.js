/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgr from 'vite-plugin-svgr'
import {visualizer} from 'rollup-plugin-visualizer'
import qiankun from 'vite-plugin-qiankun'

const port = process.env.PORT || 8080

export default defineConfig({
  plugins: [
    vue(),
    svgr(),
    visualizer(),
    qiankun('orchy-vue-js-template', {useDevMode: true}),
  ],
  base: mode === 'development' ? `http://localhost:${port}/` : '/orchy-vue-js-template/',
  server: {port},
  test: {
    environment: 'happy-dom',
    mockReset: true
  },
})

/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";
import { visualizer } from "rollup-plugin-visualizer";

const port = process.env.PORT || 8080;

export default defineConfig(({ mode }) => ({
  plugins: [
    vue(),
    svgLoader(),
    visualizer(),
  ],
  base:
    mode === "development"
      ? `http://localhost:${port}/`
      : "/orchy-vue-js-template/",
  server: { port, cors: true },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: '[name].js'
      }
    }
  },
  test: {
    environment: "happy-dom",
    mockReset: true,
  },
}));

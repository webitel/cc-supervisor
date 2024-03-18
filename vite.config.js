import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import vue from '@vitejs/plugin-vue'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import vitePluginRequire from 'vite-plugin-require'
const path = require("path");

export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    nodePolyfills({
      // To add only specific polyfills, add them here. If no option is passed, adds all polyfills
      include: ['buffer', 'stream', 'process'],
      globals: {
        Buffer: true, // can also be 'build', 'dev', or false
        process: true, // csv stringify
      },
    }),
    vitePluginRequire(),
  ],
  build: {
    commonjsOptions: { transformMixedEsModules: true } // Change
  },
  server: {
    host: true,
    port: 8080,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/app/css/main.scss";`,
      },
    },
  },
});

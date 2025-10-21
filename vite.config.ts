import vue from '@vitejs/plugin-vue';
import {resolve} from 'path'
import {defineConfig, loadEnv} from 'vite';

import {nodePolyfills} from 'vite-plugin-node-polyfills';
import createSvgSpritePlugin from 'vite-plugin-svg-sprite';
import vueDevTools from 'vite-plugin-vue-devtools';

export default ({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');

  return defineConfig({
    base: '/supervisor',
    define: {
      'process.env': JSON.parse(JSON.stringify(env)
        .replaceAll('VITE_', 'VUE_APP_')),
    },
    server: {
      host: true,
      port: 8080,
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
          // additionalData: `@use "@/app/css/main.scss" as *;`,
        },
      },
    },
    optimizeDeps: {
      include: ['clipboard-copy', 'deep-equal', 'deepmerge'],
    },
    resolve: {
      alias: {
        // vue: '@vue/compat',
        '@': resolve(__dirname, 'src'),
        'lodash/fp': 'lodash-es',
        lodash: 'lodash-es',
        '@aliasedDeps/api-services/axios': resolve(__dirname, 'src/app/api/instance'),
      },
    },
    plugins: [
      vue({
        template: {
          compilerOptions: {
            compatConfig: {
              MODE: 2,
            },
          },
        },
      }),
      vueDevTools({
        launchEditor: 'webstorm',
      }),
      // https://www.npmjs.com/package/vite-plugin-node-polyfills
      nodePolyfills({
        // To add only specific polyfills, add them here. If no option is passed, adds all polyfills
        include: ['buffer', 'stream', 'process'],
        globals: {
          Buffer: true, // can also be 'build', 'dev', or false
          process: true, // csv stringify
        },
      }),
      createSvgSpritePlugin({
        include: '**/sprite/*.svg',
      }),
    ],
    test: {
      globals: true,
      coverage: {
        enabled: true,
        reporter: 'json',
      },
      server: {
        deps: {
          inline: ['@webitel/ui-sdk'],
        },
      },
      environment: 'happy-dom',
      setupFiles: ['./tests/config/config.js'],
    },
  });
};

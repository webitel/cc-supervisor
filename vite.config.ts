import vue from '@vitejs/plugin-vue';
import {resolve} from 'path'
import {defineConfig} from 'vite';

import {nodePolyfills} from 'vite-plugin-node-polyfills';
import vueDevTools from 'vite-plugin-vue-devtools';

export default ({mode}) => {

  return defineConfig({
    base: '/supervisor',
    server: {
			// host: true,  // uncomment me to enable localhost access by IP (including from other devices in the network)
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
        },
      },
    },
    optimizeDeps: {
      include: ['clipboard-copy', 'deep-equal', 'deepmerge'],
      exclude: ['@webitel/styleguide'],
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

import { defineConfig, loadEnv } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import vue from '@vitejs/plugin-vue';
import createSvgSpritePlugin from 'vite-plugin-svg-sprite';

export default ({ mode }) => {
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
          additionalData: `@import "./src/app/css/main.scss";`,
        },
      },
    },
    // resolve: {
    //   alias: {
    //     vue: '@vue/compat',
    //   },
    // },
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
  });
};

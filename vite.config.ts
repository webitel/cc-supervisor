import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';

import { nodePolyfills } from 'vite-plugin-node-polyfills';
import vueDevTools from 'vite-plugin-vue-devtools';
import { vite as vidstack } from 'vidstack/plugins';

export default ({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');
	const isStagingEnv = env.VITE_STAGING_ENV === 'true';

	return defineConfig({
		base: '/supervisor',
		build: {
			sourcemap: isStagingEnv,
			minify: !isStagingEnv, // Disable minification for readable debugging
		},
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
			include: [
				'clipboard-copy',
				'deep-equal',
				'deepmerge',
			],
		},
		resolve: {
			alias: {
				// vue: '@vue/compat',
				'@': resolve(__dirname, 'src'),
				'lodash/fp': 'lodash-es',
				lodash: 'lodash-es',
				'@aliasedDeps/api-services/axios': resolve(
					__dirname,
					'src/app/api/instance',
				),
			},
		},
		plugins: [
			vue({
				template: {
					compilerOptions: {
						compatConfig: {
							MODE: 2,
						},
						isCustomElement: (tag) => tag.startsWith('media-'),
					},
				},
			}),
			vidstack(),
			vueDevTools(),
			// https://www.npmjs.com/package/vite-plugin-node-polyfills
			nodePolyfills({
				// To add only specific polyfills, add them here. If no option is passed, adds all polyfills
				include: [
					'buffer',
					'stream',
					'process',
				],
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
					inline: [
						'@webitel/ui-sdk',
						// Inlined so its extensionless `@webitel/ui-sdk/api/*` imports go
						// through vite's resolver (extension-completing to `.js`) instead
						// of native node package-exports resolution, which fails on them.
						'@webitel/ui-datalist',
					],
				},
			},
			environment: 'happy-dom',
			setupFiles: [
				'./tests/config/config.js',
			],
		},
	});
};

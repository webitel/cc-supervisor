import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { vite as vidstack } from 'vidstack/plugins';
import { defineConfig, loadEnv } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import vueDevTools from 'vite-plugin-vue-devtools';

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
			// Force a single Vue instance: @webitel/ui-sdk is npm-linked to a sibling
			// repo with its own node_modules/@vue/*, and resolve.dedupe alone doesn't
			// collapse them across the symlink (Vite matches dedupe by realpath, which
			// differs for the linked package). Hard-alias each Vue subpackage to
			// cc-supervisor's own copy so ui-sdk's components render against the same
			// runtime — otherwise PrimeVue internals relying on module-scoped state
			// (e.g. slots) break with "Cannot read properties of null (reading 'ce')".
			dedupe: [
				'vue',
				'@vue/runtime-core',
				'@vue/runtime-dom',
				'@vue/reactivity',
				'@vue/shared',
				'@vue/compiler-core',
				'@vue/compiler-dom',
				'@vue/compiler-sfc',
				'@vue/server-renderer',
				'pinia',
			],
			alias: {
				// vue: '@vue/compat',
				'@': resolve(__dirname, 'src'),
				'lodash/fp': 'lodash-es',
				lodash: 'lodash-es',
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
						// Inlined so primevue's `import ... from 'vue'` goes through vite's
						// resolver (and our resolve.alias) instead of being externalized to
						// a native Node require, which resolves `vue` relative to ui-sdk's
						// own node_modules and produces a second, incompatible Vue instance.
						'primevue',
						// Same reasoning for pinia: externalized native requires bypass our
						// pinia resolve.alias, so @webitel/ui-sdk's stores and the test's
						// createTestingPinia() end up on two different Pinia registries,
						// producing "no active Pinia" even though a testing Pinia is installed.
						'pinia',
						'@pinia/testing',
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

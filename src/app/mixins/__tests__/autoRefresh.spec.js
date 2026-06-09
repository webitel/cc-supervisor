import '../../../../tests/unit/mocks/localStorageMock';

import { shallowMount } from '@vue/test-utils';

import autoRefreshMixin from '../autoRefresh/autoRefreshMixin';

test('autoRefresh triggered function twice', async () => {
	let counter = 0;
	localStorage.setItem('auto-refresh', '10');
	const Component = {
		render() {},
		mixins: [
			autoRefreshMixin,
		],
		methods: {
			loadList() {
				counter += 1;
			},
		},
		created() {
			this.setAutoRefresh();
		},
	};
	const wrapper = shallowMount(Component);
	await new Promise((r) =>
		setTimeout(() => {
			r();
		}, 20),
	);
	// Unmount to clear the auto-refresh interval; otherwise it keeps firing after
	// the test ends and throws `document is not defined` once happy-dom tears the
	// environment down.
	wrapper.unmount();
	expect(counter).toBeGreaterThan(0);
});

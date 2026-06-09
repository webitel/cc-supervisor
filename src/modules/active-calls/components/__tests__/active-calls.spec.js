import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';

import API from '../../api/active-calls';
import activeCallsStore from '../../store/active-calls';
import ActiveCalls from '../the-active-calls.vue';

const items = [];

vi.spyOn(API, 'getList').mockImplementation(() => ({
	items,
}));

describe('Active Calls page', () => {
	let store;
	let mountOptions;

	beforeEach(() => {
		store = createStore({
			modules: {
				activeCalls: activeCallsStore,
			},
		});

		mountOptions = {
			global: {
				plugins: [
					store,
				],
				mocks: {
					$route: {
						query: {},
					},
				},
			},
		};
	});

	it('renders a component', () => {
		const wrapper = shallowMount(ActiveCalls, mountOptions);
		expect(wrapper.exists()).toBe(true);
	});
});

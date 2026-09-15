import { createTestingPinia } from '@pinia/testing';
import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';

import API from '../../api/active-calls';
import ActiveCalls from '../the-active-calls.vue';

const items = [];

vi.spyOn(API, 'getList').mockImplementation(() => ({
	items,
}));

describe('Active Calls page', () => {
	let store;
	let mountOptions;

	beforeEach(() => {
		store = createStore({});

		mountOptions = {
			global: {
				plugins: [
					store,
					createTestingPinia({
						createSpy: vi.fn,
					}),
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

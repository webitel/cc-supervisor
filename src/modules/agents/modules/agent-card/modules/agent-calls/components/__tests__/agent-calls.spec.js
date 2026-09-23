import { createTestingPinia } from '@pinia/testing';
import { shallowMount } from '@vue/test-utils';
import { AgentCallsAPI } from '@webitel/api-services/api';
import { createStore } from 'vuex';

import AgentCalls from '../agent-calls-tab.vue';

const items = [];

vi.spyOn(AgentCallsAPI, 'getList').mockImplementation(() =>
	Promise.resolve({
		items,
	}),
);

describe('Agent calls tab', () => {
	let store;
	let mountOptions = {};

	beforeEach(() => {
		store = createStore({
			modules: {
				agents: {
					namespaced: true,
					modules: {
						card: {
							namespaced: true,
							state: () => ({
								agent: {
									user: {
										id: 1,
									},
								},
							}),
						},
					},
				},
			},
		});

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
						params: {
							id: 1,
						},
						query: {},
					},
				},
			},
		};
	});

	it('renders a component', () => {
		const wrapper = shallowMount(AgentCalls, mountOptions);
		expect(wrapper.exists()).toBe(true);
	});
});

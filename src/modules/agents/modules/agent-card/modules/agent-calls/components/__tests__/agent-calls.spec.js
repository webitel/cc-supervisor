import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';

import AgentCallsAPI from '../../api/agent-calls';
import agentsCallsStore from '../../store/agent-calls';
import AgentCalls from '../agent-calls-tab.vue';

const items = [];

const namespace = 'agents/card/calls';

vi.mock('../../api/agent-calls');

describe('Agent calls tab', () => {
	let store;
	let mountOptions = {};

	beforeEach(() => {
		// The component reads absolute store paths (`agents/card/calls/...`),
		// so the module must be registered at that nested location.
		store = createStore({
			modules: {
				agents: {
					namespaced: true,
					modules: {
						card: {
							namespaced: true,
							state: () => ({
								agent: {
									user: {},
								},
							}),
							modules: {
								calls: agentsCallsStore,
							},
						},
					},
				},
			},
		});

		AgentCallsAPI.getList.mockImplementation(() =>
			Promise.resolve({
				items,
			}),
		);
		mountOptions = {
			props: {
				namespace,
			},
			global: {
				plugins: [
					store,
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

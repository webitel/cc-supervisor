import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';

import AgentCallsAPI from '../../api/agent-calls';
import agentsCallsStore from '../../store/agent-calls';
import AgentCalls from '../agent-calls-tab.vue';

const items = [];

const namespace = 'calls';

vi.mock('../../api/agent-calls');

describe('Agent calls tab', () => {
	let store;
	let mountOptions = {};

	beforeEach(() => {
		store = createStore({
			modules: {
				calls: agentsCallsStore,
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

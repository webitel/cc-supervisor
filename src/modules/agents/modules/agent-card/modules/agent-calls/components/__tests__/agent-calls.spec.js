import { createTestingPinia } from '@pinia/testing';
import { shallowMount } from '@vue/test-utils';
import { AgentCallsAPI } from '@webitel/api-services/api';

import AgentCalls from '../agent-calls-tab.vue';

const items = [];

vi.spyOn(AgentCallsAPI, 'getList').mockImplementation(() =>
	Promise.resolve({
		items,
	}),
);

describe('Agent calls tab', () => {
	let mountOptions = {};

	beforeEach(() => {
		mountOptions = {
			global: {
				plugins: [
					createTestingPinia({
						createSpy: vi.fn,
						initialState: {
							'agents/card': {
								agent: {
									user: {
										id: 1,
									},
								},
							},
						},
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

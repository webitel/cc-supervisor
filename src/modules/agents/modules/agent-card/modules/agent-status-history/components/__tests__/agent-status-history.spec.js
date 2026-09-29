import { createTestingPinia } from '@pinia/testing';
import { shallowMount } from '@vue/test-utils';
import { AgentsAPI } from '@webitel/api-services/api';
import AgentStatusHistory from '../agent-status-history-tab.vue';

const items = [];

vi.mock('vue-router', () => ({
	useRoute: () => ({
		params: {
			id: 1,
		},
	}),
}));

vi.spyOn(AgentsAPI, 'getAgentHistory').mockImplementation(() =>
	Promise.resolve({
		items,
	}),
);

describe('Agent status history tab', () => {
	let mountOptions = {};

	beforeEach(() => {
		mountOptions = {
			global: {
				plugins: [
					createTestingPinia({
						createSpy: vi.fn,
					}),
				],
			},
		};
	});

	it('renders a component', () => {
		const wrapper = shallowMount(AgentStatusHistory, mountOptions);
		expect(wrapper.exists()).toBe(true);
	});
});

import { shallowMount } from '@vue/test-utils';

import AgentStatusTimers from '../agent-panel/_internals/agent-status-timers.vue';

describe('Agent status timers', () => {
	it('renders a component', () => {
		const wrapper = shallowMount(AgentStatusTimers, {
			props: {
				status: {
					online: 123,
					pause: 123,
					offline: 123,
				},
			},
		});
		expect(wrapper.exists()).toBe(true);
	});
	it('renders component with empty status prop', () => {
		const wrapper = shallowMount(AgentStatusTimers, {
			props: {
				status: {},
			},
		});
		expect(wrapper.exists()).toBe(true);
	});
});

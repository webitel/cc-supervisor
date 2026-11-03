import { shallowMount } from '@vue/test-utils';

import AgentGeneralTab from '../agent-general-tab.vue';

describe('Agent General Tab', () => {
	it('renders a component', () => {
		const wrapper = shallowMount(AgentGeneralTab);
		expect(wrapper.exists()).toBe(true);
	});
});

import { createTestingPinia } from '@pinia/testing';
import { shallowMount } from '@vue/test-utils';
import { ref } from 'vue';

import AgentInfoForm from '../agent-info-form.vue';

vi.mock('@/app/composables/useUserAccessControl', () => ({
	useUserAccessControl: () => ({
		hasReadAccess: ref(true),
		hasCreateAccess: ref(true),
		hasUpdateAccess: ref(true),
		hasDeleteAccess: ref(true),
		hasSaveActionAccess: ref(true),
		disableUserInput: ref(false),
	}),
}));

describe('Agent Info Form', () => {
	const mountOptions = {
		global: {
			plugins: [
				createTestingPinia({
					createSpy: vi.fn,
				}),
			],
		},
	};
	it('renders a component', () => {
		const wrapper = shallowMount(AgentInfoForm, mountOptions);
		expect(wrapper.exists()).toBe(true);
	});
});

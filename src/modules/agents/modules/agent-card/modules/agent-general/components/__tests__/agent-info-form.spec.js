import { shallowMount } from '@vue/test-utils';
import { ref } from 'vue';
import { createStore } from 'vuex';

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

const namespace = 'card';
const agent = {};
const store = createStore({
	modules: {
		[namespace]: {
			namespaced: true,
			state: {
				agent,
			},
		},
	},
});

describe('Agent Info Form', () => {
	const mountOptions = {
		global: {
			plugins: [
				store,
			],
		},
		props: {
			namespace,
		},
	};
	it('renders a component', () => {
		const wrapper = shallowMount(AgentInfoForm, mountOptions);
		expect(wrapper.exists()).toBe(true);
	});
});

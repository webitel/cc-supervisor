import { createTestingPinia } from '@pinia/testing';
import { shallowMount } from '@vue/test-utils';
import { AgentSkillsAPI } from '@webitel/api-services/api';
import { ref } from 'vue';
import AgentSkillsTab from '../agent-skills-tab.vue';

const items = [];

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

vi.mock('vue-router', () => ({
	useRoute: () => ({
		params: {
			id: 1,
		},
	}),
	useRouter: () => ({
		push: vi.fn(),
	}),
}));

vi.spyOn(AgentSkillsAPI, 'getList').mockImplementation(() =>
	Promise.resolve({
		items,
	}),
);

describe('Agent skills tab', () => {
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
		const wrapper = shallowMount(AgentSkillsTab, mountOptions);
		expect(wrapper.exists()).toBe(true);
	});
});

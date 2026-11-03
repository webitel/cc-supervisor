import { createTestingPinia } from '@pinia/testing';
import { shallowMount } from '@vue/test-utils';
import { ref } from 'vue';

import { useAgentCardStore } from '../../stores/agentCardStore';
import AgentPage from '../agent-card.vue';

const agentId = 1;

vi.mock('vue-router', () => ({
	useRoute: () => ({
		params: {
			id: agentId,
		},
		query: {
			q: 'vi',
		},
	}),
	useRouter: () => ({
		push: vi.fn(),
	}),
}));

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

describe('Agent page', () => {
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
		const wrapper = shallowMount(AgentPage, mountOptions);
		expect(wrapper.classes('agent-page')).toBe(true);
	});
	it('initially sets agent id from $route id param', () => {
		shallowMount(AgentPage, mountOptions);
		expect(useAgentCardStore().setAgentId).toHaveBeenCalledWith(agentId);
	});
	it('initially loads agent', () => {
		shallowMount(AgentPage, mountOptions);
		expect(useAgentCardStore().loadAgent).toHaveBeenCalled();
	});
	it('sets agent id before loading agent', () => {
		shallowMount(AgentPage, mountOptions);
		const store = useAgentCardStore();
		expect(store.setAgentId.mock.invocationCallOrder[0]).toBeLessThan(
			store.loadAgent.mock.invocationCallOrder[0],
		);
	});
});

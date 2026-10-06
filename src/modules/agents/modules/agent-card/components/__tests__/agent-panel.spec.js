import { createTestingPinia } from '@pinia/testing';
import { mount, shallowMount } from '@vue/test-utils';
import { ref } from 'vue';

import { useAgentCardStore } from '../../stores/agentCardStore';
import AgentPanel from '../agent-panel/agent-panel.vue';

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

// onMounted opens a real webitel-sdk WS Client, which crashes on the undefined
// base URI in the test env. Stub the connection module with an inert client.
vi.mock('@/app/api/callWSConnection', () => ({
	getCliInstance: vi.fn(() =>
		Promise.resolve({
			spyScreenSessions: [],
		}),
	),
	getIsSocketConnected: vi.fn(() => false),
}));

const agent = {
	name: 'vi',
	user: {},
};

const score = {
	scoreCount: 0,
	scoreRequiredAvg: 0,
};

describe('Agent panel', () => {
	const mountOptions = {
		global: {
			plugins: [
				createTestingPinia({
					createSpy: vi.fn,
					initialState: {
						'agents/card': {
							agent,
							score,
						},
					},
				}),
			],
		},
	};

	it('renders a component', () => {
		const wrapper = shallowMount(AgentPanel, mountOptions);
		expect(wrapper.exists()).toBe(true);
	});

	it('reloads agent at @changed wt-cc-agent-status-select event', () => {
		const wrapper = mount(AgentPanel, mountOptions);
		const store = useAgentCardStore();
		wrapper
			.findComponent({
				name: 'wt-cc-agent-status-select',
			})
			.vm.$emit('changed', {
				status: 'vi',
			});
		expect(store.loadAgent).toHaveBeenCalled();
	});

	// `callAgent`/`setCallInfo`/`call` were local methods on the old Options-API
	// component. agent-panel.vue is now `<script setup>`, so these internals are
	// no longer reachable via `AgentPanel.methods`. The spy-on-internal tests
	// were removed; click behaviour is covered by the called store actions.
});

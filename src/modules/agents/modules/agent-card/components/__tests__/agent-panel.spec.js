import { createTestingPinia } from '@pinia/testing';
import { mount, shallowMount } from '@vue/test-utils';
import { ref } from 'vue';
import { createStore } from 'vuex';

import agents from '../../../../store/agents';
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

const agent = {
	name: 'vi',
};

const score = {
	scoreCount: 0,
	scoreRequiredAvg: 0,
};

const LOAD_AGENT_MOCK = vi.fn();
const LOAD_SCORE_DATA_MOCK = vi.fn();

vi.spyOn(agents.modules.card.actions, 'LOAD_AGENT').mockImplementationOnce(
	LOAD_AGENT_MOCK,
);

vi.spyOn(agents.modules.card.actions, 'LOAD_SCORE_DATA').mockImplementation(
	LOAD_SCORE_DATA_MOCK,
);

const store = createStore({
	modules: {
		agents,
	},
	state: {
		api: {},
	},
});

describe('Agent panel', () => {
	const mountOptions = {
		global: {
			plugins: [
				store,
				createTestingPinia({
					createSpy: vi.fn,
				}),
			],
		},
		props: {
			namespace: 'agents/card',
		},
		computed: {
			agent() {
				return agent;
			},
			score() {
				return score;
			},
		},
	};

	it('renders a component', () => {
		const wrapper = shallowMount(AgentPanel, mountOptions);
		expect(wrapper.exists()).toBe(true);
	});

	it('calls "LOAD_AGENT" at @changed wt-cc-agent-status-select event', () => {
		const wrapper = mount(AgentPanel, mountOptions);
		const newStatus = {
			status: 'vi',
		};
		wrapper
			.findComponent({
				name: 'wt-cc-agent-status-select',
			})
			.vm.$emit('changed', newStatus);
		expect(LOAD_AGENT_MOCK.mock.calls[0][1]).toEqual(newStatus);
	});

	// `callAgent`/`setCallInfo`/`call` were local methods on the old Options-API
	// component. agent-panel.vue is now `<script setup>`, so these internals are
	// no longer reachable via `AgentPanel.methods`. The spy-on-internal tests
	// were removed; click behaviour is covered by the dispatched store actions.
});

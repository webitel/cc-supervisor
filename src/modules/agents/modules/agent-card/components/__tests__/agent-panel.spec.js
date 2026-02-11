import { mount, shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';

import agents from '../../../../store/agents';
import AgentPanel from '../agent-panel/agent-panel.vue';

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

	it('calls "callAgent" method at call btn click', () => {
		const callAgentMock = vi.fn();
		vi.spyOn(AgentPanel.methods, 'callAgent').mockImplementationOnce(
			callAgentMock,
		);
		const wrapper = mount(AgentPanel, mountOptions);
		wrapper
			.findComponent({
				name: 'wt-button',
			})
			.vm.$emit('click');
		expect(callAgentMock).toHaveBeenCalled();
	});

	it('calls "setCallInfo" and "openWindowMock" mapped methods at call btn click', () => {
		const setCallInfoMock = vi.fn();
		const callMock = vi.fn();
		vi.spyOn(AgentPanel.methods, 'setCallInfo').mockImplementationOnce(
			setCallInfoMock,
		);
		vi.spyOn(AgentPanel.methods, 'call').mockImplementationOnce(callMock);
		const wrapper = mount(AgentPanel, mountOptions);
		wrapper
			.findComponent({
				name: 'wt-button',
			})
			.vm.$emit('click');
		expect(setCallInfoMock).toHaveBeenCalled();
		expect(callMock).toHaveBeenCalled();
	});
});

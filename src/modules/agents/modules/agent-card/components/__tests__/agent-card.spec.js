import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';

import AgentPage from '../agent-card.vue';

vi.mock('../../../../api/agents');

const agentId = 1;
const $router = {
	replace: vi.fn(),
};
const $route = {
	params: {
		id: agentId,
	},
	query: {
		q: 'vi',
	},
};

describe('Agent page', () => {
	let store;
	let mountOptions = {};

	const actionsMock = {
		SET_AGENT_ID: vi.fn(),
		LOAD_AGENT: vi.fn(),
	};

	beforeEach(() => {
		actionsMock.SET_AGENT_ID.mockClear();
		actionsMock.LOAD_AGENT.mockClear();

		store = createStore({
			modules: {
				agents: {
					namespaced: true,
					modules: {
						card: {
							// ...card,
							namespaced: true,
							actions: actionsMock,
						},
					},
				},
			},
		});

		mountOptions = {
			global: {
				mocks: {
					$router,
					$route,
				},
				plugins: [
					store,
				],
			},
		};
	});

	it('renders a component', () => {
		const wrapper = shallowMount(AgentPage, mountOptions);
		expect(wrapper.classes('agent-page')).toBe(true);
	});
	it('initially sets 1st tab as current', async () => {
		const wrapper = shallowMount(AgentPage, mountOptions);
		await wrapper.vm.$nextTick();
		expect(wrapper.vm.currentTab).toEqual(wrapper.vm.tabs[0]);
	});
	it('initially dispatches SET_AGENT_ID with $route id param', async () => {
		const wrapper = shallowMount(AgentPage, mountOptions);
		await wrapper.vm.$nextTick();
		expect(actionsMock.SET_AGENT_ID.mock.calls[0][1]).toBe(agentId);
	});
	it('initially dispatches LOAD_AGENT', async () => {
		const wrapper = shallowMount(AgentPage, mountOptions);
		await wrapper.vm.$nextTick();
		expect(actionsMock.LOAD_AGENT).toHaveBeenCalled();
	});
	it('SET_AGENT_ID is called before LOAD_AGENT', async () => {
		const wrapper = shallowMount(AgentPage, mountOptions);
		await wrapper.vm.$nextTick();
		expect(actionsMock.SET_AGENT_ID.mock.invocationCallOrder[0]).toBeLessThan(
			actionsMock.LOAD_AGENT.mock.invocationCallOrder[0],
		);
	});
});

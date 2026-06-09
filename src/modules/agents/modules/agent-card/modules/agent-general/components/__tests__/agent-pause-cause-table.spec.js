import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';

import AgentStatusAPI from '../../api/agent-pause-causes';
import agentStatusStore from '../../store/agent-pause-causes';
import AgentPauseCauseTable from '../agent-pause-cause-table.vue';

vi.mock('../../api/agent-pause-causes');

const namespace = 'agentPauseCause';
const store = createStore({
	modules: {
		[namespace]: agentStatusStore,
	},
});

const items = [];
AgentStatusAPI.getList.mockImplementation(() =>
	Promise.resolve({
		items,
	}),
);

describe('Agent Pause Cause Table', () => {
	const mountOptions = {
		global: {
			plugins: [
				store,
			],
			mocks: {
				$route: {
					query: '',
				},
			},
		},
		props: {
			namespace,
		},
	};
	it('renders a component', () => {
		const wrapper = shallowMount(AgentPauseCauseTable, mountOptions);
		expect(wrapper.exists()).toBe(true);
	});
	// Duration/progress-color logic moved to the ui-sdk composable
	// `useRepresentableAgentPauseCause` and is tested there. The old
	// component-method tests were removed when that logic left this component.
});

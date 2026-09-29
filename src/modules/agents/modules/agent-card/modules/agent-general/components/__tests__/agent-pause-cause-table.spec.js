import { createTestingPinia } from '@pinia/testing';
import { shallowMount } from '@vue/test-utils';
import { AgentsAPI } from '@webitel/api-services/api';
import AgentPauseCauseTable from '../agent-pause-cause-table.vue';

const items = [];

vi.mock('vue-router', () => ({
	useRoute: () => ({
		params: {
			id: 1,
		},
	}),
}));

vi.spyOn(AgentsAPI, 'getPauseCausesForAgent').mockImplementation(() =>
	Promise.resolve({
		items,
	}),
);

describe('Agent Pause Cause Table', () => {
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

	it('renders a component', async () => {
		const wrapper = shallowMount(AgentPauseCauseTable, mountOptions);
		await vi.dynamicImportSettled();
		expect(wrapper.exists()).toBe(true);
	});
	// Duration/progress-color logic moved to the ui-sdk composable
	// `useRepresentableAgentPauseCause` and is tested there. The old
	// component-method tests were removed when that logic left this component.
});

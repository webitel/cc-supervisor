import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';

import skills from '../../store/agent-skills';
import AgentSkillPopup from '../agent-skill-popup.vue';

const namespace = 'skills';
const store = createStore({
	modules: {
		[namespace]: skills,
	},
});

describe('Agent Skill Popup', () => {
	const v$ = {
		itemInstance: {
			$touch: vi.fn(),
		},
	};
	const mountOptions = {
		props: {
			namespace,
		},
		global: {
			plugins: [
				store,
			],
			mocks: {
				v$,
			},
		},
	};
	it('renders a component', () => {
		const wrapper = shallowMount(AgentSkillPopup, mountOptions);
		expect(wrapper.exists()).toBe(true);
	});
});

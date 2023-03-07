import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';
import AgentSkillPopup from '../agent-skill-popup.vue';
import skills from '../../store/agent-skills';

const namespace = 'skills';
const store = createStore({
  modules: { [namespace]: skills },
});

describe('Agent Skill Popup', () => {
  const v$ = { itemInstance: { $touch: jest.fn() } };
  const mountOptions = {
    props: { namespace },
    global: {
      plugins: [store],
      mocks: { v$ },
    },
  };
  it('renders a component', () => {
    const wrapper = shallowMount(AgentSkillPopup, mountOptions);
    expect(wrapper.exists()).toBe(true);
  });
});

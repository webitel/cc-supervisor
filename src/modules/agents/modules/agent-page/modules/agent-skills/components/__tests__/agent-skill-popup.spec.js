import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import AgentSkillPopup from '../agent-skill-popup.vue';
import agentSkills from '../../store/agent-skills';

const localVue = createLocalVue();
localVue.use(Vuex);

const namespace = 'agentSkills';
const store = new Vuex.Store({
  modules: { [namespace]: agentSkills },
});


describe('Agent Skill Popup', () => {
  const $v = { itemInstance: { $touch: jest.fn() } };
  const mountOptions = {
    localVue,
    store,
    propsData: { namespace },
    mocks: { $v },
  };
  it('renders a component', () => {
    const wrapper = shallowMount(AgentSkillPopup, mountOptions);
    expect(wrapper.exists()).toBe(true);
  });
});

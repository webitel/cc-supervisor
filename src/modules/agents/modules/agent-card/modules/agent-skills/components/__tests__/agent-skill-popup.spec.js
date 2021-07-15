import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import AgentSkillPopup from '../agent-skill-popup.vue';
import skills from '../../store/agent-skills';

const localVue = createLocalVue();
localVue.use(Vuex);

const namespace = 'skills';
const store = new Vuex.Store({
  modules: { [namespace]: skills },
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

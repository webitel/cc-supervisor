import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import AgentInfoForm from '../agent-info-form.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

const namespace = 'card';
const agent = {};
const store = new Vuex.Store({
  modules: {
    [namespace]: {
      namespaced: true,
      state: { agent },
    },
    userinfo: { namespaced: true },
  },
});

describe('Agent Info Form', () => {
  const mountOptions = {
    localVue,
    store,
    propsData: { namespace },
  };
  it('renders a component', () => {
    const wrapper = shallowMount(AgentInfoForm, mountOptions);
    expect(wrapper.exists()).toBe(true);
  });
});

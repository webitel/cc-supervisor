import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import AgentFilters from '../agent-filters.vue';
import filters from '../../store/filters';

const localVue = createLocalVue();
localVue.use(Vuex);

const namespace = 'agents';
const agent = { isAdmin: true };

const store = new Vuex.Store({
  modules: {
    [namespace]: filters,
    userinfo: {
      namespaced: true,
      state: { agent },
    },
  },
});

describe('Agent Filters wrapper', () => {
  const mountOptions = {
    localVue,
    store,
    propsData: { namespace },
  };
  it('renders a component', () => {
    const wrapper = shallowMount(AgentFilters, mountOptions);
    expect(wrapper.exists()).toBe(true);
  });
});

import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';
import AgentFilters from '../agent-filters.vue';
import filters from '../../store/filters';

const namespace = 'agents';
const agent = { isAdmin: true };

const store = createStore({
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
    global: {
      plugins: [store],
    },
    props: { namespace },
  };
  it('renders a component', () => {
    const wrapper = shallowMount(AgentFilters, mountOptions);
    expect(wrapper.exists()).toBe(true);
  });
});

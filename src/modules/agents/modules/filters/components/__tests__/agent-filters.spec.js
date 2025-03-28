import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';

import filters from '../../store/filters';
import AgentFilters from '../agent-filters.vue';

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

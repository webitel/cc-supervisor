import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';
import ActiveCallsFilters from '../active-calls-filters.vue';
import filters from '../../store/filters';

const namespace = 'activeCalls';
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

describe('Active Calls Filters wrapper', () => {
  const mountOptions = {
    global: {
      plugins: [store],
    },
    props: { namespace },
  };
  it('renders a component', () => {
    const wrapper = shallowMount(ActiveCallsFilters, mountOptions);
    expect(wrapper.exists()).toBe(true);
  });
});

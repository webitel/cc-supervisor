import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';

import userinfo from '../../../../../userinfo/store/userinfo';
import filters from '../../store/filters';
import QueueFilters from '../queue-filters.vue';

const namespace = 'queues';
const agent = {
  isAdmin: false,
};

const store = createStore({
  modules: {
    [namespace]: filters,
    userinfo: {
      ...userinfo,
      state: { agent },
    },
  },
});

describe('Queue Filters wrapper', () => {
  const mountOptions = {
    global: {
      plugins: [store],
    },
    props: { namespace },
  };
  it('renders a component', () => {
    const wrapper = shallowMount(QueueFilters, mountOptions);
    expect(wrapper.exists()).toBe(true);
  });
});

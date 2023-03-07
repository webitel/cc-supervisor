import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';
import QueueFilters from '../queue-filters.vue';
import filters from '../../store/filters';
import userinfo from '../../../../../userinfo/store/userinfo';

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
  it('includes team filter is agent is admin', async () => {
      agent.isAdmin = true;
      const wrapper = shallowMount(QueueFilters, mountOptions);
      await wrapper.vm.$nextTick();
      expect(wrapper.vm.availableFilters.find((filter) => filter.filterQuery === 'team'))
      .toBeTruthy();
    });
});

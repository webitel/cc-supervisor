import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import QueueFilters from '../queue-filters.vue';
import filters from '../../store/filters';
import userinfo from '../../../../../userinfo/store/userinfo';

const localVue = createLocalVue();
localVue.use(Vuex);

const namespace = 'queues';
const agent = {
  isAdmin: false,
};

const store = new Vuex.Store({
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
    localVue,
    store,
    propsData: { namespace },
  };
  it('renders a component', () => {
    const wrapper = shallowMount(QueueFilters, mountOptions);
    expect(wrapper.exists()).toBe(true);
  });
  it('renders all filters', () => {
    const wrapper = shallowMount(QueueFilters, mountOptions);
    expect(wrapper.findAll('.filter-item').length).toBe(wrapper.vm.availableFilters.length);
  });
  it('includes team filter is agent is admin', async () => {
      agent.isAdmin = true;
      const wrapper = shallowMount(QueueFilters, mountOptions);
      await wrapper.vm.$nextTick();
      expect(wrapper.vm.availableFilters.find((filter) => filter.filterQuery === 'team'))
      .toBeTruthy();
    });
});

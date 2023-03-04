import { shallowMount } from '@vue/test-utils';
import FilterFrom from '../filter-from.vue';
import FilterTo from '../filter-to.vue';
import FilterPagination from '../filter-pagination.vue';
import store from '../../../../../app/store/index';

const $route = { query: {} };

describe('Filter components', () => {
  it('renders from filter component', () => {
    const namespace = 'agents/card/calls/filters';
    const wrapper = shallowMount(FilterFrom, {
      global: {
        plugins: [store],
        mocks: { $route },
      },
      props: { namespace },
    });
    expect(wrapper.findComponent({ name: 'wt-datetimepicker' }).isVisible()).toBe(true);
  });
  it('renders To filter component', () => {
    const namespace = 'agents/card/calls/filters';
    const wrapper = shallowMount(FilterTo, {
      global: {
        plugins: [store],
        mocks: { $route },
      },
      props: { namespace },
    });
    expect(wrapper.findComponent({ name: 'wt-datetimepicker' }).isVisible()).toBe(true);
  });

  it('renders pagination filter component', () => {
    const namespace = 'queues/filters';
    const wrapper = shallowMount(FilterPagination, {
      global: {
        plugins: [store],
        mocks: { $route },
      },
      props: { namespace },
    });
    expect(wrapper.findComponent({ name: 'wt-pagination' }).isVisible()).toBe(true);
  });
});

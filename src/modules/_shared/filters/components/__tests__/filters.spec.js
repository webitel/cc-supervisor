import { mount } from '@vue/test-utils';

import store from '../../../../../app/store/index';
import FilterFrom from '../filter-from.vue';
import FilterPagination from '../filter-pagination.vue';
import FilterTo from '../filter-to.vue';

const $route = { query: {} };

describe('Filter components', () => {
  it('renders from filter component', () => {
    const namespace = 'agents/card/calls/filters';
    const wrapper = mount(FilterFrom, {
      shallow: true,
      global: {
        plugins: [store],
        mocks: { $route },
      },
      props: { namespace },
    });
    expect(wrapper.findComponent({ name: 'wt-datepicker' }).isVisible()).toBe(true);
  });
  it('renders To filter component', () => {
    const namespace = 'agents/card/calls/filters';
    const wrapper = mount(FilterTo, {
      shallow: true,
      global: {
        plugins: [store],
        mocks: { $route },
      },
      props: { namespace },
    });
    expect(wrapper.findComponent({ name: 'wt-datepicker' }).isVisible()).toBe(true);
  });

  it('renders pagination filter component', () => {
    const namespace = 'queues/filters';
    const wrapper = mount(FilterPagination, {
      shallow: true,
      global: {
        plugins: [store],
        mocks: { $route },
      },
      props: { namespace },
    });
    expect(wrapper.findComponent({ name: 'wt-pagination' }).isVisible()).toBe(true);
  });
});

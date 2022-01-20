import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import FilterFrom from '../filter-from.vue';
import FilterTo from '../filter-to.vue';
import FilterPagination from '../filter-pagination.vue';
import store from '../../../../../app/store/index';

const localVue = createLocalVue().use(Vuex);
const $route = { query: {} };

describe('Filter components', () => {
  it('renders from filter component', () => {
    const namespace = 'agents/card/calls/filters';
    const wrapper = shallowMount(FilterFrom, {
      localVue,
      store,
      propsData: { namespace },
      mocks: { $route },
    });
    expect(wrapper.findComponent({ name: 'wt-datetimepicker' }).element).toBeVisible();
  });
  it('renders To filter component', () => {
    const namespace = 'agents/card/calls/filters';
    const wrapper = shallowMount(FilterTo, {
      localVue,
      store,
      propsData: { namespace },
      mocks: { $route },
    });
    expect(wrapper.findComponent({ name: 'wt-datetimepicker' }).element).toBeVisible();
  });

  it('renders pagination filter component', () => {
    const namespace = 'queues/filters';
    const wrapper = shallowMount(FilterPagination, {
      localVue,
      store,
      propsData: { namespace },
      mocks: { $route },
    });
    expect(wrapper.findComponent({ name: 'wt-pagination' }).element).toBeVisible();
  });
});

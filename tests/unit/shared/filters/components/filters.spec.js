import { shallowMount } from '@vue/test-utils';
import FilterAgent from '../../../../../src/shared/filters/components/filter-agent.vue';
import FilterDirection from '../../../../../src/shared/filters/components/filter-direction.vue';
import FilterGateway from '../../../../../src/shared/filters/components/filter-gateway.vue';
import FilterPagination from '../../../../../src/shared/filters/components/filter-pagination.vue';
import FilterPeriod from '../../../../../src/shared/filters/components/filter-period.vue';
import FilterQueue from '../../../../../src/shared/filters/components/filter-queue.vue';
import FilterQueueType from '../../../../../src/shared/filters/components/filter-queue-type.vue';
import FilterSearch from '../../../../../src/shared/filters/components/filter-search.vue';
import FilterStatus from '../../../../../src/shared/filters/components/filter-status.vue';
import FilterTeam from '../../../../../src/shared/filters/components/filter-team.vue';
import FilterUser from '../../../../../src/shared/filters/components/filter-user.vue';
import FilterUtilization from '../../../../../src/shared/filters/components/filter-utilization.vue';

describe('Filter components', () => {
  it('renders agent filter component', () => {
    const wrapper = shallowMount(FilterAgent, { mocks: { $route: { query: {} } } });
    expect(wrapper.findComponent({ name: 'wt-select' }).element).toBeVisible();
  });

  it('renders direction filter component', () => {
    const wrapper = shallowMount(FilterDirection, { mocks: { $route: { query: {} } } });
    expect(wrapper.findComponent({ name: 'wt-select' }).element).toBeVisible();
  });

  it('renders gateway filter component', () => {
    const wrapper = shallowMount(FilterGateway, { mocks: { $route: { query: {} } } });
    expect(wrapper.findComponent({ name: 'wt-select' }).element).toBeVisible();
  });

  it('renders pagination filter component', () => {
    const wrapper = shallowMount(FilterPagination, { mocks: { $route: { query: {} } } });
    expect(wrapper.findComponent({ name: 'wt-pagination' }).element).toBeVisible();
  });

  it('renders period filter component', () => {
    const wrapper = shallowMount(FilterPeriod, { mocks: { $route: { query: {} } } });
    expect(wrapper.findComponent({ name: 'wt-select' }).element).toBeVisible();
  });

  it('renders queue filter component', () => {
    const wrapper = shallowMount(FilterQueue, { mocks: { $route: { query: {} } } });
    expect(wrapper.findComponent({ name: 'wt-select' }).element).toBeVisible();
  });

  it('renders queue type filter component', () => {
    const wrapper = shallowMount(FilterQueueType, { mocks: { $route: { query: {} } } });
    expect(wrapper.findComponent({ name: 'wt-select' }).element).toBeVisible();
  });

  it('renders search filter component', () => {
    const wrapper = shallowMount(FilterSearch, { mocks: { $route: { query: {} } } });
    expect(wrapper.findComponent({ name: 'wt-search-bar' }).element).toBeVisible();
  });

  it('renders status filter component', () => {
    const wrapper = shallowMount(FilterStatus, { mocks: { $route: { query: {} } } });
    expect(wrapper.findComponent({ name: 'wt-select' }).element).toBeVisible();
  });

  it('renders team filter component', () => {
    const wrapper = shallowMount(FilterTeam, { mocks: { $route: { query: {} } } });
    expect(wrapper.findComponent({ name: 'wt-select' }).element).toBeVisible();
  });

  it('renders user filter component', () => {
    const wrapper = shallowMount(FilterUser, { mocks: { $route: { query: {} } } });
    expect(wrapper.findComponent({ name: 'wt-select' }).element).toBeVisible();
  });

  it('renders utilization filter component', () => {
    const wrapper = shallowMount(FilterUtilization, { mocks: { $route: { query: {} } } });
    expect(wrapper.findComponent({ name: 'wt-select' }).element).toBeVisible();
  });
});

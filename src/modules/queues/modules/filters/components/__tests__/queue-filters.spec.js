import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import QueueFilters from '../queue-filters.vue';
import filters from '../../store/filters';
import userinfo from '../../../../../userinfo/store/userinfo';

const localVue = createLocalVue();
localVue.use(Vuex);

const namespace = 'queues';

const store = new Vuex.Store({
  modules: {
    [namespace]: filters,
    userinfo,
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
    expect(wrapper.findAll('.filter-item').length).toBe(4);
  });
  it('if agent has team, it team is set to filter by default', async () => {
    const agent = { team: { name: 'jest' } };
    const setFilterMock = jest.fn();
    jest.spyOn(QueueFilters.methods, 'setFilter').mockImplementationOnce(setFilterMock);
    const wrapper = shallowMount(QueueFilters, mountOptions);
    wrapper.vm.$store.commit('userinfo/SET_AGENT_INSTANCE', agent);
    await wrapper.vm.$nextTick();
    expect(setFilterMock).toHaveBeenCalledWith({ filter: 'team', value: agent.team });
  });
});

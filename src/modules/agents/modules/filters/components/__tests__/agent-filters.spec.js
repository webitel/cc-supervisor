import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import AgentFilters from '../agent-filters.vue';
import filters from '../../store/filters';
import userinfo from '../../../../../userinfo/store/userinfo';

const localVue = createLocalVue();
localVue.use(Vuex);

const namespace = 'agents';

const store = new Vuex.Store({
  modules: {
    [namespace]: filters,
    userinfo,
  },
});

describe('Agent Filters wrapper', () => {
  const mountOptions = {
    localVue,
    store,
    propsData: { namespace },
    computed: {
      isAdmin() {
        return true;
      },
    },
  };
  it('renders a component', () => {
    const wrapper = shallowMount(AgentFilters, mountOptions);
    expect(wrapper.exists()).toBe(true);
  });
  it('renders all filters', () => {
    const wrapper = shallowMount(AgentFilters, mountOptions);
    expect(wrapper.findAll('.filter-item').length).toBe(8);
  });
  // it('if agent has team, it team is set to filter by default', async () => {
  //   const agent = { team: { name: 'jest' } };
  //   const setFilterMock = jest.fn();
  //   jest.spyOn(AgentFilters.methods, 'setFilter').mockImplementationOnce(setFilterMock);
  //   const wrapper = shallowMount(AgentFilters, mountOptions);
  //   wrapper.vm.$store.commit('userinfo/SET_AGENT_INSTANCE', agent);
  //   await wrapper.vm.$nextTick();
  //   expect(setFilterMock).toHaveBeenCalledWith({ filter: 'team', value: agent.team });
  // });
});

import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import { getAgentsList as API } from '../../../../src/api/agents/agents';
import agentsStore from '../../../../src/store/modules/agents/agents';
import Agents from '../../../../src/components/agents/the-agents.vue';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);
const router = new VueRouter();

const items = [
  {
    _isSelected: true,
    agentId: '124',
  },
];

jest.mock('../../../../src/api/agents/agents');

describe('Agents page', () => {
  let state;
  let store;
  let wrapper;

  beforeEach(() => {
    state = {};
    store = new Vuex.Store({
      modules: {
        agents: {
          ...agentsStore,
          state: { ...agentsStore.state, ...state },
        },
      },
    });

    API.mockImplementation(() => Promise.resolve({ items }));
    wrapper = shallowMount(Agents, {
      store,
      localVue,
      router,
    });
  });

  it('Calls agents API after $route query change (watcher)', async () => {
    expect(API).toHaveBeenCalledTimes(1); // initial loading
    const params = { test: 'jest' };
    await wrapper.vm.$router.replace({ path: '/', query: params });
    expect(API).toHaveBeenCalledTimes(2); // initial loading + query change
  });

  it('Fills agents list from API', () => {
    expect(wrapper.vm.dataList).toHaveLength(items.length);
  });

  it('Correctly computes selectedIds', () => {
    expect(wrapper.vm.selectedIds).toEqual(['124']);
  });

  it('Calls agents API with specified params from $route query', async () => {
    const params = {
      page: '1',
      size: '10',
      search: 'hello there',
      team: ['1', '2'],
      fields: ['id', 'created_at'],
    };
    await wrapper.vm.$router.replace({ path: '/', query: params });
    expect(API).toHaveBeenCalledWith(params);
  });
});

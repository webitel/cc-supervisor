import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import AgentStatusHistoryAPI from '../../api/agent-status-history';
import agentsStatusHistoryStore from '../../store/agent-status-history';
import AgentStatusHistory from '../agent-status-history-tab.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

const items = [];

const namespace = 'agentStatusHistory';

jest.mock('../../api/agent-status-history');

describe('Agent Status History tab', () => {
  let store;
  let mountOptions = {};

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        agentStatusHistory: agentsStatusHistoryStore,
      },
    });

    AgentStatusHistoryAPI.getList.mockImplementation(() => Promise.resolve({ items }));
    mountOptions = {
      store,
      localVue,
      propsData: { namespace },
      mocks: {
        $route: { params: { id: 1 }, query: {} },
      },
    };
  });

  it('renders a component', () => {
    const wrapper = shallowMount(AgentStatusHistory, mountOptions);
      expect(wrapper.exists()).toBe(true);
  });
});

import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';
import AgentStatusHistoryAPI from '../../api/agent-status-history';
import agentsStatusHistoryStore from '../../store/agent-status-history';
import AgentStatusHistory from '../agent-status-history-tab.vue';

const items = [];

const namespace = 'statusHistory';

vi.mock('../../api/agent-status-history');

describe('Agent Status History tab', () => {
  let store;
  let mountOptions = {};

  beforeEach(() => {
    store = createStore({
      modules: {
        statusHistory: agentsStatusHistoryStore,
      },
    });

    AgentStatusHistoryAPI.getList.mockImplementation(() => Promise.resolve({ items }));
    mountOptions = {
      props: { namespace },
      global: {
        plugins: [store],
        mocks: {
          $route: { params: { id: 1 }, query: {} },
        },
      },
    };
  });

  it('renders a component', () => {
    const wrapper = shallowMount(AgentStatusHistory, mountOptions);
    expect(wrapper.exists()).toBe(true);
  });
});

import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { getAgentCallsList as API } from '../../modules/agent-calls/api/agent-calls';
import agentsCallsStore from '../../modules/agent-calls/store/agent-calls';
import AgentCalls from '../../modules/agent-calls/components/agent-calls-tab.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

const items = [
  {},
];

jest.mock('../../api/agent-calls');

describe('Agent calls tab', () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        agentCalls: agentsCallsStore,
      },
    });

    API.mockImplementation(() => Promise.resolve({ items }));
    wrapper = shallowMount(AgentCalls, {
      store,
      localVue,
      mocks: {
        $route: { params: { id: 1 }, query: {} },
      },
    });
  });

  it('renders a component', () => {
    expect(wrapper.classes('agent-calls')).toBe(true);
  });

  it('Fills agent calls list from API', () => {
    expect(wrapper.vm.dataList).toHaveLength(items.length);
  });
});

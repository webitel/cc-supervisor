import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { getAgentCallsList as API } from '../../../../../../src/api/agents/agent-calls';
import agentsCallsStore from '../../../../../../src/store/modules/agents/agent-calls';
import AgentCalls from '../../../../../../src/components/agents/agent-page/agent-calls/agent-calls-tab.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

const items = [
  {},
];

jest.mock('../../../../../../src/api/agents/agent-calls');

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

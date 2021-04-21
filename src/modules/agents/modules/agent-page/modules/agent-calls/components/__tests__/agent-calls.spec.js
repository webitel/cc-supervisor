import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import AgentCallsAPI from '../../api/agent-calls';
import agentsCallsStore from '../../store/agent-calls';
import AgentCalls from '../agent-calls-tab.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

const items = [];

const namespace = 'calls';

jest.mock('../../api/agent-calls');

describe('Agent calls tab', () => {
  let store;
  let mountOptions = {};

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        calls: agentsCallsStore,
      },
    });

    AgentCallsAPI.getList.mockImplementation(() => Promise.resolve({ items }));
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
    const wrapper = shallowMount(AgentCalls, mountOptions);
      expect(wrapper.exists()).toBe(true);
  });
});

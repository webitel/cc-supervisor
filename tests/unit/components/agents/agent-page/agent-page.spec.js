import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import {
  patchAgentStatus as patchStatusAPI,
  getAgent as API,
} from '../../../../../src/api/agents/agents';
import agentsStore from '../../../../../src/store/modules/agents/agents';
import AgentPage from '../../../../../src/components/agents/agent-page/agent-page.vue';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);
const router = new VueRouter();

const agent = { agentId: '124', status: 'offline' };

jest.mock('../../../../../src/api/agents/agents');

describe('Agent page', () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        agents: agentsStore,
      },
    });

    API.mockImplementation(() => Promise.resolve(agent));
    wrapper = shallowMount(AgentPage, {
      store,
      localVue,
      router,
    });
  });

  it('renders a component', () => {
    expect(wrapper.classes('agent-page')).toBe(true);
  });

  it('calls API to change status', () => {
    const status = 'online';
    wrapper.findComponent({ name: 'wt-status-select' }).vm.$emit('change', status);
    expect(patchStatusAPI).toHaveBeenCalledWith({ agentId: agent.agentId, status });
  });
});

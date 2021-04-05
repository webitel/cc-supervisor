import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { patchAgentStatus as API } from '../../../api/agents';
import agentsStore from '../../../store/agents';
import TableAgentStatus
  from '../table-templates/table-agent-status.vue';

jest.mock('../../../api/agents');

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Queues table AgentStatus', () => {
  const store = new Vuex.Store({
    modules: { agents: agentsStore },
  });
  const item = { agentId: '1' };

  it('renders a component', async () => {
    const wrapper = shallowMount(TableAgentStatus, { propsData: { item } });
    expect(wrapper.classes('table-agent-status')).toBe(true);
  });
});

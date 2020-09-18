import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { patchAgentStatus as API } from '../../../../../../src/api/agents/agents';
import agentsStore from '../../../../../../src/store/modules/agents/agents';
import TableAgentStatus
  from '../../../../../../src/components/agents/_internals/table-templates/table-agent-status.vue';

jest.mock('../../../../../../src/api/agents/agents');

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

  it('calls API to change status', () => {
    const status = 'online';
    API.mockImplementation(() => Promise.resolve({}));
    const wrapper = shallowMount(TableAgentStatus, { localVue, store, propsData: { item } });
    wrapper.findComponent({ name: 'wt-status-select' }).vm.$emit('change', status);
    expect(API).toHaveBeenCalledWith({ agentId: item.agentId, status });
  });
});

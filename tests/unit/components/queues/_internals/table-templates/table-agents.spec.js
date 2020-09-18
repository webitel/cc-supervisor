import { shallowMount } from '@vue/test-utils';
import TableAgents
  from '../../../../../../src/components/queues/_internals/table-templates/table-agents.vue';

describe('Queues table Agents', () => {
  const item = {
    agents: {
      waiting: '1',
      active: '2',
    },
  };

  it('renders a component', async () => {
    const wrapper = shallowMount(TableAgents, { propsData: { item } });
    expect(wrapper.classes('table-agents')).toBe(true);
  });

  it('renders a component with empty values', async () => {
    item.agents = {};
    const wrapper = shallowMount(TableAgents, { propsData: { item } });
    expect(wrapper.classes('table-agents')).toBe(true);
  });
});

import { shallowMount } from '@vue/test-utils';
import TableAgents from '../table-templates/table-agents.vue';

let status;

describe('Queues table Agents', () => {
  beforeEach(() => {
   status = {
      online: 1,
      pause: 2,
      offline: 3,
    };
  });
  it('renders a component', () => {
    const wrapper = shallowMount(TableAgents, { propsData: { status } });
    expect(wrapper.classes('table-agents'))
      .toBe(true);
  });

  it('renders a component with empty values', () => {
    status = {};
    const wrapper = shallowMount(TableAgents, { propsData: { status } });
    expect(wrapper.classes('table-agents'))
      .toBe(true);
  });
});

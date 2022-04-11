import { shallowMount } from '@vue/test-utils';
import TableAgentState from '../_internals/table-templates/table-agent-state.vue';

describe('Agent History table Agent State', () => {
  const item = { agentId: '1', state: 'hihihi' };

  it('renders a component', () => {
    const wrapper = shallowMount(TableAgentState, { propsData: { item } });
    expect(wrapper.exists()).toBe(true);
  });

  it('if pause cause is passed, renders it', () => {
    const pauseCause = 'jest';
    const wrapper = shallowMount(TableAgentState, {
      propsData: { item: { ...item, pauseCause } },
    });
    expect(wrapper.vm.statusText).toBe(pauseCause);
  });
});

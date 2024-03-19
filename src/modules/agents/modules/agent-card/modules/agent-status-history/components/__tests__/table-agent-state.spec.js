import { shallowMount } from '@vue/test-utils';
import TableAgentState from '../_internals/table-templates/table-agent-state.vue';

describe('Agent History table Agent State', () => {
  const item = { agentId: '1', state: 'hihihi' };

  it('renders a component', () => {
    const wrapper = shallowMount(TableAgentState, { props: { item } });
    expect(wrapper.exists()).toBe(true);
  });

  it('if pause cause is passed, renders it', () => {
    const pauseCause = 'vi';
    const wrapper = shallowMount(TableAgentState, {
      props: { item: { ...item, pauseCause } },
    });
    expect(wrapper.vm.statusText).toBe(pauseCause);
  });
});

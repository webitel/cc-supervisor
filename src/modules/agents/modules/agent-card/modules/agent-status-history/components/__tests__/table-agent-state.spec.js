import { shallowMount } from '@vue/test-utils';
import { AgentStatus, ChannelState } from 'webitel-sdk';
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

  it('if state is Online, stateColor is success', () => {
    const state = AgentStatus.Online;
    const wrapper = shallowMount(TableAgentState, {
      propsData: { item: { state } },
    });
    expect(wrapper.vm.statusColor).toBe('success');
  });

  it('if state is Offline, stateColor is danger', () => {
    const state = AgentStatus.Offline;
    const wrapper = shallowMount(TableAgentState, {
      propsData: { item: { state } },
    });
    expect(wrapper.vm.statusColor).toBe('danger');
  });

  it('if state is BreakOut, stateColor is break-out', () => {
    const state = AgentStatus.BreakOut;
    const wrapper = shallowMount(TableAgentState, {
      propsData: { item: { state } },
    });
    expect(wrapper.vm.statusColor).toBe('break-out');
  });
});

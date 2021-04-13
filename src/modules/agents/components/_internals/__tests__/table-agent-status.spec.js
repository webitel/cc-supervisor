import { shallowMount } from '@vue/test-utils';
import { AgentStatus } from 'webitel-sdk';
import TableAgentStatus
  from '../table-templates/table-agent-status.vue';

describe('Queues table AgentStatus', () => {
  const item = { agentId: '1', status: 'hihihi' };

  it('renders a component', () => {
    const wrapper = shallowMount(TableAgentStatus, { propsData: { item } });
    expect(wrapper.exists()).toBe(true);
  });

  it('if pause cause is passed, renders it', () => {
    const pauseCause = 'jest';
    const wrapper = shallowMount(TableAgentStatus, {
      propsData: { item: { ...item, pauseCause } },
    });
    expect(wrapper.vm.statusText).toBe(pauseCause);
  });

  it('if status is Online, statusColor is success', () => {
    const status = AgentStatus.Online;
    const wrapper = shallowMount(TableAgentStatus, {
      propsData: { item: { status } },
    });
    expect(wrapper.vm.statusColor).toBe('success');
  });

  it('if status is Offline, statusColor is danger', () => {
    const status = AgentStatus.Offline;
    const wrapper = shallowMount(TableAgentStatus, {
      propsData: { item: { status } },
    });
    expect(wrapper.vm.statusColor).toBe('danger');
  });
});

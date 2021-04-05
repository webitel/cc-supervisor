import { shallowMount } from '@vue/test-utils';
import { CallDirection } from 'webitel-sdk';
import TableCallState
  from '../agent-calls/_internals/table-templates/table-call-state.vue';

describe('Agent calls table call state', () => {
  const item = {};

  it('renders a component with outbound value', async () => {
    item.direction = CallDirection.Outbound;
    item.answeredAt = true;
    const wrapper = shallowMount(TableCallState, { propsData: { item } });
    expect(wrapper.classes('table-call-state')).toBe(true);
    expect(wrapper.vm.callState).toBe('callState.end');
    expect(wrapper.vm.callStateIcon).toBe('call-outbound');
    expect(wrapper.vm.callStateIconColor).toBe('true');
  });

  it('renders a component with inbound value', async () => {
    item.direction = CallDirection.Inbound;
    item.answeredAt = true;
    const wrapper = shallowMount(TableCallState, { propsData: { item } });
    expect(wrapper.classes('table-call-state')).toBe(true);
    expect(wrapper.vm.callState).toBe('callState.end');
    expect(wrapper.vm.callStateIcon).toBe('call-inbound');
    expect(wrapper.vm.callStateIconColor).toBe('accent');
  });

  it('renders a component with answeredAt falsy value', async () => {
    item.direction = CallDirection.Inbound;
    item.answeredAt = 0;
    const wrapper = shallowMount(TableCallState, { propsData: { item } });
    expect(wrapper.classes('table-call-state')).toBe(true);
    expect(wrapper.vm.callState).toBe('callState.missed');
    expect(wrapper.vm.callStateIcon).toBe('call-disconnect');
    expect(wrapper.vm.callStateIconColor).toBe('false');
  });

  it('renders a component with answeredAt falsy value', async () => {
    item.direction = CallDirection.Outbound;
    item.answeredAt = 0;
    const wrapper = shallowMount(TableCallState, { propsData: { item } });
    expect(wrapper.classes('table-call-state')).toBe(true);
    expect(wrapper.vm.callState).toBe('callState.disconnect');
  });
});

import { shallowMount } from '@vue/test-utils';
import { CallDirection } from 'webitel-sdk';
import TableDirection
  from '../../../../../../src/components/active-calls/_internals/table-templates/table-direction.vue';

describe('Queues table Direction', () => {
  const item = { direction: CallDirection.Outbound };

  it('renders a component with outbound value', async () => {
    const wrapper = shallowMount(TableDirection, { propsData: { item } });
    expect(wrapper.exists()).toBe(true);
  });

  it('renders a component with inbound value', async () => {
    item.direction = CallDirection.Inbound;
    const wrapper = shallowMount(TableDirection, { propsData: { item } });
    expect(wrapper.exists()).toBe(true);
  });
});

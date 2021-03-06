import { shallowMount } from '@vue/test-utils';
import TableMembers
  from '../../../../../../src/components/queues/_internals/table-templates/table-members.vue';

describe('Queues table Members', () => {
  const item = {
    members: {
      waiting: '100',
      processing: '10',
    },
  };

  it('renders a component', async () => {
    const wrapper = shallowMount(TableMembers, { propsData: { item } });
    expect(wrapper.classes('table-members')).toBe(true);
  });

  it('renders a component with empty values', async () => {
    item.members = {};
    const wrapper = shallowMount(TableMembers, { propsData: { item } });
    expect(wrapper.classes('table-members')).toBe(true);
  });
});

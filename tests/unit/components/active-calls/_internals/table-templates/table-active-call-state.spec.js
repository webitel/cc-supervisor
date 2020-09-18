import { shallowMount } from '@vue/test-utils';
import TableActiveCallState
  from '../../../../../../src/components/active-calls/_internals/table-templates/table-active-call-state.vue';

describe('Queues table Active Call State', () => {
  const item = {};

  it('renders a component', async () => {
    const wrapper = shallowMount(TableActiveCallState, { propsData: { item } });
    expect(wrapper.exists()).toBe(true);
  });
});

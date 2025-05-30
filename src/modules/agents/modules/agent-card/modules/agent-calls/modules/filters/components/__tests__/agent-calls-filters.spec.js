import { shallowMount } from '@vue/test-utils';

import tableActionsHandlerMixin
  from '../../../../../../../../../../app/mixins/supervisor-workspace/tableActionsHandlerMixin';
import AgentCallsFilters from '../agent-calls-filters.vue';

const namespace = 'calls';

describe('Agent calls filters', () => {
  it('renders a component', () => {
    const wrapper = shallowMount(AgentCallsFilters, { props: { namespace } });
    expect(wrapper.exists()).toBe(true);
  });
  it('reset filters action', () => {
    const resetFiltersMock = vi.fn();
    vi.spyOn(tableActionsHandlerMixin.methods, 'resetFilters').mockImplementationOnce(resetFiltersMock);
    const wrapper = shallowMount(AgentCallsFilters);
    wrapper.vm.tableActionsHandler('filterReset');
    expect(resetFiltersMock).toHaveBeenCalled();
  });
});

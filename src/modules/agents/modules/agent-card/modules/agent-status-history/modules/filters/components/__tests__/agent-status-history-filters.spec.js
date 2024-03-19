import { shallowMount } from '@vue/test-utils';
import AgentStatusHistoryFilters from '../agent-status-history-filters.vue';
import tableActionsHandlerMixin
  from '../../../../../../../../../../app/mixins/supervisor-workspace/tableActionsHandlerMixin';

const namespace = 'statusHistory';

describe('Agent Status History filters', () => {
  it('renders a component', () => {
    const wrapper = shallowMount(AgentStatusHistoryFilters, { props: { namespace } });
    expect(wrapper.exists()).toBe(true);
  });
  it('reset filters action', () => {
    const resetFiltersMock = vi.fn();
    vi.spyOn(tableActionsHandlerMixin.methods, 'resetFilters').mockImplementationOnce(resetFiltersMock);
    const wrapper = shallowMount(AgentStatusHistoryFilters);
    wrapper.vm.tableActionsHandler('filterReset');
    expect(resetFiltersMock).toHaveBeenCalled();
  });
});

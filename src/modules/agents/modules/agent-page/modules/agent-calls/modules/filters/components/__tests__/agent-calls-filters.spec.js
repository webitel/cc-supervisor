import { shallowMount } from '@vue/test-utils';
import AgentCallsFilters from '../agent-calls-filters.vue';
import tableActionsHandlerMixin
  from '../../../../../../../../../../app/mixins/supervisor-workspace/tableActionsHandlerMixin';

const namespace = 'agentCalls';

describe('Agent calls filters', () => {
  it('renders a component', () => {
    const wrapper = shallowMount(AgentCallsFilters, { propsData: { namespace } });
    expect(wrapper.exists()).toBe(true);
  });
  it('reset filters action', () => {
    const resetFiltersMock = jest.fn();
    jest.spyOn(tableActionsHandlerMixin.methods, 'resetFilters').mockImplementationOnce(resetFiltersMock);
    const wrapper = shallowMount(AgentCallsFilters);
    wrapper.vm.tableActionsHandler('filterReset');
    expect(resetFiltersMock).toHaveBeenCalled();
  });
});

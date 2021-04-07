import { shallowMount } from '@vue/test-utils';
import AgentCallsFilters from '../agent-calls-filters.vue';

const namespace = 'agentCalls';

describe('Agent calls filters', () => {
  it('renders a component', () => {
    const wrapper = shallowMount(AgentCallsFilters, { propsData: { namespace } });
    expect(wrapper.exists()).toBe(true);
  });
});

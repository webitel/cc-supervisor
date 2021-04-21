import { shallowMount } from '@vue/test-utils';
import AgentGeneralTab from '../agent-general-tab.vue';

const namespace = 'agentPage';

describe('Agent General Tab', () => {
  const mountOptions = {
    propsData: { namespace },
  };
  it('renders a component', () => {
    const wrapper = shallowMount(AgentGeneralTab, mountOptions);
    expect(wrapper.exists()).toBe(true);
  });
});

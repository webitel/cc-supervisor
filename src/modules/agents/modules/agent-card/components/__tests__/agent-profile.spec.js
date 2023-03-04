import { shallowMount } from '@vue/test-utils';
import AgentProfile from '../agent-panel/_internals/agent-profile.vue';

describe('Agent profile', () => {
  it('renders a component', () => {
    const wrapper = shallowMount(AgentProfile);
    expect(wrapper.exists())
      .toBe(true);
  });
  it('renders name passed as prop', () => {
    const name = 'jest';
    const wrapper = shallowMount(AgentProfile, {
      props: { name },
    });
    expect(wrapper.find('.agent-profile__name').text())
      .toBe(name);
  });
});

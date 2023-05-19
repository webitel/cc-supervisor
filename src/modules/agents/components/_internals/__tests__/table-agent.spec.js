import { shallowMount } from '@vue/test-utils';
import TableAgent
  from '../table-templates/table-agent.vue';

const $router = {
  push: jest.fn(),
};

describe('Queues table Agent', () => {
  const item = { agentId: '1' };

  it('renders a component with outbound value', () => {
    const wrapper = shallowMount(TableAgent, { props: { item } });
    expect(wrapper.classes('table-agent')).toBe(true);
  });

  it('renders a component with outbound value', () => {
    const wrapper = shallowMount(TableAgent, { global: { mocks: { $router } }, props: { item } });
    wrapper.find('.name-link').trigger('click');
    expect($router.push).toHaveBeenCalledWith({ name: 'agents-card', params: { id: item.agentId } });
  });
});

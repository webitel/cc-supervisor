import { shallowMount, mount } from '@vue/test-utils';
import { createStore } from 'vuex';
import agents from '../../../../store/agents';
import AgentPanel from '../agent-panel/agent-panel.vue';

const agent = {
  name: 'jest',
};

const LOAD_AGENT_MOCK = jest.fn();

jest.spyOn(agents.modules.card.actions, 'LOAD_AGENT')
  .mockImplementationOnce(LOAD_AGENT_MOCK);

const store = createStore({
  modules: { agents },
  state: { api: {} },
});

describe('Agent panel', () => {
  const mountOptions = {
    global: {
      plugins: [store],
    },
    props: { namespace: 'agents/card' },
    computed: {
      agent() {
        return agent;
      },
    },
  };

  it('renders a component', () => {
    const wrapper = shallowMount(AgentPanel, mountOptions);
    expect(wrapper.exists()).toBe(true);
  });

  it('calls "LOAD_AGENT" at @changed wt-cc-agent-status-select event', () => {
    const wrapper = mount(AgentPanel, mountOptions);
    const newStatus = { status: 'jest' };
    wrapper.findComponent({ name: 'wt-cc-agent-status-select' })
      .vm.$emit('changed', newStatus);
    expect(LOAD_AGENT_MOCK.mock.calls[0][1]).toEqual(newStatus);
  });

  it('calls "callAgent" method at call btn click', () => {
    const callAgentMock = jest.fn();
    jest.spyOn(AgentPanel.methods, 'callAgent')
      .mockImplementationOnce(callAgentMock);
    const wrapper = mount(AgentPanel, mountOptions);
    wrapper.findComponent({ name: 'wt-button' }).vm.$emit('click');
    expect(callAgentMock).toHaveBeenCalled();
  });

  it('calls "setCallInfo" and "openWindowMock" mapped methods at call btn click', () => {
    const setCallInfoMock = jest.fn();
    const callMock = jest.fn();
    jest.spyOn(AgentPanel.methods, 'setCallInfo')
      .mockImplementationOnce(setCallInfoMock);
    jest.spyOn(AgentPanel.methods, 'call')
      .mockImplementationOnce(callMock);
    const wrapper = mount(AgentPanel, mountOptions);
    wrapper.findComponent({ name: 'wt-button' }).vm.$emit('click');
    expect(setCallInfoMock).toHaveBeenCalled();
    expect(callMock).toHaveBeenCalled();
  });
});

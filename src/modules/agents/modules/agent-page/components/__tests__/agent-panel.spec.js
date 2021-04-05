import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import agents from '../../../../store/agents';
import AgentPanel from '../agent-panel/agent-panel.vue';

const agent = {
  name: 'jest',
};

const SET_AGENT_STATUS_MOCK = jest.fn();

jest.spyOn(agents.modules.agentPage.actions, 'SET_AGENT_STATUS')
  .mockImplementationOnce(SET_AGENT_STATUS_MOCK);

const localVue = createLocalVue();
localVue.use(Vuex);
const store = new Vuex.Store({
  modules: { agents },
});

describe('Agent panel', () => {
  const mountOptions = {
    localVue,
    store,
    propsData: { namespace: 'agents/agentPage' },
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

  it('calls "SET_AGENT_STATUS" at @changed agent-status-select event', () => {
    const wrapper = shallowMount(AgentPanel, mountOptions);
    const newStatus = { status: 'jest' };
    wrapper.findComponent({ name: 'agent-status-select' })
      .vm.$emit('changed', newStatus);
    expect(SET_AGENT_STATUS_MOCK.mock.calls[0][1]).toEqual(newStatus);
  });

  it('calls "callAgent" method at call btn click', () => {
    const callAgentMock = jest.fn();
    jest.spyOn(AgentPanel.methods, 'callAgent')
      .mockImplementationOnce(callAgentMock);
    const wrapper = shallowMount(AgentPanel, mountOptions);
    wrapper.findComponent({ name: 'wt-button' }).vm.$emit('click');
    expect(callAgentMock).toHaveBeenCalled();
  });

  it('calls "setCallInfo" and "openWindowMock" mapped methods at call btn click', () => {
    const setCallInfoMock = jest.fn();
    const openWindowMock = jest.fn();
    jest.spyOn(AgentPanel.methods, 'setCallInfo')
      .mockImplementationOnce(setCallInfoMock);
    jest.spyOn(AgentPanel.methods, 'openWindow')
      .mockImplementationOnce(openWindowMock);
    const wrapper = shallowMount(AgentPanel, mountOptions);
    wrapper.findComponent({ name: 'wt-button' }).vm.$emit('click');
    expect(setCallInfoMock).toHaveBeenCalled();
    expect(openWindowMock).toHaveBeenCalled();
  });
});

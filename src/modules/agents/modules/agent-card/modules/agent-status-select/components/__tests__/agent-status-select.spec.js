import { shallowMount, mount } from '@vue/test-utils';
import { createStore } from 'vuex';
import AgentStatus from '@webitel/ui-sdk/src/enums/AgentStatus/AgentStatus.enum';
import AgentStatusSelect from '../agent-status-select.vue';
import statusSelect from '../../store/agent-status-select';
import PauseCauseAPI from '../../api/pause-cause';

const pauseCauses = [{ name: 'jest1' }, { name: 'jest2' }];
const getAgentPauseCausesMock = jest.fn(() => ({ items: pauseCauses }));
jest.spyOn(PauseCauseAPI, 'getList').mockImplementation(getAgentPauseCausesMock);

const namespace = 'agents';
const agent = {
  status: '',
  agentId: 1,
};
const updateAgentStatusMock = jest.fn();
jest.spyOn(statusSelect.actions, 'UPDATE_AGENT_STATUS')
  .mockImplementation(updateAgentStatusMock);

const store = createStore({
  modules: {
    [namespace]: {
      state: { agent },
      modules: { statusSelect },
      namespaced: true,
    },
  },
});

const mountOptions = {
  global: {
    plugins: [store],
  },
  props: { namespace },
};

describe('Agent status select', () => {
  beforeEach(() => {
    updateAgentStatusMock.mockClear();
    getAgentPauseCausesMock.mockClear();
  });
  it('renders a component', () => {
    const wrapper = shallowMount(AgentStatusSelect, mountOptions);
    expect(wrapper.exists())
      .toBe(true);
  });
  it(`at wt-status-select "change" to "online" event,  triggers UPDATE_AGENT_STATUS
   with "online" status`, () => {
    const wrapper = shallowMount(AgentStatusSelect, mountOptions);
    wrapper.findComponent({ name: 'wt-status-select' })
      .vm.$emit('change', AgentStatus.ONLINE);
    const actionPayload = {
      status: AgentStatus.ONLINE, agentId: agent.agentId, payload: undefined,
    };
    expect(updateAgentStatusMock.mock.calls[0][1]).toEqual(actionPayload);
  });
  it('at wt-status-select "change" to "pause" event, pause causes are loaded', async () => {
    const wrapper = shallowMount(AgentStatusSelect, mountOptions);
    wrapper.findComponent({ name: 'wt-status-select' })
      .vm.$emit('change', AgentStatus.PAUSE);
    await wrapper.vm.$nextTick();
    expect(getAgentPauseCausesMock).toHaveBeenCalled();
  });
  it(`at wt-status-select "change" to "pause" event and pause causes truthy response,
   pause-cause-popup appears`, async () => {
    jest.spyOn(AgentStatusSelect.methods, 'loadPauseCauses').mockImplementationOnce(() => {});
    const wrapper = mount(AgentStatusSelect, mountOptions);
    await wrapper.setData({ pauseCauses: [1, 2] });
    wrapper.findComponent({ name: 'wt-status-select' })
      .vm.$emit('change', AgentStatus.PAUSE);
    await wrapper.vm.$nextTick(); // load pause causes
    await wrapper.vm.$nextTick(); // render popup
    expect(wrapper.findComponent({ name: 'pause-cause-popup' }).isVisible()).toBe(true);
  });
  it(`at pause-cause-popup "change" event, triggers UPDATE_AGENT_STATUS
   with "pause" status and passed pauseCause`, async () => {
    const pauseCause = 'jest';
    const wrapper = shallowMount(AgentStatusSelect, mountOptions);
    wrapper.vm.openPauseCausePopup();
    await wrapper.vm.$nextTick();
    wrapper.findComponent({ name: 'pause-cause-popup' })
      .vm.$emit('change', pauseCause);
    const actionPayload = {
      status: AgentStatus.PAUSE, agentId: agent.agentId, pauseCause,
    };
    expect(updateAgentStatusMock.mock.calls[0][1]).toEqual(actionPayload);
  });
});

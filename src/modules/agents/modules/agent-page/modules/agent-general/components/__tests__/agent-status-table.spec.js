import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import AgentStatusAPI from '../../api/agent-pause-causes';
import agentStatusStore from '../../store/agent-general';
import AgentStatusTable from '../agent-status-table.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

jest.mock('../../api/agent-pause-causes');

const namespace = 'agentStatus';
const store = new Vuex.Store({
  modules: { [namespace]: agentStatusStore },
});

const items = [];
AgentStatusAPI.getList.mockImplementation(() => Promise.resolve({ items }));

describe('Agent Status Table', () => {
  const mountOptions = {
    localVue,
    store,
    propsData: { namespace },
    mocks: {
      $route: { query: '' },
    },
  };
  it('renders a component', () => {
    const wrapper = shallowMount(AgentStatusTable, mountOptions);
    expect(wrapper.exists()).toBe(true);
  });
  it('prettifyPauseCauseDuration correctly prettifies :)', () => {
    const wrapper = shallowMount(AgentStatusTable, mountOptions);
    const min = 66;
    expect(wrapper.vm.prettifyPauseCauseDuration(min)).toBe('01:06');
  });
  it('duration correctly computes duration', () => {
    const wrapper = shallowMount(AgentStatusTable, mountOptions);
    const pauseCause = { durationMin: 10, limitMin: 12 };
    expect(wrapper.vm.duration(pauseCause)).toBe('00:10');
  });
  it('duration correctly computes overflown duration', () => {
    const wrapper = shallowMount(AgentStatusTable, mountOptions);
    const pauseCause = { durationMin: 12, limitMin: 10 };
    expect(wrapper.vm.duration(pauseCause)).toBe('-00:02');
  });
  it('pauseCauseProgressColor correctly computes "danger" color', () => {
    const wrapper = shallowMount(AgentStatusTable, mountOptions);
    const pauseCause = { durationMin: 12, limitMin: 10 };
    expect(wrapper.vm.pauseCauseProgressColor(pauseCause)).toBe('danger');
  });
  it('pauseCauseProgressColor correctly computes "primary" color', () => {
    const wrapper = shallowMount(AgentStatusTable, mountOptions);
    const pauseCause = { durationMin: 8, limitMin: 10 };
    expect(wrapper.vm.pauseCauseProgressColor(pauseCause)).toBe('primary');
  });
  it('pauseCauseProgressColor correctly computes "success" color', () => {
    const wrapper = shallowMount(AgentStatusTable, mountOptions);
    const pauseCause = { durationMin: 5, limitMin: 10 };
    expect(wrapper.vm.pauseCauseProgressColor(pauseCause)).toBe('success');
  });
});

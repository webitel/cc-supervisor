import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';

import AgentStatusAPI from '../../api/agent-pause-causes';
import agentStatusStore from '../../store/agent-pause-causes';
import AgentPauseCauseTable from '../agent-pause-cause-table.vue';

vi.mock('../../api/agent-pause-causes');

const namespace = 'agentPauseCause';
const store = createStore({
  modules: { [namespace]: agentStatusStore },
});

const items = [];
AgentStatusAPI.getList.mockImplementation(() => Promise.resolve({ items }));

describe('Agent Pause Cause Table', () => {
  const mountOptions = {
    global: {
      plugins: [store],
      mocks: {
        $route: { query: '' },
      },
    },
    props: { namespace },
  };
  it('renders a component', () => {
    const wrapper = shallowMount(AgentPauseCauseTable, mountOptions);
    expect(wrapper.exists()).toBe(true);
  });
  it('prettifyPauseCauseDuration correctly prettifies :)', () => {
    const wrapper = shallowMount(AgentPauseCauseTable, mountOptions);
    const min = 66;
    expect(wrapper.vm.prettifyPauseCauseDuration(min)).toBe('01:06');
  });
  it('duration correctly computes duration', () => {
    const wrapper = shallowMount(AgentPauseCauseTable, mountOptions);
    const pauseCause = { durationMin: 10, limitMin: 12 };
    expect(wrapper.vm.duration(pauseCause)).toBe('00:10');
  });
  it('duration correctly computes overflown duration', () => {
    const wrapper = shallowMount(AgentPauseCauseTable, mountOptions);
    const pauseCause = { durationMin: 12, limitMin: 10 };
    expect(wrapper.vm.duration(pauseCause)).toBe('-00:02');
  });
  it('pauseCauseProgressColor correctly computes "danger" color', () => {
    const wrapper = shallowMount(AgentPauseCauseTable, mountOptions);
    const pauseCause = { durationMin: 12, limitMin: 10 };
    expect(wrapper.vm.pauseCauseProgressColor(pauseCause)).toBe('error');
  });
  it('pauseCauseProgressColor correctly computes "primary" color', () => {
    const wrapper = shallowMount(AgentPauseCauseTable, mountOptions);
    const pauseCause = { durationMin: 8, limitMin: 10 };
    expect(wrapper.vm.pauseCauseProgressColor(pauseCause)).toBe('primary');
  });
  it('pauseCauseProgressColor correctly computes "success" color', () => {
    const wrapper = shallowMount(AgentPauseCauseTable, mountOptions);
    const pauseCause = { durationMin: 5, limitMin: 10 };
    expect(wrapper.vm.pauseCauseProgressColor(pauseCause)).toBe('success');
  });
});

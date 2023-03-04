import { shallowMount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import { createStore } from 'vuex';
import { AgentStatus } from 'webitel-sdk';
import agentsStore from '../../store/agents';
import Agents from '../the-agents.vue';
import API from '../../api/agents';

const router = createRouter({
  history: createWebHistory(),
  routes: [],
});

const items = [];

jest.spyOn(API, 'getList')
  .mockImplementation(() => ({ items }));

describe('Agents page', () => {
  let state;
  let store;
  let mountOptions;

  beforeEach(() => {
    state = {};
    store = createStore({
      modules: {
        agents: agentsStore,
      },
    });

    mountOptions = {
      global: {
        plugins: [store, router],
      },
    };
  });

  it('renders a component', () => {
    const wrapper = shallowMount(Agents, mountOptions);
    expect(wrapper.exists())
    .toBe(true);
  });

  it('Correctly computes selectedIds', () => {
    const dataList = [{
      _isSelected: true,
      agentId: '124',
    }, {
      _isSelected: false,
      agentId: '1224',
    }];
    const wrapper = shallowMount(Agents, {
      ...mountOptions,
      computed: { dataList() { return dataList; } },
    });
    expect(wrapper.vm.selectedIds)
    .toEqual(['124']);
  });

  it('Correctly computes rows to highlight initially', async () => {
    const dataList = [
      { status: AgentStatus.BreakOut },
      { status: AgentStatus.Pause },
      { status: AgentStatus.BreakOut },
    ];
    jest.spyOn(Agents.methods, 'highlightRows');
    const wrapper = shallowMount(Agents, {
      ...mountOptions,
      computed: {
        dataList() { return dataList; },
      },
    });
    await wrapper.vm.$nextTick(); // wait for table to render
    expect(Agents.methods.highlightRows)
    .toHaveBeenCalledWith([0, 2]);
  });
});

import { createLocalVue, shallowMount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import { AgentStatus } from 'webitel-sdk';
import agentsStore from '../../store/agents';
import Agents from '../the-agents.vue';
import API from '../../api/agents';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);
const router = new VueRouter();

const items = [];

jest.spyOn(API, 'getList')
  .mockImplementation(() => ({ items }));

describe('Agents page', () => {
  let state;
  let store;
  let mountOptions;

  beforeEach(() => {
    state = {};
    store = new Vuex.Store({
      modules: {
        agents: agentsStore
      },
    });

    mountOptions = {
      store,
      localVue,
      router,
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

  it('Correctly computes rows to highlight initially', () => {
    const dataList = [
      { status: AgentStatus.BreakOut },
      { status: AgentStatus.Pause },
      { status: AgentStatus.BreakOut },
    ];
    jest.spyOn(Agents.methods, 'highlightRows');
    shallowMount(Agents, {
      ...mountOptions,
      computed: {
        dataList() { return dataList; },
      },
    });
    expect(Agents.methods.highlightRows)
    .toHaveBeenCalledWith([0, 2]);
  });
});

import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';
import AgentSkillsTab from '../agent-skills-tab.vue';
import skills from '../../store/agent-skills';

const id = 1;
const $route = { params: { id }, query: {} };

const namespace = 'skills';
const SET_PARENT_ITEM_ID = jest.fn();
const SET_ITEM_ID = jest.fn();
const store = createStore({
  modules: {
    [namespace]: {
      ...skills,
      actions: { ...skills.actions, SET_PARENT_ITEM_ID, SET_ITEM_ID },
    },
  },
});

describe('Agent Skills Tab', () => {
  const mountOptions = {
    props: { namespace },
    global: {
      plugins: [store],
      mocks: { $route },
    },
  };
  it('renders a component', () => {
    const wrapper = shallowMount(AgentSkillsTab, mountOptions);
    expect(wrapper.exists()).toBe(true);
  });
  it('loadList initially calls setParentId with id route param', async () => {
    const wrapper = shallowMount(AgentSkillsTab, mountOptions);
    await wrapper.vm.$nextTick();
    expect(SET_PARENT_ITEM_ID.mock.calls[0][1]).toBe(id);
  });
  it('"edit" calls SET_ITEM_ID with passed item.id', () => {
    const item = { id: 'jest' };
    const wrapper = shallowMount(AgentSkillsTab, mountOptions);
    wrapper.vm.edit(item);
    expect(SET_ITEM_ID.mock.calls[0][1]).toBe(item.id);
  });
});

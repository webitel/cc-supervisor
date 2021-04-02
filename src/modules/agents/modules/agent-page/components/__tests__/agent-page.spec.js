import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import agentsStore from '../../../../store/agents';
import AgentPage from '../agent-page.vue';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);
const router = new VueRouter();

jest.mock('../../../../api/agents');

describe('Agent page', () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        agents: agentsStore,
      },
    });

    wrapper = shallowMount(AgentPage, {
      store,
      localVue,
      router,
    });
  });

  it('renders a component', () => {
    expect(wrapper.classes('agent-page')).toBe(true);
  });
});

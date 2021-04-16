import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import ActiveCallsFilters from '../active-calls-filters.vue';
import filters from '../../store/filters';

const localVue = createLocalVue();
localVue.use(Vuex);

const namespace = 'activeCalls';
const agent = { isAdmin: true };

const store = new Vuex.Store({
  modules: {
    [namespace]: filters,
    userinfo: {
      namespaced: true,
      state: { agent },
    },
  },
});

describe('Active Calls Filters wrapper', () => {
  const mountOptions = {
    localVue,
    store,
    propsData: { namespace },
  };
  it('renders a component', () => {
    const wrapper = shallowMount(ActiveCallsFilters, mountOptions);
    expect(wrapper.exists()).toBe(true);
  });
});

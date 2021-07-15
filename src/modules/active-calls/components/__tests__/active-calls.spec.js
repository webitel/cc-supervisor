import { createLocalVue, shallowMount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import activeCallsStore from '../../store/active-calls';
import ActiveCalls from '../the-active-calls.vue';
import API from '../../api/active-calls';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);
const router = new VueRouter();

const items = [];

jest.spyOn(API, 'getList')
.mockImplementation(() => ({ items }));

describe('Active Calls page', () => {
  let store;
  let mountOptions;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        activeCalls: activeCallsStore,
      },
    });

    mountOptions = {
      store,
      localVue,
      router,
    };
  });

  it('renders a component', () => {
    const wrapper = shallowMount(ActiveCalls, mountOptions);
    expect(wrapper.exists())
    .toBe(true);
  });
});

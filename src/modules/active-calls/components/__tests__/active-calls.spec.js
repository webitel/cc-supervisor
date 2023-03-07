import { shallowMount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import { createStore } from 'vuex';
import activeCallsStore from '../../store/active-calls';
import ActiveCalls from '../the-active-calls.vue';
import API from '../../api/active-calls';

const router = createRouter({
  history: createWebHistory(),
  routes: [],
});

const items = [];

jest.spyOn(API, 'getList')
.mockImplementation(() => ({ items }));

describe('Active Calls page', () => {
  let store;
  let mountOptions;

  beforeEach(() => {
    store = createStore({
      modules: {
        activeCalls: activeCallsStore,
      },
    });

    mountOptions = {
      global: {
        plugins: [router, store],
      },
    };
  });

  it('renders a component', () => {
    const wrapper = shallowMount(ActiveCalls, mountOptions);
    expect(wrapper.exists())
    .toBe(true);
  });
});

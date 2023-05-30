import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';
import router from '../../../../app/router';
import activeCallsStore from '../../store/active-calls';
import ActiveCalls from '../the-active-calls.vue';
import API from '../../api/active-calls';

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

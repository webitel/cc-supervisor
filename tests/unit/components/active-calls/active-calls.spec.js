import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import { getActiveCallList as API } from '../../../../src/api/activeCalls/activeCalls';
import activeCallsStore from '../../../../src/store/modules/activeCalls/activeCalls';
import ActiveCalls from '../../../../src/components/active-calls/the-active-calls.vue';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);
const router = new VueRouter();

const items = [
  {
    createdAt: 0,
    direction: 'inbound',
    duration: 2,
    from: '11',
    agent: { id: '1' },
    destination: '11',
  },
];

jest.mock('../../../../src/api/activeCalls/activeCalls');

describe('Active calls page', () => {
  let state;
  let store;
  let wrapper;

  beforeEach(() => {
    state = {};
    store = new Vuex.Store({
      modules: {
        activeCalls: {
          ...activeCallsStore,
          state: { ...activeCallsStore.state, ...state },
        },
      },
    });

    API.mockImplementation(() => Promise.resolve({ items }));
    wrapper = shallowMount(ActiveCalls, {
      store,
      localVue,
      router,
    });
  });

  it('Calls activeCalls API after $route query change (watcher)', async () => {
    expect(API).toHaveBeenCalledTimes(1); // initial loading
    const params = { test: 'jest' };
    await wrapper.vm.$router.replace({ path: '/', query: params });
    expect(API).toHaveBeenCalledTimes(2); // initial loading + query change
  });

  it('Fills active calls list from API', () => {
    expect(wrapper.vm.dataList).toHaveLength(items.length);
  });

  it('Calls activeCalls API with specified params from $route query', async () => {
    const params = {
      page: '1',
      size: '10',
      search: 'hello there',
      team: ['1', '2'],
      fields: ['id', 'created_at'],
    };
    await wrapper.vm.$router.replace({ path: '/', query: params });
    expect(API).toHaveBeenCalledWith(params);
  });
});

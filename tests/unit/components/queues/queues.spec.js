import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import API from '../../../../src/api/queues/queues';
import queuesStore from '../../../../src/store/modules/queues/queues';
import Queues from '../../../../src/components/queues/the-queues.vue';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);
const router = new VueRouter();

const items = [
  {
    _isSelected: true,
    abandoned: 50,
    avg_aht_sec: 14.157177,
    avg_asa_sec: 56.35288,
    avg_awt_sec: 9.33228,
    avg_wrap_sec: 5.174368,
    bridged: 50,
    count: '2',
    max_awt_sec: 9.33228,
    online: 2,
    pause: 1,
    queue: {
      id: '124',
      name: 'PREDICTIVE DIALER dfd',
    },
    sum_bill_sec: 8.982809,
    team: {
      id: '2',
      name: 'igor 1',
    },
    waiting: '5',
  },
];

jest.mock('../../../../src/api/queues/queues');

describe('Queues page', () => {
  let state;
  let store;
  let wrapper;

  beforeEach(() => {
    state = {};
    store = new Vuex.Store({
      modules: {
        queues: {
          ...queuesStore,
          state: { ...queuesStore.state, ...state },
        },
      },
    });

    API.mockImplementation(() => Promise.resolve({ items }));
    wrapper = shallowMount(Queues, {
      store,
      localVue,
      router,
    });
  });

  it('Calls queues API after $route query change (watcher)', async () => {
    expect(API).toHaveBeenCalledTimes(1); // initial loading
    const params = { test: 'jest' };
    await wrapper.vm.$router.replace({ path: '/', query: params });
    expect(API).toHaveBeenCalledTimes(2); // initial loading + query change
  });

  it('Fills queues list from API', () => {
    expect(wrapper.vm.dataList).toHaveLength(items.length);
  });

  it('Correctly computes selectedIds', () => {
    expect(wrapper.vm.selectedIds).toEqual(['124']);
  });

  it('Calls queues API with specified params from $route query', async () => {
    const params = {
      page: '1',
      size: '10',
      search: 'hello there',
      team: ['1', '2'],
      from: `${Date.now()}`,
      fields: ['id', 'created_at'],
    };
    await wrapper.vm.$router.replace({ path: '/', query: params });
    expect(API).toHaveBeenCalledWith(params);
  });
});

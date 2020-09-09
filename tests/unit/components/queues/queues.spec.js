import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import API from '../../../../src/api/queues/queues';
import queuesStore from '../../../../src/store/modules/queues/queues';
import Queues from '../../../../src/components/queues/the-queues.vue';

const localVue = createLocalVue();
localVue.use(Vuex);
const $route = {
  query: {},
};
const items = [
  {
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

jest.mock('../../../src/api/queues/queues');

describe('Queues page', () => {
  let state;
  let store;

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
  });

  it('Fills queues list from API', async () => {
    API.mockImplementationOnce(() => Promise.resolve({ items }));
    const wrapper = shallowMount(Queues, {
      store,
      localVue,
      mocks: {
        $route,
        $t: () => {},
      },
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.dataList)
    .toHaveLength(items.length);
  });
});

import { createLocalVue, shallowMount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import API from '../../api/queues';
import queuesStore from '../../store/queues';
import Queues from '../the-queues.vue';

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
    agent_status: {
      free: 1,
    },
    waiting: '5',
  },
];

jest.mock('../../api/queues');

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

    API.getList.mockImplementation(() => Promise.resolve({ items }))
      .mockClear();
  });

  it('renders a component', () => {
    const wrapper = shallowMount(Queues, {
      store,
      localVue,
      router,
    });
    expect(wrapper.exists())
      .toBe(true);
  });

  it('Correctly computes selectedIds', () => {
    const wrapper = shallowMount(Queues, {
      store,
      localVue,
      router,
      computed: {
        dataList() {
          return [
            { queue: { name: 'jest', id: '123' }, _isSelected: false },
            { queue: { name: 'jest', id: '124' }, _isSelected: true },
          ];
        },
      },
    });
    expect(wrapper.vm.selectedIds).toEqual(['124']);
  });
});

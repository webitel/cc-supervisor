import { shallowMount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import { createStore } from 'vuex';
import API from '../../api/queues';
import queuesStore from '../../store/queues';
import Queues from '../the-queues.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [],
});

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
    store = createStore({
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
      global: {
        plugins: [store, router],
      },
    });
    expect(wrapper.exists())
      .toBe(true);
  });

  it('Correctly computes selectedIds', () => {
    const wrapper = shallowMount(Queues, {
      global: {
        plugins: [store, router],
      },
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

import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import API from '../../../modules/queues/api/queues';
import queuesStore from '../../../modules/queues/store/queues';
import Queues from '../../../modules/queues/components/the-queues.vue';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);
const router = new VueRouter();

const items = [
  {},
];

jest.mock('../../../../src/modules/queues/api/queues');

describe('Table actions handler', () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: { queues: queuesStore },
    });

    API.mockImplementation(() => Promise.resolve({ items }));
    wrapper = shallowMount(Queues, {
      store,
      localVue,
      router,
    });
  });

  it('Refresh action', async () => {
    await wrapper.vm.tableActionsHandler('refresh');
    expect(API).toHaveBeenCalled();
  });

  // it('Filter reset action', async () => {
  //   const resetFilters = jest.fn();
  //   await wrapper.vm.$router.replace({ path: '/', query: { jest: 'jest' } });
  //   // wrapper
  //   jest.spyOn(Queues.methods, 'resetFilters')
  //     .mockImplementation(resetFilters);
  //   wrapper.vm.tableActionsHandler('filterReset');
  //   await wrapper.vm.$nextTick();
  //   expect(resetFilters).toHaveBeenCalled();
  // });
});

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
  {},
];

jest.mock('../../../../src/api/queues/queues');

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

  it('Column select action', () => {
    wrapper.vm.tableActionsHandler('columnSelect');
    expect(wrapper.vm.isFilterFieldsOpened).toBe(true);
  });

  it('Filter reset action', async () => {
    await wrapper.vm.$router.replace({ path: '/', query: { jest: 'jest' } });
    wrapper.vm.tableActionsHandler('filterReset');
    expect(wrapper.vm.$route.query).toEqual({});
  });
});

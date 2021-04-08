import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import tablePageMixin from '../supervisor-workspace/tablePageMixin';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);
const router = new VueRouter();

describe('table Page Mixin', () => {
  const namespace = 'jest';
  const state = {
    dataList: [{ jest: 'jest' }],
    aggs: { jest: 'jest' },
    isNext: true,
  };
  const fetchListActionMock = jest.fn();

  const store = new Vuex.Store({
    modules: {
      [namespace]: {
        namespaced: true,
        state,
        actions: { FETCH_LIST: fetchListActionMock },
      },
    },
  });
  const Component = {
    render() {},
    mixins: [tablePageMixin],
  };
  const mountOptions = {
    localVue,
    store,
    router,
    data: () => ({ namespace }),
  };

  it('at start, calls FETCH_LIST store action', () => {
    shallowMount(Component, mountOptions);
    expect(fetchListActionMock).toHaveBeenCalled();
  });

  it('correctly maps store dataList state prop', () => {
    const wrapper = shallowMount(Component, mountOptions);
    const expectedDataList = [{ jest: 'jest' }];
    expect(wrapper.vm.dataList).toEqual(expectedDataList);
  });

  it('correctly maps store next state prop', () => {
    const wrapper = shallowMount(Component, mountOptions);
    const expectedNext = true;
    expect(wrapper.vm.isNext).toBe(expectedNext);
  });

  it('correctly maps store aggs state prop', () => {
    const wrapper = shallowMount(Component, mountOptions);
    const expectedAggs = { jest: 'jest' };
    expect(wrapper.vm.aggs).toEqual(expectedAggs);
  });

  it('Calls load list after $route query change (watcher)', async () => {
    const loadListMock = jest.fn();
    jest.spyOn(tablePageMixin.methods, 'loadList').mockImplementation(loadListMock);
    const wrapper = shallowMount(Component, mountOptions);

    await wrapper.vm.$router.replace({ path: '/', query: { name: 'jest' } });
    expect(loadListMock).toHaveBeenCalledTimes(2); // initial loading + query change
  });
});
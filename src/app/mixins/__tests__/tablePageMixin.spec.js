import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';
import { createRouter, createWebHistory } from 'vue-router';
import tablePageMixin from '../supervisor-workspace/tablePageMixin';

const router = createRouter({
  history: createWebHistory(),
  routes: [],
});

describe('table Page Mixin', () => {
  const namespace = 'jest';
  const state = {
    dataList: [{ jest: 'jest' }],
    aggs: { jest: 'jest' },
    isNext: true,
  };
  const fetchListActionMock = jest.fn();

  const store = createStore({
    modules: {
      [namespace]: {
        namespaced: true,
        state,
        actions: { LOAD_DATA_LIST: fetchListActionMock },
      },
    },
  });
  const Component = {
    render() {},
    mixins: [tablePageMixin],
  };
  const mountOptions = {
    global: {
      plugins: [store, router],
    },
    data: () => ({ namespace }),
  };

  it('at start, calls LOAD_DATA_LIST store action', () => {
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

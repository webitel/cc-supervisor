import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';
import tablePageMixin from '../supervisor-workspace/tablePageMixin';

describe('table Page Mixin', () => {
  const namespace = 'vi';
  const state = {
    dataList: [{ vi: 'vi' }],
    aggs: { vi: 'vi' },
    isNext: true,
  };
  const fetchListActionMock = vi.fn();

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
      plugins: [store],
    },
    data: () => ({ namespace }),
  };

  it('at start, calls LOAD_DATA_LIST store action', () => {
    shallowMount(Component, mountOptions);
    expect(fetchListActionMock).toHaveBeenCalled();
  });

  it('correctly maps store dataList state prop', () => {
    const wrapper = shallowMount(Component, mountOptions);
    const expectedDataList = [{ vi: 'vi' }];
    expect(wrapper.vm.dataList).toEqual(expectedDataList);
  });

  it('correctly maps store next state prop', () => {
    const wrapper = shallowMount(Component, mountOptions);
    const expectedNext = true;
    expect(wrapper.vm.isNext).toBe(expectedNext);
  });

  it('correctly maps store aggs state prop', () => {
    const wrapper = shallowMount(Component, mountOptions);
    const expectedAggs = { vi: 'vi' };
    expect(wrapper.vm.aggs).toEqual(expectedAggs);
  });
});

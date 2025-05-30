import { SortSymbols, sortToQueryAdapter } from '@webitel/ui-sdk/src/scripts/sortQueryAdapters';
import deepCopy from 'deep-copy';

const state = {
  headers: [],
  dataList: [],
  size: 10,
  search: '',
  page: 1,
  sort: '',
  isNextPage: false,
};

const actions = {
  LOAD_DATA_LIST: async (context) => {
    const { list = [], next = false } = await context.dispatch('GET_LIST');
    context.commit('SET_DATA_LIST', list);
    context.commit('SET_IS_NEXT', next);
  },
  SET_SIZE: async (context, size) => {
    context.commit('SET_SIZE', size);
    await context.dispatch('RESET_PAGE');
  },
  SET_SEARCH: async (context, search) => {
    context.commit('SET_SEARCH', search);
    await context.dispatch('RESET_PAGE');
  },
  NEXT_PAGE: (context) => {
    const page = context.state.page + 1;
    context.commit('SET_PAGE', page);
    context.dispatch('LOAD_DATA_LIST');
  },
  PREV_PAGE: (context) => {
    if (context.state.page > 1) {
      const page = context.state.page -1;
      context.commit('SET_PAGE', page);
      context.dispatch('LOAD_DATA_LIST');
    }
  },
  RESET_PAGE: (context) => {
    const page = 1;
    context.commit('SET_PAGE', page);
  },
  SORT: async (context, { header, nextSortOrder }) => {
    const sort = nextSortOrder
      ? `${sortToQueryAdapter(nextSortOrder)}${header.field}`
      : nextSortOrder;
    context.commit('SET_SORT', sort);
    context.dispatch('UPDATE_HEADER_SORT', { header, nextSortOrder });
    await context.dispatch('RESET_PAGE');
    return context.dispatch('LOAD_DATA_LIST');
  },
  UPDATE_HEADER_SORT: (context, { header, nextSortOrder }) => {
    const headers = context.state.headers.map((oldHeader) => ({
      ...oldHeader,
      sort: oldHeader.field === header.field ? nextSortOrder : SortSymbols.NONE,
    }));
    context.commit('SET_HEADERS', headers);
  },
  PATCH_ITEM_PROPERTY: async (context, { item, index, prop, value }) => {
    await context.commit('PATCH_ITEM_PROPERTY', { index, prop, value });
    const id = item?.id || context.state.dataList[index].id;
    const changes = { [prop]: value };
    try {
      await context.dispatch('PATCH_ITEM', { id, changes });
      context.commit('PATCH_ITEM_PROPERTY', { item, index, prop, value });
    } catch {
      context.dispatch('LOAD_DATA_LIST');
    }
  },
  REMOVE_ITEM: async (context, index) => {
    const id = context.state.dataList[index].id;
    context.commit('REMOVE_ITEM', index);
    try {
      await context.dispatch('DELETE_ITEM', id);
    } catch (err) {
      throw err;
    } finally {
      context.dispatch('LOAD_DATA_LIST');
    }
  },
};

const mutations = {
  SET_DATA_LIST: (state, list) => {
    state.dataList = list;
  },
  SET_SIZE: (state, size) => {
    state.size = size;
  },
  SET_SEARCH: (state, search) => {
    state.search = search;
  },
  SET_PAGE: (state, page) => {
    state.page = page;
  },
  SET_SORT: (state, sort) => {
    state.sort = sort;
  },
  SET_IS_NEXT: (state, next) => {
    state.isNextPage = next;
  },
  SET_HEADERS: (state, headers) => {
    state.headers = headers;
  },
  PATCH_ITEM_PROPERTY: (state, { index, prop, value }) => {
    state.dataList[index][prop] = value;
  },
  REMOVE_ITEM: (state, index) => {
    state.dataList.splice(index, 1);
  },
};

export default {
  getActions: () => actions,
  getMutations: () => mutations,
  generateState: () => deepCopy(state),
};

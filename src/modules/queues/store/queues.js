import filters from './filters';
import headers from './_internals/headers';
import getQueuesList from '../api/queues';

const state = {
  headers,
  dataList: [],
  aggs: {},
  isNext: true,
};

const getters = {
  DATA_FIELDS: (state) => {
    let fields = state.headers
      .filter((header) => header.show)
      .map((header) => header.field);
    fields = [...new Set(fields)];
    return fields;
  },
  GET_DATA_FIELDS_BY_VALUE: (state) => (headerValues) => state.headers
    .reduce((fields, header) => {
      if (headerValues.includes(header.value)) return fields.concat(header.field);
      return fields;
    }, []),
};

const actions = {
  FETCH_LIST: async (context, params) => {
    const fields = params.fields
      ? context.getters.GET_DATA_FIELDS_BY_VALUE(params.fields)
      : context.getters.DATA_FIELDS;
    const _params = {
      ...params,
      fields,
    };
    const { items, next, aggs = {} } = await getQueuesList(_params);
    context.commit('SET_LIST', items);
    context.commit('SET_NEXT', next);
    context.commit('SET_AGGS', aggs);
    return { items, aggs, next };
  },
  SET_HEADERS: (context, headers) => {
    context.commit('SET_HEADERS', headers);
  },
};

const mutations = {
  SET_LIST: (state, queues) => {
    state.dataList = queues;
  },
  SET_AGGS: (state, aggs) => {
    state.aggs = aggs;
  },
  SET_NEXT: (state, isNext) => {
    state.isNext = isNext;
  },
  SET_HEADERS: (state, headers) => {
    state.headers = headers;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
  modules: { filters },
};

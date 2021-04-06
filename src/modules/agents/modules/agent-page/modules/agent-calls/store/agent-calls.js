import filters from './filters';
import headers from './_internals/headers';
import AgentCallsAPI from '../api/agent-calls';

const state = {
  headers,
  dataList: [],
  isNext: false,
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
    const { items, next } = await AgentCallsAPI.getList(_params);
    context.commit('SET_LIST', items);
    context.commit('SET_IS_NEXT', { isNext: next });
    return { items, next };
  },
  SET_HEADERS: (context, headers) => {
    context.commit('SET_HEADERS', headers);
  },
};

const mutations = {
  SET_HEADERS: (state, headers) => {
    state.headers = headers;
  },
  SET_LIST: (state, agents) => {
    state.dataList = agents;
  },
  SET_IS_NEXT: (state, { isNext }) => {
    state.isNext = isNext;
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

import filters from './filters';
import { getActiveCallList } from '../api/activeCalls';

const state = {
    dataList: [],
    isNext: false,
};

const getters = {};

const actions = {
    FETCH_LIST: async (context, params = {}) => {
        try {
            const { items, next } = await getActiveCallList(params);
            context.commit('SET_LIST', items);
            context.commit('SET_IS_NEXT', { isNext: next });
        } catch {
        }
    },
};

const mutations = {
    SET_LIST: (state, queues) => {
        state.dataList = queues;
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

import { getActiveCallList } from "../../../api/activeCalls/activeCalls";

const state = {
    dataList: [],
    isNext: false,
};

const getters = {};

const actions = {
    FETCH_LIST: async (context, params = {}) => {
        try {
            const { items, next } = await getActiveCallList(params);
            context.commit('SET_NEXT_PAGE', next);
            context.commit('SET_LIST', items);
        } catch {
        }         
    },
};

const mutations = {
    SET_LIST: (state, queues) => {
        state.dataList = queues;
    },
    SET_NEXT_PAGE: (state, isNext) => {
        state.isNext = isNext;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
    modules: {}
};
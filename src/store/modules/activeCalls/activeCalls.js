import { getActiveCallList } from "../../../api/activeCalls/activeCalls";

const state = {
    dataList: []
};

const getters = {};

const actions = {
    FETCH_LIST: async (context, params = {}) => {
        const { items, next } = await getActiveCallList(params);
        context.commit('SET_LIST', items);
        return next
    },
};

const mutations = {
    SET_LIST: (state, queues) => {
        state.dataList = queues;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
    modules: {}
};
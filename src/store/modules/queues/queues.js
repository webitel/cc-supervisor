import { getQueuesList } from "../../../api//queues/queues";

const state = {
    dataList: []
};

const getters = {
    GET_QUEUES: (state) => {
        return state.dataList;
    }
};

const actions = {
    FETCH_LIST: async (context, params = {}) => {
        const { items, next } = await getQueuesList(params);
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
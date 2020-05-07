import { getAgentsList } from "../../../api/agents/agents";

const state = {
    dataList: []
};

const getters = {
    GET_AGENTS: (state) => {
        return state.dataList;
    }
};

const actions = {
    FETCH_LIST: async (context, params = {}) => {
        const { items, next } = await getAgentsList(params);
        context.commit('SET_LIST', items);
        return next
    },
};

const mutations = {
    SET_LIST: (state, agents) => {
        state.dataList = agents;
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
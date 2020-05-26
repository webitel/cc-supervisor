import { getAgentCallsList } from "../../../api/agents/agent-calls";

const state = {
    dataList: [],
};

const getters = {};

const actions = {
    FETCH_LIST: async (context, id, page, size, search, sort) => {
        const { items, next } = await getAgentCallsList(id, page, size, search, sort);
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
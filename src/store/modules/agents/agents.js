import { getAgentsList, getAgent } from "../../../api/agents/agents";

const state = {
    dataList: [],
    itemInstance: {},
};

const getters = {};

const actions = {
    FETCH_LIST: async (context, params = {}) => {
        const { items, next } = await getAgentsList(params);
        context.commit('SET_LIST', items);
        return next
    },
    FETCH_ITEM: async (context, id) => {
        const item = await getAgent(id);
        context.commit('SET_ITEM', item);
        // return next
    },
};

const mutations = {
    SET_LIST: (state, agents) => {
        state.dataList = agents;
    },
    SET_ITEM: (state, agent) => {
        state.itemInstance = agent;
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
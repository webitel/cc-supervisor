import { getAgentsList, getAgent, patchAgentStatus } from "../../../api/agents/agents";

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
    },
    UPDATE_STATUS: async (context, { agentId, status }) => {
        const { success } = await patchAgentStatus({ agentId, status });
        if (success) {
            context.commit('SET_STATUS', agentId, status);
        }
    },
};

const mutations = {
    SET_LIST: (state, agents) => {
        state.dataList = agents;
    },
    SET_ITEM: (state, agent) => {
        state.itemInstance = agent;
    },
    SET_STATUS: (state, { agentId, status }) => {
        if (!agentId || !status) return;
        if (state.itemInstance.id === agentId) state.itemInstance = status;
        let foundIndex = state.dataList.findIndex(agent => agent.id == agentId);
        state.dataList[foundIndex].status = status;
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
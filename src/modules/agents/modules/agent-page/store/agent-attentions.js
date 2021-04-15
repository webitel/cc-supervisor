import { getAgentAttentionsList, deleteAgentAttention } from '../api/agent-attentions';

const state = {
    dataList: [],
    // agent_id: 0,
};

const getters = {};

const actions = {
    LOAD_DATA_LIST: async (context, id, page, size, search, sort) => {
        const { items, next } = await getAgentAttentionsList({
            id,
            page,
            size,
            search,
            sort,
        });
        context.commit('SET_LIST', items);
        return next;
    },
    REMOVE_ITEM: async (context, agentId, attentionId) => {
        const { success } = await deleteAgentAttention({ agentId, attentionId });
        if (success) context.commit('DELETE_ITEM', attentionId);
        return success;
    },
};

const mutations = {
    SET_LIST: (state, agents) => {
        state.dataList = agents;
    },
    DELETE_ITEM: (state, index) => {
        state.dataList.splice(index, 1);
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
    modules: {},
};

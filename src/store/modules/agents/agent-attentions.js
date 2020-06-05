import { getAgentAttentionsList, deleteAgentAttention } from "../../../api/agents/agent-attentions";

const state = {
    dataList: [],
    // agent_id: 0,
};

const getters = {};

const actions = {
    FETCH_LIST: async (context, id, page, size, search, sort) => {
        const { items, next } = await getAgentAttentionsList(id, page, size, search, sort);
        context.commit('SET_LIST', items);
        return next
    },
    REMOVE_ITEM: async (context, agent_id, attention_id) => {
        const { success } = await deleteAgentAttention(agent_id, attention_id);
        if (success) context.commit('DELETE_ITEM', attention_id);
        return success
    },
};

const mutations = {
    SET_LIST: (state, agents) => {
        state.dataList = agents;
    },
    DELETE_ITEM: (state, index) => {
        state.dataList.splice(index, 1);
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
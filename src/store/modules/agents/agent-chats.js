import { getAgentChatsList } from '../../../api/agents/agent-chats';

const state = {
    dataList: [],
};

const getters = {};

const actions = {
    FETCH_LIST: async (context, id, page, size, search, sort) => {
        const { items, next } = await getAgentChatsList(id, page, size, search, sort);
        context.commit('SET_LIST', items);
        return next;
    },
};

const mutations = {
    SET_LIST: (state, agents) => {
        state.dataList = agents;
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

import { getAgentCallsList } from '../../../api/agents/agent-calls';

const state = {
    dataList: [],
    isNext: false,
};

const getters = {};

const actions = {
    FETCH_LIST: async (context, {
 agentId, page, size, search, sort,
}) => {
        const { items, next } = await getAgentCallsList({
 agentId, page, size, search, sort,
});
        context.commit('SET_LIST', items);
        context.commit('SET_IS_NEXT', { isNext: next });
        return next;
    },
};

const mutations = {
    SET_LIST: (state, agents) => {
        state.dataList = agents;
    },
    SET_IS_NEXT: (state, { isNext }) => {
        state.isNext = isNext;
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

import { getQueuesList } from "../../../api//queues/queues";
import parseJoined from './helper'

const state = {
    dataList: []
};

const getters = {};

const actions = {
    FETCH_LIST: async (context, params = {}) => {
        if (params.period) {
            let joined = parseJoined(params.period);
            params.joinedAtFrom = joined.start;
            params.joinedAtTo = joined.end;
        }
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
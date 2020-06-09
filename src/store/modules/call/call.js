const defaultState = () => ({
    agent: {},
    clientName: '',
    time: '',
    isOpened: false,
    isRecording: false,
    isHold: false,
    isActive: false,
    // isConnection: false,
    isMuted: false,
    isAttachedToCall: false,
});

const state = defaultState();

const getters = {};

const actions = {
    // CLEAR_CALL: async (context) => {
    //     context.commit('CLEAR_STATE');
    // },
    OPEN_WINDOW: async (context) => {
        context.commit('SET_IS_OPENED', true);
    },
    CLOSE_WINDOW: async (context) => {
        context.commit('SET_IS_OPENED', false);
        context.commit('CLEAR_STATE', false);
    },
    ATTACH_TO_CALL: async (context) => {
        context.commit('SET_IS_ATTACHED', true);
    },
    LEAVE_CALL: async (context) => {
        context.commit('SET_IS_ATTACHED', false);
    },
    MUTE_MICRO: async (context) => {
        context.commit('SET_IS_MUTED', true);
    },
    UNMUTE_MICRO: async (context) => {
        context.commit('SET_IS_MUTED', false);
    },
    HOLD_CALL: async (context) => {
        context.commit('SET_IS_HOLD', true);
    },
    UNHOLD_CALL: async (context) => {
        context.commit('SET_IS_HOLD', false);
    },
    FETCH_ACTIVE: async (context) => {
        context.commit('SET_IS_ACTIVE', true);
    },
    SET_CALL_INFO: async (context, { time, agent, clientName }) => {
        context.commit('SET_AGENT', agent);
        context.commit('SET_TIME', time);
        context.commit('SET_CLIENT', clientName || '');
    },
};

const mutations = {
    SET_IS_OPENED: (state, isOpened) => {
        state.isOpened = isOpened;
    },
    SET_IS_RECORDING: (state, isRecording) => {
        state.isRecording = isRecording;
    },
    SET_IS_HOLD: (state, isHold) => {
        state.isHold = isHold;
    },
    SET_IS_ACTIVE: (state, isActive) => {
        state.isActive = isActive;
    },
    // SET_IS_CONNECTION: (state, isConnection) => {
    //     state.isConnection = isConnection;
    // },
    SET_IS_MUTED: (state, isMuted) => {
        state.isMuted = isMuted;
    },
    SET_IS_ATTACHED: (state, isAttachedToCall) => {
        state.isAttachedToCall = isAttachedToCall;
    },
    SET_AGENT: (state, agent) => {
        state.agent = agent;
    },
    SET_CLIENT: (state, clientName) => {
        state.clientName = clientName;
    },
    SET_TIME: (state, time) => {
        state.time = time;
    },
    CLEAR_STATE: (state) => {
        state = defaultState();
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
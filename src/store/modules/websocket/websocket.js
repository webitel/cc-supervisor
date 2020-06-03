import Vue from 'vue';

const state = {
    socket: {
        isConnected: false,
        // messages: '',
        reconnectError: false,
    },
    notifications: [],
};

const getters = {};

const actions = {};

const mutations = {
    SOCKET_ONOPEN (state, event)  {
        Vue.prototype.$socket = event.currentTarget
        state.socket.isConnected = true
    },
    SOCKET_ONCLOSE (state, event)  {
        state.socket.isConnected = false
    },
    SOCKET_ONERROR (state, event)  {
        console.error(state, event)
    },
    SOCKET_ONMESSAGE (state, message)  {
        console.log(message)
        state.notifications.unshift(JSON.parse(message.data))
    },
    SOCKET_RECONNECT(state, count) {
        console.info(state, count)
    },
    SOCKET_RECONNECT_ERROR(state) {
        state.socket.reconnectError = true;
    },
    DELETE_NOTIFICATION (state, index) {
        state.notifications.splice(index, 1);
    }
};

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations,
    modules: {}
};
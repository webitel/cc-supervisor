import { CallActions } from 'webitel-sdk';

import { getCliInstance } from '../../../app/api/callWSConnection';

const callParams = { disableStun: true };

const callHandler = (context) => (action, call) => {
  switch (action) {
    case CallActions.Ringing:
      if (context.state.call) return;
      context.commit('SET_CALL', call);
      context.commit('SET_TIME', 0);
      context.commit('SET_AGENT', { name: call.displayName });
      if (context.state.isEavesdrop) {
        const client = {
          name: call.variables?.eavesdrop_name || call.destination,
          number: call.destination,
        };
        context.commit('SET_EAVESDROP_IS_OPENED', true);
        context.commit('SET_CLIENT', client);
      } else {
        context.commit('SET_VISIBILITY', true);
      }
      // if (call.direction === CallDirection.Inbound) {
      // }
      break;
    case CallActions.Active:
      if (context.state.isEavesdrop) {
         
        const client = call.variables?.eavesdrop_name || '';
        // context.commit('SET_TIME', +call.variables.eavesdrop_duration);
        context.commit('SET_EAVESDROP_IS_OPENED', true);
        context.commit('SET_IS_EAVESDROP', false);
        context.commit('SET_CLIENT', client);
      } else {
        context.commit('SET_IS_OPENED', true);
      }
      context.commit('START_TIMER');

      break;
    case CallActions.Bridge:
      context.commit('STOP_TIMER');
      context.commit('SET_CALL', call);
      context.commit('SET_TIME', 0);
      context.commit('SET_AGENT', { name: call.displayName });
      context.commit('START_TIMER');
      break;
    case CallActions.Hold:
      context.commit('STOP_TIMER');
      break;
    case CallActions.Hangup:
      context.commit('STOP_TIMER');
      context.commit('SET_CALL', null);
      context.commit('SET_TIME', 0);
      context.commit('SET_VISIBILITY', false);
      context.commit('SET_IS_OPENED', false);
      context.commit('SET_EAVESDROP_IS_OPENED', false);
      context.commit('SET_EAVESDROP_LAST_DTMF', '0');
      // context.commit('CLEAR_STATE');
      break;
    case CallActions.PeerStream:
      context.dispatch('HANDLE_STREAM_ACTION', call);
      break;
    default:
  }
};

const defaultState = () => ({
  timer: null,
  call: null,
  agent: {},
  client: {},
  time: 0,
  isOpened: false,
  isVisible: false,
  isRecording: false,
  isHold: false,
  // isActive: false,
  // isConnection: false,
  isMuted: false,
  isAttachedToCall: false,

  // EAVESDROP
  isEavesdrop: false,
  isEavesdropOpened: false,
  eavesdropLastDTMF: 0,
});

const state = defaultState();

const getters = {};

const actions = {
  // CLEAR_CALL: async (context) => {
  //     context.commit('CLEAR_STATE');
  // },
  SUBSCRIBE_CALLS: async (context) => {
    const client = await getCliInstance();
    await client.subscribeCall(callHandler(context), null);
  },
  OPEN_WINDOW: async (context) => {
    context.commit('SET_VISIBILITY', true);
  },
  CLOSE_WINDOW: async (context) => {
    context.dispatch('LEAVE_CALL');
    context.commit('STOP_TIMER');
    context.commit('SET_IS_OPENED', false);
    context.commit('SET_VISIBILITY', false);
    context.commit('CLEAR_STATE');
  },
  EAVESDROP_OPEN_WINDOW: async (context) => {
    context.commit('SET_EAVESDROP_IS_OPENED', true);
  },
  EAVESDROP_CLOSE_WINDOW: async (context) => {
    context.dispatch('LEAVE_CALL');
    context.commit('STOP_TIMER');
    context.commit('SET_EAVESDROP_IS_OPENED', false);
    context.commit('SET_EAVESDROP_LAST_DTMF', '0');
    context.commit('CLEAR_STATE');
  },
  CALL: async (context) => {
    const { agent } = context.state;
    if (!agent) return;
    const destination = agent.extension;
    // eslint-disable-next-line no-useless-escape
    destination.replace(/[^0-9a-zA-z\+\*#]/g, '');
    const client = await getCliInstance();
    try {
      await client.call({ destination, params: callParams });
    } catch (err) {
      console.error(err);
    }
    // context.commit('SET_IS_ATTACHED', true);
  },
  ANSWER: async (context) => {
    const { call } = context.state;
    if (call) {
      const params = { useAudio: true };
      try {
        await call.answer(params);
        context.commit('SET_CALL', call);
      } catch (err) {
        console.error(err);
      }
    }
  },
  LEAVE_CALL: async (context) => {
    const { call } = context.state;
    if (call && call.allowHangup) {
      try {
        await call.hangup();
        // context.commit('SET_IS_ATTACHED', false);
      } catch (err) {
        console.error(err);
      }
    }
  },
  TOGGLE_MUTE: async (context) => {
    const { call } = context.state;
    if (!call) return;
    const isMuted = call.muted;
    await call.mute(!isMuted);
    // context.commit('SET_IS_MUTED', !isMuted);
  },
  TOGGLE_HOLD: async (context) => {
    const { call } = context.state;
    if (!call) return;
    // const isHold = call.isHold
    if ((!call.isHold && call.allowHold)
      || (call.isHold && call.allowUnHold)) {
      try {
        await call.toggleHold();
      } catch (err) {
        console.error(err);
      }
      // context.commit('SET_IS_HOLD', !isHold);
    }
  },
  SET_CALL_INFO: async (context, { agent, client }) => {
    context.commit('SET_AGENT', agent);
    context.commit('SET_CLIENT', client);
  },

  ATTACH_TO_CALL: async (context, { id }) => {
    const client = await getCliInstance();
    try {
      context.commit('SET_IS_EAVESDROP', true);
      await client.eavesdrop({
        id,
        control: true,
        listenA: true,
        listenB: true,
      });
    } catch (err) {
      console.error(err);
    }
    // context.commit('SET_EAVESDROP_IS_OPENED', true);
  },

  SEND_DTMF: async (context, { dtmf }) => {
    const { call } = context.state;
    if (!call || context.state.eavesdropLastDTMF === dtmf) return;
    try {
      if (!call.allowDtmf) return;
      await call.sendDTMF(dtmf);
      context.commit('SET_EAVESDROP_LAST_DTMF', dtmf);
    } catch (err) {
      console.error(err);
    }
    // context.commit('SET_EAVESDROP_IS_OPENED', true);
  },

  HANDLE_STREAM_ACTION: (context, call) => {
    const audio = new Audio();
    const stream = call.peerStreams.slice(-1)
    .pop();
    if (stream) {
      audio.srcObject = stream;
      audio.play();
    }
  },
};

const mutations = {
  SET_IS_OPENED: (state, isOpened) => {
    state.isOpened = isOpened;
  },
  SET_VISIBILITY: (state, isVisible) => {
    state.isVisible = isVisible;
  },
  SET_AGENT: (state, agent) => {
    state.agent = agent;
  },
  SET_CLIENT: (state, client) => {
    state.client = client;
  },
  SET_TIME: (state, time) => {
    state.time = time;
  },
  CLEAR_STATE: (state) => {
    Object.assign(state, defaultState());
  },
  SET_CALL: (state, call) => {
    state.call = call;
  },
  START_TIMER: (state) => {
    state.timer = setInterval(() => {
      state.time += 1;
    }, 1000);
  },
  STOP_TIMER: (state) => {
    clearInterval(state.timer);
    state.timer = null;
  },
  SET_IS_EAVESDROP: (state, isEavesdrop) => {
    state.isEavesdrop = isEavesdrop;
  },
  SET_EAVESDROP_IS_OPENED: (state, isEavesdropOpened) => {
    state.isEavesdropOpened = isEavesdropOpened;
  },
  SET_EAVESDROP_LAST_DTMF: (state, dtmf) => {
    state.eavesdropLastDTMF = dtmf;
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

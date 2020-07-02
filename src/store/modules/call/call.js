import { CallActions, CallDirection } from 'webitel-sdk';
import { getCliInstance } from '@/api/call-ws-connection';

// const callParams = { disableStun: true };

const callHandler = (context) => (action, call) => {
    switch (action) {
      case CallActions.Ringing:
        context.commit('SET_CALL', call);
        context.commit('SET_TIME', 0);
        if (call.direction === CallDirection.Inbound) {
            context.commit('SET_IS_OPENED', true);
            context.commit('SET_AGENT', { name: call.displayName() })
        }
        break;
      case CallActions.Active:
        context.commit('START_TIMER');
        break;
      case CallActions.Hold:
        context.commit('STOP_TIMER');
        break;
      case CallActions.Hangup:
        context.commit('STOP_TIMER');
        context.commit('SET_CALL', null);
        context.commit('SET_TIME', 0);
        break;
    //   case CallActions.Destroy:
    //     context.commit('SET_CALL', null);
    //     break;
      default:
    }
  };

const defaultState = () => ({
    timer: null,
    call: null,
    agent: {},
    clientName: '',
    time: 0,
    isOpened: false,
    isRecording: false,
    isHold: false,
    // isActive: false,
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
    SUBSCRIBE_CALLS: async (context) => {
        const client = await getCliInstance();
        await client.subscribeCall(callHandler(context), null);
    },
    OPEN_WINDOW: async (context) => {
        context.commit('SET_IS_OPENED', true);
    },
    CLOSE_WINDOW: async (context) => {
        context.commit('SET_IS_OPENED', false);
        context.commit('CLEAR_STATE', false);
    },
    CALL: async (context) => {
        const agent = context.state.agent;
        if (!agent) return;
        let destination = agent.extension;
        // eslint-disable-next-line no-useless-escape
        destination.replace(/[^0-9a-zA-z\+\*#]/g, '');
        const client = await getCliInstance();
        try {
            await client.call({ destination });
        } catch {
        }
        // context.commit('SET_IS_ATTACHED', true);
    },
    ANSWER: async (context) => {
        const call = context.state.call;
        if (call) {
          const params = { useAudio: true };
          try {
            await call.answer(params);
            context.dispatch('SET_CALL', call);
          } catch {
          }
        }
      },
    LEAVE_CALL: async (context) => {
        const call = context.state.call;
        if (call && call.allowHangup) {
            try {
              await call.hangup();
                // context.commit('SET_IS_ATTACHED', false);
            } catch {
            }
        }
    },
    TOGGLE_MUTE: async (context) => {
        const call = context.state.call;
        if (!call) return;
        const isMuted = call.muted;
        await call.mute(!isMuted);
        // context.commit('SET_IS_MUTED', !isMuted);
    },
    TOGGLE_HOLD: async (context) => {
        const call = context.state.call;
        if (!call) return;
        // const isHold = call.isHold
        if ((!call.isHold && call.allowHold)
            || (call.isHold && call.allowUnHold)) {
            try {
                await call.toggleHold();
            } catch {
            }
            // context.commit('SET_IS_HOLD', !isHold);
        }
    },
    // FETCH_ACTIVE: async (context) => {
    //     context.commit('SET_IS_ACTIVE', true);
    // },
    SET_CALL_INFO: async (context, { agent, clientName }) => {
        context.commit('SET_AGENT', agent);
        context.commit('SET_CLIENT', clientName || '');
    },

    
};

const mutations = {
    SET_IS_OPENED: (state, isOpened) => {
        state.isOpened = isOpened;
    },
    // SET_IS_RECORDING: (state, isRecording) => {
    //     state.isRecording = isRecording;
    // },
    // SET_IS_HOLD: (state, isHold) => {
    //     state.isHold = isHold;
    // },
    // SET_IS_ACTIVE: (state, isActive) => {
    //     state.isActive = isActive;
    // },
    // SET_IS_CONNECTION: (state, isConnection) => {
    //     state.isConnection = isConnection;
    // },
    // SET_IS_MUTED: (state, isMuted) => {
    //     state.isMuted = isMuted;
    // },
    // SET_IS_ATTACHED: (state, isAttachedToCall) => {
    //     state.isAttachedToCall = isAttachedToCall;
    // },
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

    SET_CALL: (state, call) => {
        state.call = call;
    },

    START_TIMER: (state) => {
        state.timer = setInterval(()=>{
            state.time++;
        }, 1000);
    },

    STOP_TIMER: (state) => {
        clearInterval(state.timer);
        state.timer = null;
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
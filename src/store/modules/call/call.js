import { CallActions, CallDirection } from 'webitel-sdk';
import { getCliInstance } from '@/api/call-ws-connection';

// const callParams = { disableStun: true };

const callHandler = (context) => (action, call) => {
    switch (action) {
      case CallActions.Ringing:
        if (!!context.state.call) return;
        context.commit('SET_CALL', call);
        context.commit('SET_TIME', 0);
        context.commit('SET_AGENT', { name: call.displayName });
        context.commit('SET_IS_OPENED', true);
        // if (call.direction === CallDirection.Inbound) {
            
        // }
        break;
      case CallActions.Active:
        context.commit('START_TIMER');
        break;
      case CallActions.Bridge:
        context.commit('STOP_TIMER');
        context.commit('SET_CALL', call);
        context.commit('SET_TIME', 0);
        context.commit('SET_AGENT', { name: call.displayName })
        context.commit('START_TIMER');
        break;
      case CallActions.Hold:
        context.commit('STOP_TIMER');
        break;
      case CallActions.Hangup:
        context.commit('STOP_TIMER');
        context.commit('SET_CALL', null);
        context.commit('SET_TIME', 0);
        context.commit('SET_IS_OPENED', false);
        break;
      case CallActions.Destroy:
        context.commit('SET_CALL', null);
        context.commit('SET_IS_OPENED', false);
        break;
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
        context.dispatch('LEAVE_CALL');
        context.commit('STOP_TIMER');
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
        } catch (err) {
            console.error(err);
        }
        // context.commit('SET_IS_ATTACHED', true);
    },
    ANSWER: async (context) => {
        const call = context.state.call;
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
        const call = context.state.call;
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
            } catch (err) {
                console.error(err);
             }
            // context.commit('SET_IS_HOLD', !isHold);
        }
    },
    SET_CALL_INFO: async (context, { agent, clientName }) => {
        context.commit('SET_AGENT', agent);
        context.commit('SET_CLIENT', clientName || '');
    },

    ATTACH_TO_CALL: async (context, { id }) => {
        const client = await getCliInstance();
        try {
            await client.eavesdrop({
                id: id, 
                control: true,
                listenA: true, 
                listenB: true,
            })
        } catch (err) {
            console.error(err);
        }
        // context.commit('SET_IS_ATTACHED', true);
    },
};

const mutations = {
    SET_IS_OPENED: (state, isOpened) => {
        state.isOpened = isOpened;
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
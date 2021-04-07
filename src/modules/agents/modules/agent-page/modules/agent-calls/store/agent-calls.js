import PageStoreModule from '../../../../../../../app/store/BaseStoreModules/PageStoreModule';
import filters from './filters';
import headers from './_internals/headers';
import AgentCallsAPI from '../api/agent-calls';

const state = {
  headers,
};

const getters = {
  GET_FILTERS: (state, getters, rootState, rootGetters) => rootGetters['agents/agentPage/agentCalls/filters/GET_FILTERS'],
};

const agentCalls = new PageStoreModule({ state })
  .setChildModules({ filters })
  .attachAPIModule(AgentCallsAPI)
  .generateAPIActions()
  .getModule({ getters });
export default agentCalls;

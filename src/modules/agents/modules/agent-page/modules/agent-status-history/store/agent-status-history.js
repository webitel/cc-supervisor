import TableStoreModule from '../../../../../../../app/store/BaseStoreModules/TableStoreModule';
import filters from '../modules/filters/store/filters';
import headers from './_internals/headers';
import AgentStatusHistoryAPI from '../api/agent-status-history';

const state = {
  headers,
};

const getters = {
  GET_FILTERS: (state, getters, rootState, rootGetters) => rootGetters['agents/agentPage/agentStatusHistory/filters/GET_FILTERS'],
};

const agentCalls = new TableStoreModule({ state })
  .setChildModules({ filters })
  .attachAPIModule(AgentStatusHistoryAPI)
  .generateAPIActions()
  .getModule({ getters });
export default agentCalls;

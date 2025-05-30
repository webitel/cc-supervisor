import TableStoreModule from '../../../../../../../app/store/BaseStoreModules/TableStoreModule';
import AgentStatusHistoryAPI from '../api/agent-status-history';
import filters from '../modules/filters/store/filters';
import headers from './_internals/headers';

const state = {
  headers,
};

const getters = {
  GET_FILTERS: (state, getters, rootState, rootGetters) => rootGetters['agents/card/statusHistory/filters/GET_FILTERS'],
};

const statusHistory = new TableStoreModule({ state })
  .setChildModules({ filters })
  .attachAPIModule(AgentStatusHistoryAPI)
  .generateAPIActions()
  .getModule({ getters });
export default statusHistory;

import TableStoreModule from '../../../../../../../app/store/BaseStoreModules/TableStoreModule';
import filters from '../modules/filters/store/filters';
import headers from './_internals/headers';
import AgentCallsAPI from '../api/agent-calls';

const state = {
  headers,
};

const getters = {
  GET_FILTERS: (state, getters, rootState, rootGetters) => rootGetters['agents/card/calls/filters/GET_FILTERS'],
};

const calls = new TableStoreModule({ state })
  .setChildModules({ filters })
  .attachAPIModule(AgentCallsAPI)
  .generateAPIActions()
  .getModule({ getters });
export default calls;

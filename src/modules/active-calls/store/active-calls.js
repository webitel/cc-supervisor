import TableStoreModule
  from '../../../app/store/BaseStoreModules/TableStoreModule';
import card from '../../agents/modules/agent-card/store/agent-card';
import ActiveCallsAPI from '../api/active-calls';
import filters from '../modules/filters/store/filters';
import headers from './_internals/headers';

const state = {
  headers,
};

const getters = {
  GET_FILTERS: (
    state,
    getters,
    rootState,
    rootGetters,
  ) => rootGetters['activeCalls/filters/GET_FILTERS'],
};

const activeCalls = new TableStoreModule({ state })
  .setChildModules({
                     card,
                     filters,
                   })
  .attachAPIModule(ActiveCallsAPI)
  .generateAPIActions()
  .getModule({ getters });

export default activeCalls;

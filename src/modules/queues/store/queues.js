import TableStoreModule from '../../../app/store/BaseStoreModules/TableStoreModule';
import QueuesAPI from '../api/queues';
import filters from '../modules/filters/store/filters';
import headers from './_internals/headers';

const state = {
  headers,
};

const getters = {
  GET_FILTERS: (state, getters, rootState, rootGetters) => rootGetters['queues/filters/GET_FILTERS'],
};

const queues = new TableStoreModule({ state })
  .setChildModules({ filters })
  .attachAPIModule(QueuesAPI)
  .generateAPIActions()
  .getModule({ getters });
export default queues;

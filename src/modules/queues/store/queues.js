import TableStoreModule from '../../../app/store/BaseStoreModules/TableStoreModule';
import filters from '../modules/filters/store/filters';
import headers from './_internals/headers';
import QueuesAPI from '../api/queues';

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

import PageStoreModule from '../../../app/store/BaseStoreModules/PageStoreModule';
import filters from './filters';
import headers from './_internals/headers';
import QueuesAPI from '../api/queues';

const state = {
  headers,
};

const getters = {
  GET_FILTERS: (state, getters, rootState, rootGetters) => rootGetters['queues/filters/GET_FILTERS'],
};

const queues = new PageStoreModule({ state })
  .setChildModules({ filters })
  .attachAPIModule(QueuesAPI)
  .generateAPIActions()
  .getModule({ getters });
export default queues;

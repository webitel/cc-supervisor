import TableStoreModule from '../../../app/store/BaseStoreModules/TableStoreModule';
import AgentsAPI from '../api/agents';
import card from '../modules/agent-card/store/agent-card';
import headers from './_internals/headers';

const state = {
  headers,
};

const getters = {
  GET_FILTERS: (state, getters, rootState, rootGetters) => rootGetters['queues/filters/GET_FILTERS'],
};

const agents = new TableStoreModule({ state })
.setChildModules({
  card,
})
.attachAPIModule(AgentsAPI)
.generateAPIActions()
.getModule({ getters });
export default agents;

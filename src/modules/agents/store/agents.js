import TableStoreModule from '../../../app/store/BaseStoreModules/TableStoreModule';
import AgentsAPI from '../api/agents';
import card from '../modules/agent-card/store/agent-card';
import filters from '../modules/filters/store/filters';
import headers from './_internals/headers';

const state = {
  headers,
};

const getters = {
  GET_FILTERS: (state, getters, rootState, rootGetters) => rootGetters['agents/filters/GET_FILTERS'],
};

const agents = new TableStoreModule({ state })
.setChildModules({
  card,
  filters,
})
.attachAPIModule(AgentsAPI)
.generateAPIActions()
.getModule({ getters });

export default agents;

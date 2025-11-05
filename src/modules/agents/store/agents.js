import TableStoreModule from '../../../app/store/BaseStoreModules/TableStoreModule';
import AgentsAPI from '../api/agents';
import card from '../modules/agent-card/store/agent-card';
import headers from './_internals/headers';

const state = {
  headers,
};

const agents = new TableStoreModule({ state })
.setChildModules({
  card,
})
.attachAPIModule(AgentsAPI)
.generateAPIActions()

export default agents;

import TableStoreModule from '../../../../../../../app/store/BaseStoreModules/TableStoreModule';
import AgentPauseCauseAPI from '../api/agent-pause-causes';
import headers from './_internals/headers';

const state = {
  headers,
};

const agentPauseCause = new TableStoreModule({ state })
  .attachAPIModule(AgentPauseCauseAPI)
  .generateAPIActions()
  .getModule();
export default agentPauseCause;

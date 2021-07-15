import TableStoreModule from '../../../../../../../app/store/BaseStoreModules/TableStoreModule';
import headers from './_internals/headers';
import AgentPauseCauseAPI from '../api/agent-pause-causes';

const state = {
  headers,
};

const agentPauseCause = new TableStoreModule({ state })
  .attachAPIModule(AgentPauseCauseAPI)
  .generateAPIActions()
  .getModule();
export default agentPauseCause;

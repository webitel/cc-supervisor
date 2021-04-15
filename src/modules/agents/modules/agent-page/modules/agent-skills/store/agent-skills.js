import TableStoreModule from '../../../../../../../app/store/BaseStoreModules/TableStoreModule';
import headers from './_internals/headers';
import AgentSkillsAPI from '../api/agent-skills';
import NestedObjectStoreModule
  from '../../../../../../../packages/client/store/BaseStoreModules/StoreModules/NestedObjectStoreModule';

const resettableItemState = {
  itemInstance: {
    skill: '',
    capacity: 10,
    enabled: true,
  },
};

const tableStoreModule = new TableStoreModule().getModule();

const agentSkills = new NestedObjectStoreModule({ resettableItemState, headers })
  .attachAPIModule(AgentSkillsAPI)
  .generateAPIActions()
  .getModule({ ...tableStoreModule });

export default agentSkills;

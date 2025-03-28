import TableStoreModule from '../../../../../../../app/store/BaseStoreModules/TableStoreModule';
import NestedObjectStoreModule
  from '../../../../../../../packages/client/store/BaseStoreModules/StoreModules/NestedObjectStoreModule';
import AgentSkillsAPI from '../api/agent-skills';
import headers from './_internals/headers';

const resettableItemState = {
  itemInstance: {
    skill: '',
    capacity: 10,
    enabled: true,
  },
};

const tableStoreModule = new TableStoreModule().getModule();

const skills = new NestedObjectStoreModule({ resettableItemState, headers })
  .attachAPIModule(AgentSkillsAPI)
  .generateAPIActions()
  .getModule({ ...tableStoreModule });

export default skills;

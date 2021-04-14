import TableStoreModule from '../../../../../../../app/store/BaseStoreModules/TableStoreModule';
import headers from './_internals/headers';
import AgentSkillsAPI from '../api/agent-skills';

import NestedObjectStoreModule
  from '../../../../../../../app/store/BaseStoreModules/client/BaseStoreModules/StoreModules/NestedObjectStoreModule';

// const state = {
//   parentId: 0,
//   headers,
// };

const resettableItemState = {
  itemInstance: {
    skill: '',
    capacity: 10,
    enabled: true,
  },
};

const actions = {
  LOAD_DATA_LIST: async (context, params) => {
    try {
      const _params = context.getters.GET_LIST_PARAMS(params);
      if (params?.agentId) _params.parentId = params.agentId;
      const { items, next, aggs = {} } = await context.dispatch('GET_LIST', _params);
      context.commit('SET_LIST', items);
      context.commit('SET_NEXT', next);
      context.commit('SET_AGGS', aggs);
      return { items, aggs, next };
    } catch (err) {
      throw err;
    }
  },
};

const tableStoreModule = new TableStoreModule().getModule({ actions });

const agentSkills = new NestedObjectStoreModule({ resettableItemState, headers })
  .attachAPIModule(AgentSkillsAPI)
  .generateAPIActions()
  .getModule({ ...tableStoreModule });

export default agentSkills;

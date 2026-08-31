import { AgentSkillsAPI } from '@webitel/api-services/api';

/**
 * Adapter for `NestedObjectStoreModule` / `TableStoreModule`, which expect an
 * API module object rather than named exports.
 */
export const getAgentSkillsList = (params) => AgentSkillsAPI.getList(params);
export const getAgentSkill = (params) => AgentSkillsAPI.get(params);
export const addAgentSkill = (params) => AgentSkillsAPI.add(params);
export const patchAgentSkill = (params) => AgentSkillsAPI.patch(params);
export const updateAgentSkill = (params) => AgentSkillsAPI.update(params);
export const deleteAgentSkill = (params) => AgentSkillsAPI.delete(params);

export default {
	getList: getAgentSkillsList,
	get: getAgentSkill,
	add: addAgentSkill,
	patch: patchAgentSkill,
	update: updateAgentSkill,
	delete: deleteAgentSkill,
};

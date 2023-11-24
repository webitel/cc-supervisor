import { AgentSkillServiceApiFactory } from 'webitel-sdk';
import {
  getDefaultGetListResponse,
  getDefaultGetParams,
} from '@webitel/ui-sdk/src/api/defaults';
import applyTransform, {
  camelToSnake, mergeEach,
  merge, notify, sanitize, snakeToCamel,
  starToSearch,
} from '@webitel/ui-sdk/src/api/transformers';
import instance from '../../../../../../../app/api/instance';
import configuration from '../../../../../../../app/api/utils/openAPIConfig';
1
const agentSkillService = new AgentSkillServiceApiFactory(configuration, '', instance);

// const defaultObject = {
//   skill: {},
//   capacity: 0,
//   enabled: false,
// };

// const defaultSingleObject = {
//   skill: {},
//   capacity: 0,
//   enabled: false,
// };

const fieldsToSend = ['capacity', 'agentId', 'skill', 'enabled'];

const preRequestHandler = (parentId) => (item) => ({
  ...item,
  agentId: parentId,
});

// const listGetter = new SdkListGetterApiConsumer(agentSkillService.searchAgentSkill,
//   { defaultListObject });
export const getAgentSkillsList = async (params) => {
  console.log('(є проблема тут??) getAgentSkillsList:',  params);
  const defaultObject = {
  skill: {},
  capacity: 0,
  enabled: false,
};
  const {
    parentId,
    page,
    size,
    search,
    sort,
    fields,
    id,
  } = applyTransform(params, [
    merge(getDefaultGetParams()),
    starToSearch('search'),
  ]);

  try {
    const response = await agentSkillService.searchAgentSkill(
      parentId,
      page,
      size,
      search,
      sort,
      fields,
      id,
    );
    const { items, next } = applyTransform(response.data, [
      snakeToCamel(),
      merge(getDefaultGetListResponse()),
    ]);
    return {
      items: applyTransform(items, [
        mergeEach(defaultObject),
      ]),
      next,
    };
  } catch (err) {
    throw applyTransform(err, [
      notify,
    ]);
  }
};

// const itemGetter = new SdkGetterApiConsumer(agentSkillService.readAgentSkill,
//   { defaultSingleObject });
export const getAgentSkill = async ({ parentId, itemId: id }) => {
  const defaultObject = {
  skill: {},
  capacity: 0,
  enabled: false,
};
  try {
    const response = await agentSkillService.readAgentSkill(parentId, id);
    return applyTransform(response.data, [
      snakeToCamel(),
      merge(defaultObject),
    ]);
  } catch (err) {
    throw applyTransform(err, [
      notify,
    ]);
  }
};

// const itemCreator = new SdkCreatorApiConsumer(agentSkillService.createAgentSkill,
//   {
//     fieldsToSend,
//     preRequestHandler,
//   });
export const addAgentSkill = async ({ parentId, itemInstance }) => {
  const item = applyTransform(itemInstance, [
    preRequestHandler(parentId),
    sanitize(fieldsToSend),
    camelToSnake(),
  ]);
  try {
    const response = await agentSkillService.createAgentSkill(parentId, item);
    return applyTransform(response.data, [
      snakeToCamel(),
    ]);
  } catch (err) {
    throw applyTransform(err, [
      notify,
    ]);
  }
};

// const itemPatcher = new SdkPatcherApiConsumer(agentSkillService.patchAgentSkill, { fieldsToSend });
export const patchAgentSkill = async ({ changes, id, parentId }) => {
  const body = applyTransform(changes, [
    sanitize(fieldsToSend),
    camelToSnake(),
  ]);
  try {
    const response = await agentSkillService.patchAgentSkill(parentId, id, body);
    return applyTransform(response.data, [
      snakeToCamel(),
    ]);
  } catch (err) {
    throw applyTransform(err, [
      notify,
    ]);
  }
};

// const itemUpdater = new SdkUpdaterApiConsumer(agentSkillService.updateAgentSkill,
//   {
//     fieldsToSend,
//     preRequestHandler,
//   });
export const updateAgentSkill = async ({
                                         itemInstance,
                                         itemId: id,
                                         parentId,
                                       }) => {
  const item = applyTransform(itemInstance, [
    preRequestHandler(parentId),
    sanitize(fieldsToSend),
    camelToSnake(),
  ]);
  try {
    const response = await agentSkillService.updateAgentSkill(parentId, id, item);
    return applyTransform(response.data, [
      snakeToCamel(),
    ]);
  } catch (err) {
    throw applyTransform(err, [
      notify,
    ]);
  }
};

// const itemDeleter = new SdkDeleterApiConsumer(agentSkillService.deleteAgentSkill);
export const deleteAgentSkill = async ({ parentId, id }) => {
  try {
    const response = await agentSkillService.deleteAgentSkill(parentId, id);
    return applyTransform(response.data, []);
  } catch (err) {
    throw applyTransform(err, [
      notify,
    ]);
  }
};

export default {
  getList: getAgentSkillsList,
  get: getAgentSkill,
  add: addAgentSkill,
  patch: patchAgentSkill,
  update: updateAgentSkill,
  delete: deleteAgentSkill,
};

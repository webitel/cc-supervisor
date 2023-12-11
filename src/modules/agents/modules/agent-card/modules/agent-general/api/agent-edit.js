import { AgentServiceApiFactory } from 'webitel-sdk';
import applyTransform, {
  merge,
  notify,
  snakeToCamel,
  camelToSnake,
  sanitize,
  log,
} from '@webitel/ui-sdk/src/api/transformers';
import instance from '../../../../../../../app/api/instance';
import configuration from '../../../../../../../app/api/utils/openAPIConfig';

const agentService = new AgentServiceApiFactory(configuration, '', instance);

const fieldsToSend = ['team', 'supervisor', 'auditor', 'region', 'progressiveCount', 'chatCount'];

const getAgent = async (params) => {
  const defaultObject = {
    _dirty: false,
    progressiveCount: 0,
    chatCount: 0,
  };
console.log('getAgent edit params:', params);
  try {
    const response = await agentService.readAgent(params.itemId);
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

const patchAgent = async ({ changes, id }) => {
  const body = applyTransform(changes, [
    sanitize(fieldsToSend),
    camelToSnake(),
  ]);
  try {
    const response = await agentService.patchAgent(id, body);
    return applyTransform(response.data, [
      snakeToCamel(),
    ]);
  } catch (err) {
    throw applyTransform(err, [
      notify,
    ]);
  }
};

export default {
  get: getAgent,
  patch: patchAgent,
};

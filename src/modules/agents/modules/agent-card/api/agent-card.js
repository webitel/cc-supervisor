import convertDuration from '@webitel/ui-sdk/src/scripts/convertDuration';
import { AgentServiceApiFactory } from 'webitel-sdk';
import { SdkGetterApiConsumer, SdkPatcherApiConsumer } from 'webitel-sdk/esm2015/api-consumers';
import instance from '../../../../../app/api/instance';
import configuration from '../../../../../app/api/utils/openAPIConfig';

const agentService = new AgentServiceApiFactory(configuration, '', instance);

const defaultSingleObject = {
  _dirty: false,
  progressiveCount: 0,
  chatCount: 0,
};

const itemResponseHandler = (item) => ({
  ...item,
  statusDuration: convertDuration(item.statusDuration),
  online: convertDuration(item.online),
  offline: convertDuration(item.offline),
  pause: convertDuration(item.pause),
});

const fieldsToSend = ['team', 'supervisor', 'auditor', 'region', 'progressiveCount', 'chatCount'];

const _getAgent = (get) => function ({
                                       itemId,
                                       from = new Date().setHours(0, 0, 0, 0),
                                       to = new Date().setHours(23, 59, 59, 999),
                                     }) {
  const params = [itemId, from, to];
  return get(params);
};

const sdkGetterApiConsumer = new SdkGetterApiConsumer(agentService.searchAgentStatusStatisticItem, {
  defaultSingleObject,
  itemResponseHandler,
}).setGetMethod(_getAgent);
const sdkPatcherApiConsumer = new SdkPatcherApiConsumer(agentService.patchAgent, { fieldsToSend });

const getAgent = (params) => sdkGetterApiConsumer.getItem(params);
const patchAgent = (params) => sdkPatcherApiConsumer.patchItem(params);

export default {
  get: getAgent,
  patch: patchAgent,
};

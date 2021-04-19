import convertDuration from '@webitel/ui-sdk/src/scripts/convertDuration';
import { AgentServiceApiFactory } from 'webitel-sdk';
import { SdkPatcherApiConsumer } from 'webitel-sdk/esm2015/api-consumers';
import configuration from '../../../../../app/api/utils/openAPIConfig';
import instance from '../../../../../app/api/instance';

const agentService = new AgentServiceApiFactory(configuration, '', instance);

const defaultItemObject = {
  _dirty: false,
  progressiveCount: 0,
  chatCount: 0,
};

const itemResponseHandler = (item) => ({
  ...defaultItemObject,
  ...item,
  statusDuration: convertDuration(item.statusDuration),
  online: convertDuration(item.online),
  offline: convertDuration(item.offline),
  pause: convertDuration(item.pause),
});

const sdkPatcherApiConsumer = new SdkPatcherApiConsumer(agentService.patchAgent);

export const getAgent = async (id) => {
  try {
    const from = new Date().setHours(0, 0, 0, 0);
    const to = new Date().setHours(23, 59, 59, 999);
    const response = await agentService.searchAgentStatusStatisticItem(id, from, to);
    return itemResponseHandler(response);
  } catch (err) {
    throw err;
  }
};

const patchAgent = (params) => sdkPatcherApiConsumer.patchItem(params);

export default {
  get: getAgent,
  patch: patchAgent,
};

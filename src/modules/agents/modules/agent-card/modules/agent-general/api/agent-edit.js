import { AgentServiceApiFactory } from 'webitel-sdk';
import { SdkGetterApiConsumer, SdkPatcherApiConsumer } from 'webitel-sdk/esm2015/api-consumers';
import instance from '../../../../../../../app/api/instance';
import configuration from '../../../../../../../app/api/utils/openAPIConfig';

const agentService = new AgentServiceApiFactory(configuration, '', instance);

const defaultSingleObject = {
  _dirty: false,
  progressiveCount: 0,
  chatCount: 0,
};

const fieldsToSend = ['team', 'supervisor', 'auditor', 'region', 'progressiveCount', 'chatCount'];

const sdkGetterApiConsumer = new SdkGetterApiConsumer(agentService.readAgent, {
  defaultSingleObject,
});
const sdkPatcherApiConsumer = new SdkPatcherApiConsumer(agentService.patchAgent, { fieldsToSend });

const getAgent = (params) => sdkGetterApiConsumer.getItem(params);
const patchAgent = (params) => sdkPatcherApiConsumer.patchItem(params);

export default {
  get: getAgent,
  patch: patchAgent,
};

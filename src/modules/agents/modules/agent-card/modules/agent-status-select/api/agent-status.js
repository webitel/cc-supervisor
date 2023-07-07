import { AgentServiceApiFactory } from 'webitel-sdk';
import configuration from '../../../../../../../app/api/utils/openAPIConfig';
import instance from '../../../../../../../app/api/old/instance';

const agentService = new AgentServiceApiFactory(configuration, '', instance);

export const patchAgentStatus = async ({ agentId, status, pauseCause }) => {
  try {
    const res = await agentService.updateAgentStatus(agentId, {
      status,
      id: agentId,
      payload: pauseCause,
    }, undefined);
    return { success: !!res };
  } catch (err) {
    throw err;
  }
};

export default {
  patch: patchAgentStatus,
};

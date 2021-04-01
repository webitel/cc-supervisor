import convertDuration from '@webitel/ui-sdk/src/scripts/convertDuration';
import { AgentServiceApiFactory } from 'webitel-sdk';
import configuration from '../../../../../app/api/utils/openAPIConfig';
import instance from '../../../../../app/api/instance';

const agentService = new AgentServiceApiFactory(configuration, '', instance);

const parseAgentList = (items) => items.map((item) => ({
  ...item,
  callTime: convertDuration(item.callTime),
  statusDuration: convertDuration(item.statusDuration),
  utilization: item.utilization ? `${item.utilization.toFixed(2)}%` : null,
  online: convertDuration(item.online),
  offline: convertDuration(item.offline),
  pause: convertDuration(item.pause),
  teams: item.teams,
  queues: item.queues,
}));

export const getAgent = async (id) => {
  try {
    const start = new Date().setHours(0, 0, 0, 0);
    const end = new Date().setHours(23, 59, 59, 999);
    const res = await agentService.searchAgentStatusStatistic(
      1,
      1,
      start, // time_from
      end, // time_to
      undefined,
      [id], // agent_id[]
      undefined, // status[]
      undefined,
      undefined,
      undefined,
      undefined,
      undefined, // domain_id
      undefined,
    );
    // return res.items && res.items.length ? parseAgentList(res.items)[0] : {};
    if (Array.isArray(res.items)) {
      return parseAgentList(res.items)
      .pop();
    }
    return {};
  } catch (err) {
    throw err;
  }
};

export const patchAgentStatus = async ({ agentId, status }) => {
  try {
    const res = await agentService.updateAgentStatus(agentId, {
      status,
      id: agentId,
    }, undefined);
    return { success: !!res };
  } catch (err) {
    throw err;
  }
};

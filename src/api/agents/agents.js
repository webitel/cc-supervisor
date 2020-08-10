import { AgentServiceApiFactory } from 'webitel-sdk';
import getTimeFromDuration from '@/utils/getTimeFromDuration';
import configuration from '../openAPIConfig';
import instance from '../instance';

const agentService = new AgentServiceApiFactory(configuration, '', instance);
export const agentFields = ['id', 'name'];

const parseAgentList = (items) => items.map((item) => ({
  ...item,
  callTime: getTimeFromDuration(+item.callTime),
  statusDuration: getTimeFromDuration(+item.statusDuration),
  utilization: item.utilization ? `${item.utilization.toFixed(2)}%` : null,
  online: getTimeFromDuration(+item.online) || '00:00:00',
  offline: getTimeFromDuration(+item.offline) || '00:00:00',
  pause: getTimeFromDuration(+item.pause) || '00:00:00',
  teams: item.teams,
  queues: item.queues,
}));

export const getAgentsList = async ({
                                      page = 0,
                                      size = 10,
                                      search = '',
                                      status,
                                      sort = '+name',
                                      queueIds,
                                      teamIds,
                                      callNow,
                                    }) => {
  try {
    // eslint-disable-next-line no-param-reassign
    if (search && search.slice(-1) !== '*') search += '*';
    const start = new Date().setHours(0, 0, 0, 0);
    const end = Date.now();
    const res = await agentService.searchAgentStatusStatistic(
      page,
      size,
      start, // time_from
      end, // time_to
      search,
      undefined, // agent_id[]
      status, // status[]
      queueIds,
      teamIds,
      undefined, // utilization_from
      undefined, // utilization_to
      callNow,
      sort,
      undefined, // domain_id
      undefined,
    );
    return {
      items: res.items ? parseAgentList(res.items) : [],
      next: !!res.next,
    };
  } catch (err) {
    throw err;
  }
};

export const getAgent = async (id) => {
  try {
    let start = new Date();
    const end = new Date(start).getTime();
    start.setHours(0, 0, 0, 0);
    start = start.getTime();
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

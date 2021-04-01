import { AgentServiceApiFactory } from 'webitel-sdk';
import convertDuration from '@webitel/ui-sdk/src/scripts/convertDuration';
import configuration from '../../../app/api/utils/openAPIConfig';
import instance from '../../../app/api/instance';

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

export const getAgentsList = async ({
                                      page = 0,
                                      size = 10,
                                      search = '',
                                      ids,
                                      status,
                                      sort = '+name',
                                      queue,
                                      team,
                                      callNow,
                                    }) => {
  try {
    // eslint-disable-next-line no-param-reassign
    if (search && search.slice(-1) !== '*') search += '*';
    const start = new Date().setHours(0, 0, 0, 0);
    const end = new Date().setHours(23, 59, 59, 999);
    const res = await agentService.searchAgentStatusStatistic(
      page,
      size,
      start, // time_from
      end, // time_to
      search,
      ids, // agent_id[]
      status, // status[]
      queue,
      team,
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

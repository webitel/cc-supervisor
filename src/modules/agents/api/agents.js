import convertDuration from '@webitel/ui-sdk/src/scripts/convertDuration';
import { AgentServiceApiFactory } from 'webitel-sdk';
import SdkListGetterApiConsumer
  from 'webitel-sdk/esm2015/api-consumers/ListGetter/sdk-list-getter-api-consumer/sdk-list-getter-api-consumer';
import instance from '../../../app/api/instance';
import configuration from '../../../app/api/utils/openAPIConfig';

const agentService = new AgentServiceApiFactory(configuration, '', instance);

const listResponseHandler = (response) => {
  const items = response.items.map((item) => ({
    ...item,
    statusDuration: convertDuration(item.statusDuration),
    utilization: `${item.utilization.toFixed(2)}%`,
    online: convertDuration(item.online),
    offline: convertDuration(item.offline),
    pause: convertDuration(item.pause),
    callTime: convertDuration(item.callTime),
    chatTime: convertDuration(item.callTime),
  }));
  return {
    ...response,
    items,
  };
};

const defaultListObject = {
  offline: 0,
  online: 0,
  pause: 0,
  statusDuration: 0,
  transferred: 0,
  abandoned: 0,
  utilization: 0,
};

const _getAgentsList = (getList) => function ({
                                                page = 0,
                                                size = 10,
                                                search = '',
                                                sort = '+name',
                                                ids,
                                                fields = [],
                                                from = new Date().setHours(0, 0, 0, 0),
                                                to = new Date().setHours(23, 59, 59, 999),
                                                status,
                                                queue,
                                                team,
                                                callNow,
                                              }) {
  const params = [page, size, search, sort, fields, ids, from, to, status, queue, team,
    undefined, undefined, callNow];
  return getList(params);
};

const listGetter = new SdkListGetterApiConsumer(agentService.searchAgentStatusStatistic,
  { listResponseHandler, defaultListObject })
.setGetListMethod(_getAgentsList);

export const getAgentsList = (params) => listGetter.getList(params);

export default {
  getList: getAgentsList,
};

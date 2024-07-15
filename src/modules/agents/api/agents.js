import convertDuration from '@webitel/ui-sdk/src/scripts/convertDuration';
import { AgentServiceApiFactory } from 'webitel-sdk';
import { getDefaultGetListResponse, getDefaultGetParams } from '@webitel/ui-sdk/src/api/defaults';
import applyTransform, {
  merge, mergeEach,
  notify,
  snakeToCamel
} from '@webitel/ui-sdk/src/api/transformers';
import instance from '../../../app/api/instance';
import configuration from '../../../app/api/utils/openAPIConfig';

const agentService = new AgentServiceApiFactory(configuration, '', instance);

const convertStatusDuration = (value) => {
  if (value > 60 * 60 * 24) return '>24:00:00';
  return convertDuration(value);
};

export const getAgentsList = async (params) => {
  const defaultParams = {
    search: '',
    sort: '+name',
    fields: [],
    from: new Date().setHours(0, 0, 0, 0),
    to: new Date().setHours(23, 59, 59, 999),
  };
  const defaultObject = {
    offline: 0,
    online: 0,
    pause: 0,
    statusDuration: 0,
    transferred: 0,
    missed: 0,
    utilization: 0,
    occupancy: 0,
  };

  const itemsHandler = (items) => items.map((item) => ({
      ...item,
      _isSelected: false,
      statusDuration: convertStatusDuration(item.statusDuration),
      utilization: `${item.utilization.toFixed(2)}%`,
      occupancy: `${item.occupancy.toFixed(2)}%`,
      online: convertDuration(item.online),
      offline: convertDuration(item.offline),
      pause: convertDuration(item.pause),
      callTime: convertDuration(item.callTime),
      chatTime: convertDuration(item.chatTime),
    }));

  const {
    page,
    size,
    search,
    sort,
    ids,
    fields,
    from,
    to,
    status,
    queue,
    team,
    skill,
    supervisor,
    auditor,
    region,
    utilization, // utilizationTo
    callNow,
  } = applyTransform(params, [
    merge(getDefaultGetParams()),
    merge(defaultParams)
  ]);

  const utilizationFrom = '0';

  try {
    const response = await agentService.searchAgentStatusStatistic(
      page,
      size,
      search,
      sort,
      fields,
      ids,
      from,
      to,
      status,
      queue,
      team,
      utilizationFrom,
      utilization,
      callNow,
      skill,
      region,
      supervisor,
      auditor,
    );
    const { items, next } = applyTransform(response.data, [
      snakeToCamel(),
      merge(getDefaultGetListResponse()),
    ]);
    return {
      items: applyTransform(items, [
        mergeEach(defaultObject),
        itemsHandler,
      ]),
      next,
    };
  } catch (err) {
    throw applyTransform(err, [
      notify,
    ]);
  }
};

export default {
  getList: getAgentsList,
};

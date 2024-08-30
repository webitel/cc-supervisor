import {
  getDefaultGetParams,
} from '@webitel/ui-sdk/src/api/defaults/index.js';
import applyTransform, {
  merge, notify, snakeToCamel,
  starToSearch,
} from '@webitel/ui-sdk/src/api/transformers/index.js';
import convertDuration from '@webitel/ui-sdk/src/scripts/convertDuration';
import { AgentServiceApiFactory } from 'webitel-sdk';
import instance from '../../../../../app/api/instance';
import configuration from '../../../../../app/api/utils/openAPIConfig';

const agentService = new AgentServiceApiFactory(configuration, '', instance);

const getAgent = async (params) => {
  const defaultParams = {
    from: new Date().setHours(0, 0, 0, 0),
    to: new Date().setHours(23, 59, 59, 999),
  };

  const defaultObject = {
    statusDuration: 0,
    online: 0,
    offline: 0,
    pause: 0,
  };

  const itemHandler = (item) => ({
    ...item,
    statusDuration: convertDuration(item.statusDuration),
    online: convertDuration(item.online),
    offline: convertDuration(item.offline),
    pause: convertDuration(item.pause),
  });

  const {
    itemId,
    from,
    to,
  } = applyTransform(params, [
    merge(getDefaultGetParams()),
    merge(defaultParams),
    starToSearch('search'),
  ]);

  try {
    const response = await agentService.searchAgentStatusStatisticItem(itemId, from, to);
    return applyTransform(response.data, [
      snakeToCamel(),
      merge(defaultObject),
      itemHandler,
    ]);
  } catch (err) {
    throw applyTransform(err, [
      notify,
    ]);
  }
};

export default {
  get: getAgent,
};

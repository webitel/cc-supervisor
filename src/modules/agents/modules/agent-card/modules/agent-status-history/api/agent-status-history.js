import {
  getDefaultGetListResponse,
  getDefaultGetParams,
} from '@webitel/ui-sdk/src/api/defaults/index.js';
import applyTransform, {
  merge,
  notify,
  snakeToCamel,
  starToSearch,
} from '@webitel/ui-sdk/src/api/transformers/index.js';
import convertDuration from '@webitel/ui-sdk/src/scripts/convertDuration';
import { formatDate } from '@webitel/ui-sdk/utils';
import { AgentServiceApiFactory } from 'webitel-sdk';

import instance from '../../../../../../../app/api/instance';
import configuration from '../../../../../../../app/api/utils/openAPIConfig';

const agentService = new AgentServiceApiFactory(configuration, '', instance);

export const getAgentHistoryList = async (params) => {
  const defaultParams = {
    sort: '-joined_at',
    from: new Date().setHours(0, 0, 0),
    to: new Date().setHours(23, 59, 59, 999),
  };

  const listHandler = (items) =>
    items.map((item) => ({
      ...item,
      from: formatDate(+item.joinedAt, 'datetime'),
      to: item.duration
        ? formatDate(+item.joinedAt + item.duration * 1000, 'datetime')
        : null,
      duration: convertDuration(item.duration),
    }));

  const {
    page,
    size,
    sort,
    from,
    to,
    agentId,
  } = applyTransform(params, [
    merge(getDefaultGetParams()),
    merge(defaultParams),
    starToSearch('search'),
  ]);

  try {
    const response = await agentService.searchAgentStateHistory(
      page,
      size,
      from,
      to,
      agentId,
      sort,
    );
    const { items, next } = applyTransform(response.data, [
      snakeToCamel(),
      merge(getDefaultGetListResponse()),
    ]);
    return {
      items: applyTransform(items, [
        listHandler,
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
  getList: getAgentHistoryList,
};

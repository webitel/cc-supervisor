import convertDuration from '@webitel/ui-sdk/src/scripts/convertDuration';
import { AgentServiceApiFactory } from 'webitel-sdk';
import instance from '../../../../../../../app/api/instance';
import configuration from '../../../../../../../app/api/utils/openAPIConfig';
import applyTransform, {
  merge, mergeEach, notify,
  snakeToCamel,
  starToSearch
} from "@webitel/ui-sdk/src/api/transformers";
import { getDefaultGetListResponse, getDefaultGetParams } from "@webitel/ui-sdk/src/api/defaults";

const agentService = new AgentServiceApiFactory(configuration, '', instance);

export const getAgentHistoryList = async (params) => {

  const defaultObject = {
    sort: '-joined_at',
    from: new Date().setHours(0, 0, 0),
    to: new Date().setHours(23, 59, 59, 999),
  };

  const listHandler = (items) => {
    return items.map((item) => ({
      ...item,
      from: new Date(+item.joinedAt).toLocaleString(),
      to: item.duration ? new Date(+item.joinedAt + item.duration * 1000).toLocaleString() : null,
      duration: convertDuration(item.duration),
    }));
  };

  const {
    page,
    size,
    sort,
    from,
    to,
    agentId,
  } = applyTransform(params, [
    merge(getDefaultGetParams()),
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
        mergeEach(defaultObject),
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

import convertDuration from '@webitel/ui-sdk/src/scripts/convertDuration';
import { CallServiceApiFactory } from 'webitel-sdk';
import { getDefaultGetListResponse, getDefaultGetParams } from '@webitel/ui-sdk/src/api/defaults';
import applyTransform, {
  merge, notify,
  snakeToCamel,
  starToSearch,
} from '@webitel/ui-sdk/src/api/transformers';
import instance from '../../../../../../../app/api/instance';
import configuration from '../../../../../../../app/api/utils/openAPIConfig';

const callService = new CallServiceApiFactory(configuration, '', instance);

const calcTime = (time) => (time ? new Date(+time).toLocaleTimeString() : null);
const calcDuration = (duration) => (duration ? convertDuration(duration) : null);

export const getAgentCallsList = async (params) => {
  const defaultParams = {
    search: '',
    sort: '-created_at',
    fields: [],
    from: new Date().setHours(0, 0, 0, 0),
    to: new Date().setHours(23, 59, 59, 999),
  };
  const listHandler = (items) => items.map((item) => ({
      ...item,
      createdAt: item.createdAt ? new Date(+item.createdAt).toLocaleString() : null,
      answeredAt: calcTime(item.answeredAt),
      bridgedAt: calcTime(item.bridgedAt),
      queueBridgedAt: calcTime(item.queueBridgedAt),
      joinedAt: calcTime(item.joinedAt),
      leavingAt: calcTime(item.leavingAt),
      hangupAt: calcTime(item.hangupAt),
      reportingAt: calcTime(item.reportingAt),
      duration: calcDuration(item.duration),
      holdSec: calcDuration(item.holdSec),
      waitSec: calcDuration(item.waitSec),
      billSec: calcDuration(item.billSec),
      reportingSec: calcDuration(item.reportingSec),
      queueWaitSec: calcDuration(item.queueWaitSec),
      queueDurationSec: calcDuration(item.queueDurationSec),
      scoreRequired: item.scoreRequired ? (+item.scoreRequired).toFixed(2) : null,
    }));
  console.log('params:', params);
  const {
    page,
    size,
    search,
    agentId,
    userId,
    rated,
    ratedBy,
    sort,
    fields,
    from,
    to,
  } = applyTransform(params, [
    merge(getDefaultGetParams()),
    merge(defaultParams),
    starToSearch('search'),
  ]);

  try {
    const response = await callService.searchHistoryCall(
      page, size, search, sort, fields.concat(['id', 'files']), from, to, undefined, agentId,
      undefined, undefined, undefined, undefined,
      undefined, undefined, undefined, undefined,
      undefined, undefined, undefined, undefined,
      undefined, undefined, undefined, undefined,
      undefined, undefined, undefined, undefined,
      undefined, undefined, undefined, undefined,
      undefined, undefined, undefined, undefined,
      userId, undefined, undefined, undefined,
      undefined, rated, ratedBy,
    );
    const { items, next } = applyTransform(response.data, [
      snakeToCamel(),
      merge(getDefaultGetListResponse()),
    ]);
    console.log('items:', items);
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
  getList: getAgentCallsList,
};

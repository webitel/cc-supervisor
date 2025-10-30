import { getCallService } from '@webitel/api-services/gen';
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

const calcTime = (time) => (time ? new Date(+time).toLocaleTimeString() : null);
const calcDuration = (duration) => (duration ? convertDuration(duration) : null);

const listHandler = (items) =>
  items.map((item) => ({
    ...item,
    createdAt: item.createdAt
      ? new Date(+item.createdAt).toLocaleString()
      : null,
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
    scoreRequired: item.scoreRequired
      ? (+item.scoreRequired).toFixed(2)
      : null,
  }));

const getAgentCallsList = async ({ options, ...params }) => {
  const defaultParams = {
    search: '',
    sort: '-created_at',
    fields: [],
    from: new Date().setHours(0, 0, 0, 0),
    to: new Date().setHours(23, 59, 59, 999),
  };

  const normalized = applyTransform(params, [
    merge(getDefaultGetParams()),
    merge(defaultParams),
    starToSearch('search'),
  ]);

  const {
    page,
    size,
    search,
    sort,
    fields,
    from,
    to,
    agentId,
    userId,
    rated,
    ratedBy,
    direction,
    directions,
    hasFile,
    hasTranscript,
    queueId,
    teamId,
    contactId,
    domainId,
    ownerId,
    gatewayId,
    number,
    missed,
  } = normalized;

  const createdAt = from || to
    ? {
      from,
      to,
    }
    : undefined

  const postBody = {
    page,
    size,
    sort,
    q: search || undefined,
    createdAt,
    fields: (fields || []).concat(['id', 'files']),
    agentId,
    userId,
    queueId,
    teamId,
    contactId,
    ownerId,
    gatewayId,
    direction,
    directions,
    hasFile,
    hasTranscript,
    number,
    missed,
    rated,
    ratedBy,
    domainId,
  };

  try {
    const response = await getCallService().searchHistoryCallPost(
      applyTransform(postBody, []),
      options,
    );

    const { items, next } = applyTransform(response.data, [
      snakeToCamel(),
      merge(getDefaultGetListResponse()),
    ]);

    return {
      items: applyTransform(items, [listHandler]),
      next,
    };
  } catch (err) {
    throw applyTransform(err, [notify]);
  }
};

const getAgentCallsLookup = (params) =>
  getAgentCallsList({
    ...params,
    fields:
      params?.fields ||
      ['id', 'destination', 'state', 'created_at', 'files'],
    size: params?.size ?? 20,
  });

export const AgentCallsAPI = {
  getList: getAgentCallsList,
  getLookup: getAgentCallsLookup,
};

export default AgentCallsAPI;

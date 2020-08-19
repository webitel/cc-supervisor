import { CallServiceApiFactory } from 'webitel-sdk';
import convertDuration from '@webitel/ui-sdk/src/scripts/convertDuration';
import configuration from '../utils/openAPIConfig';
import instance from '../instance';

const callService = new CallServiceApiFactory(configuration, '', instance);
export const activeCallFields = [
  'id', 'created_at', 'direction', 'duration', 'from', 'agent', 'to',
  'destination', 'extension', 'queue', 'state', 'user', 'variables',
];

const parseActiveCallsList = (items) => items.map((item) => ({
  ...item,
  duration: convertDuration(item.duration),
  createdAt: new Date(+item.createdAt).toLocaleTimeString()
  .slice(0, 8),
}));

export const getActiveCallList = async ({
                                          page = 1,
                                          size = 10,
                                          search = '',
                                          queueIds,
                                          teamIds,
                                          agentIds,
                                          sort,
                                          direction,
                                          userIds,
                                          gatewayIds,
                                        }) => {
  try {
    // eslint-disable-next-line no-param-reassign
    if (search && search.slice(-1) !== '*') search += '*';
    const start = new Date().setHours(0, 0, 0, 0);
    const end = new Date().setHours(23, 59, 59, 999);
    const res = await callService.searchActiveCall(
      page, // page
      size, // size
      start, // created_at_from
      end, // created_at_to
      userIds, // user_id
      agentIds, // agent_id
      queueIds, // queue_id
      teamIds, // team_id
      undefined, // member_id
      gatewayIds, // gateway_id
      search, // q
      undefined, // duration_from
      undefined, // duration_to
      true, // skip_parent
      undefined, // parent_id
      undefined, // cause
      undefined, // exists_file
      activeCallFields, // fields
      sort, // sort
      undefined, // domain_id
      undefined, // number
      direction, // direction
      undefined, // answered_at_from
      undefined, // answered_at_to
      undefined, // missed
      undefined, // stored_at_from
      undefined, // stored_at_to
      undefined, // options
    );
    return {
      items: res.items ? parseActiveCallsList(res.items) : [],
      next: !!res.next,
    };
  } catch (err) {
    throw err;
  }
};

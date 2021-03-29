import { CallServiceApiFactory } from 'webitel-sdk';
import convertDuration from '@webitel/ui-sdk/src/scripts/convertDuration';
import configuration from '../../../app/api/utils/openAPIConfig';
import instance from '../../../app/api/instance';

const callService = new CallServiceApiFactory(configuration, '', instance);
export const fields = [
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
                                          queue,
                                          team,
                                          agent,
                                          sort,
                                          direction,
                                          user,
                                          gateway,
                                        }) => {
  try {
    // eslint-disable-next-line no-param-reassign
    if (search && search.slice(-1) !== '*') search += '*';
    const start = new Date().setHours(0, 0, 0, 0);
    const end = new Date().setHours(23, 59, 59, 999);
    const res = await callService.searchActiveCall(
      page, // page
      size, // size
      search,
      sort,
      fields,
      start, // created_at_from
      end, // created_at_to
      user, // user_id
      agent, // agent_id
      queue, // queue_id
      team, // team_id
      undefined, // member_id
      gateway, // gateway_id
      undefined, // duration_from
      undefined, // duration_to
      undefined, // skip_parent
      undefined, // parent_id
      undefined, // cause
      undefined, // exists_file
      undefined, // fields
      undefined, // sort
      direction, // domain_id
      undefined, // number
      undefined, // direction
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

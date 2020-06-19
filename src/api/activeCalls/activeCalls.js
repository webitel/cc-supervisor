import { CallServiceApiFactory } from 'webitel-sdk';
import configuration from '../openAPIConfig';
import instance from '../instance';

const callService = new CallServiceApiFactory(configuration, '', instance);
export const activeCallFields = ['id', 'name'];

export const getActiveCallList = async ({
    page = 0, size = 20, search = '', queueIds, teamIds, agentIds, sort,
}) => {
    try {
        // eslint-disable-next-line no-param-reassign
        if (search && search.slice(-1) !== '*') search += '*';
        const res = await callService.searchActiveCall(
            page, // page
            size, // size
            undefined, // created_at_from
            undefined, // created_at_to
            undefined, // user_id
            agentIds, // agent_id
            queueIds, // queue_id
            teamIds, // team_id
            undefined, // member_id
            undefined, // gateway_id
            search, // q
            undefined, // duration_from
            undefined, // duration_to
            undefined, // skip_parent
            undefined, // parent_id
            undefined, // cause
            undefined, // exists_file
            undefined, // fields
            sort, // sort
            undefined, // domain_id
            undefined, // number
            undefined, // direction
            undefined, // answered_at_from
            undefined, // answered_at_to
            undefined, // missed
            undefined, // stored_at_from
            undefined, // stored_at_to
            undefined, // options
            );
        return { items: res.items || [], next: res.next };
    } catch (err) {
        throw err;
    }
};

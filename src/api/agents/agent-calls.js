import { CallServiceApiFactory } from 'webitel-sdk';
import configuration from '../openAPIConfig';
import instance from '../instance';

const callService = new CallServiceApiFactory(configuration, '', instance);
export const agentCallFields = ['id', 'from', 'direction', 'bill_sec', 'hold_sec', 'answered_at', 'created_at'];

export const getAgentCallsList = async ({
    page = 0, size = 10, search = '', agentId, sort = '-created_at',
}) => {
    try {
        // eslint-disable-next-line no-param-reassign
        if (search && search.slice(-1) !== '*') search += '*';
        let start = new Date();
        const end = new Date(start).getTime();
        start.setHours(0, 0, 0, 0);
        start = start.getTime();
        const res = await callService.searchHistoryCall(
            page, // page
            size, // size
            start, // created_at_from
            end, // created_at_to
            undefined, // user_id
            agentId, // agent_id
            undefined, // queue_id
            undefined, // team_id
            undefined, // member_id
            undefined, // gateway_id
            search, // q
            undefined, // duration_from
            undefined, // duration_to
            undefined, // skip_parent
            undefined, // parent_id
            undefined, // cause
            undefined, // exists_file
            agentCallFields, // fields
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
    // return [
    //     {
    //         direction: 'outbound',
    //         call: 'Active',
    //         talk: '00:06:21',
    //         hold: '00:01:54',
    //         client: 'Oleg Marchenko',
    //         phone_number: '+38 (098) 231-12-22',
    //         rating: 1,
    //         notes: 'Watch',
    //     },
    //     {
    //         direction: 'inbound',
    //         call: 'End',
    //         talk: '00:06:21',
    //         hold: '00:01:54',
    //         client: 'Oleg Marchenko',
    //         phone_number: '+38 (098) 231-12-22',
    //         rating: 5,
    //         notes: 'Watch',
    //     },
    //     {
    //         direction: 'disconnect',
    //         call: 'Disconnect',
    //         // talk: '00:06:21',
    //         // hold: '00:01:54',
    //         client: 'Oleg Marchenko',
    //         phone_number: '+38 (098) 231-12-22',
    //         rating: 0,
    //         notes: 'Watch',
    //     },
    //     {
    //         direction: 'outbound',
    //         call: 'End',
    //         talk: '00:21:21',
    //         hold: '00:01:54',
    //         client: 'Oleg Marchenko',
    //         phone_number: '+38 (098) 231-12-22',
    //         rating: 3,
    //         notes: 'Watch',
    //     },
    //     {
    //         direction: 'outbound',
    //         call: 'End',
    //         talk: '00:06:21',
    //         // hold: '00:01:54',
    //         client: 'Oleg Marchenko',
    //         phone_number: '+38 (098) 231-12-22',
    //         rating: 2,
    //         notes: 'Watch',
    //     },
    //     {
    //         direction: 'inbound',
    //         call: 'End',
    //         talk: '00:06:21',
    //         hold: '00:01:54',
    //         client: 'Oleg Marchenko',
    //         phone_number: '+38 (098) 231-12-22',
    //         rating: 4,
    //         notes: 'Watch',
    //     },
    //     {
    //         direction: 'disconnect',
    //         call: 'Disconnect',
    //         // talk: '00:06:21',
    //         // hold: '00:01:54',
    //         client: 'Oleg Marchenko',
    //         phone_number: '+38 (098) 231-12-22',
    //         rating: 0,
    //         notes: 'Watch',
    //     },
    // ];
};

// export const getAgentCallsList = async ({
//     // eslint-disable-next-line no-unused-vars
//     id, page = 0, size = 10, search = '', sort = '+name',
// }) => {
//     try {
//         return { items: getCallList(), next: false };
//     } catch (err) {
//         throw err;
//     }
// };

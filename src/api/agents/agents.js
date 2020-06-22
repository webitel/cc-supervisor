import { AgentServiceApiFactory } from 'webitel-sdk';
import getTimeFromDuration from '@/utils/getTimeFromDuration';
import configuration from '../openAPIConfig';
import instance from '../instance';

const agentService = new AgentServiceApiFactory(configuration, '', instance);
export const agentFields = ['id', 'name'];

const parseAgentList = (items) => {
    items.forEach((element) => {
        Object.assign(element, {
            callTime: getTimeFromDuration(+element.callTime),
            statusDuration: getTimeFromDuration(+element.statusDuration),
            utilization: element.utilization ? `${element.utilization.toFixed(2)}%` : null,
            online: getTimeFromDuration(+element.online) || '00:00:00',
            offline: getTimeFromDuration(+element.offline) || '00:00:00',
            pause: getTimeFromDuration(+element.pause) || '00:00:00',
            teams: element.teams || [],
        });
    });
    return items;
};

export const getAgentsList = async ({
    page = 0, size = 20, search = '', status, sort = '+name',
}) => {
    try {
        // eslint-disable-next-line no-param-reassign
        if (search && search.slice(-1) !== '*') search += '*';
        let start = new Date();
        const end = new Date(start).getTime();
        start.setHours(0, 0, 0, 0);
        start = start.getTime();
        const res = await agentService.searchAgentStatusStatistic(
            page,
            size,
            start, // time_from
            end, // time_to
            undefined, // agent_id[]
            status, // status[]
            sort,
            undefined, // domain_id
            undefined,
            );
        return { items: res.items ? parseAgentList(res.items) : [], next: res.next };
    } catch (err) {
        throw err;
    }
};

export const getAgent = async (id) => {
    try {
        let start = new Date();
        const end = new Date(start).getTime();
        start.setHours(0, 0, 0, 0);
        start = start.getTime();
        const res = await agentService.searchAgentStatusStatistic(
            1,
            1,
            start, // time_from
            end, // time_to
            [id], // agent_id[]
            undefined, // status[]
            undefined,
            undefined, // domain_id
            undefined,
            );
        return res.items && res.items.length ? parseAgentList(res.items)[0] : {};
    } catch (err) {
        throw err;
    }
};

export const patchAgentStatus = async ({ agentId, status }) => {
    try {
        const res = await agentService.updateAgentStatus(agentId, { status, id: agentId }, undefined);
        return { success: !!res };
    } catch (err) {
        throw err;
    }
};

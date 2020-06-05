import { AgentServiceApiFactory } from 'webitel-sdk';
import configuration from '../openAPIConfig';
import instance from '../instance';

const agentService = new AgentServiceApiFactory(configuration, '', instance);
export const agentFields = ['id', 'name'];

const parseAgentList = (items) => {
    items.forEach((element, index) => {
        Object.assign(element, {
            call: `00:${(`0${Math.floor(Math.random() * 10)}`).slice(-2)}:${(`0${Math.floor(Math.random() * 60)}`).slice(-2)}`,
            chat: `00:${(`0${Math.floor(Math.random() * 10)}`).slice(-2)}:${(`0${Math.floor(Math.random() * 60)}`).slice(-2)}`,
            utilization: Math.random().toFixed(2),
            teams: [{ id: '1', name: 'dev' }],
            queues: [{ id: '6', name: 'inbound-dev' }, { id: '7', name: 'preview-dev' }],
            status: { time: `00:${(`0${Math.floor(Math.random() * 10)}`).slice(-2)}:${(`0${Math.floor(Math.random() * 60)}`).slice(-2)}`, status: 'online' },
            attentions: { type: index === 1 ? 'error' : 'warning', count: 2 },
        });
    });
    return items;
};

const getAgentMock = (id) => ({
        id,
        name: 'Milla Ozercova',
        phone_number: '+38 098 876-45-21',
        status: { time: `00:${(`0${Math.floor(Math.random() * 10)}`).slice(-2)}:${(`0${Math.floor(Math.random() * 60)}`).slice(-2)}`, status: 'online' },
        offline_time: '00:54:39',
        waiting_time: '00:00:23',
        online_time: '00:32:21',
        teams: [{ id: '1', name: 'dev' }],
        attentions: { type: 'error', count: 2 },
    });

export const getAgentsList = async ({
    page = 0, size = 20, search = '', ids, sort = '+name',
}) => {
    try {
        // eslint-disable-next-line no-param-reassign
        if (search && search.slice(-1) !== '*') search += '*';
        const res = await agentService.searchAgent(page, size, search, undefined, undefined, sort, ids);
        return { items: parseAgentList(res.items), next: res.next };
    } catch (err) {
        throw err;
    }
};

export const getAgent = async (id) => {
    try {
        return getAgentMock(id);
    } catch (err) {
        throw err;
    }
};

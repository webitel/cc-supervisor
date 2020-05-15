import { AgentServiceApiFactory } from 'webitel-sdk';
import configuration from '../openAPIConfig';
import instance from '../instance';

const agentService = new AgentServiceApiFactory(configuration, '', instance);
export const agentFields = ['id', 'name'];

// eslint-disable-next-line arrow-body-style
const parseAgentList = (items) => {
    items.forEach((element) => {
        Object.assign(element, {
            call: `00:${(`0${Math.floor(Math.random() * 10)}`).slice(-2)}:${(`0${Math.floor(Math.random() * 60)}`).slice(-2)}`,
            chat: `00:${(`0${Math.floor(Math.random() * 10)}`).slice(-2)}:${(`0${Math.floor(Math.random() * 60)}`).slice(-2)}`,
            utilization: Math.random().toFixed(2),
            teams: [{ id: '1', name: 'dev' }],
            queues: [{ id: '6', name: 'inbound-dev' }, { id: '7', name: 'preview-dev' }],
            status: { time: `00:${(`0${Math.floor(Math.random() * 10)}`).slice(-2)}:${(`0${Math.floor(Math.random() * 60)}`).slice(-2)}`, status: 'online' },
            attentions: [{ type: 'warning', count: 2 }],
        });
    });
    return items;
};

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

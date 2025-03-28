export const agentAttentionFields = ['id', 'name'];

 
const getAttentionList = () => {
    return [
        {
            id: 1,
            priority: 'error',
            client: 'Petr Mamonov',
            type: 'call',
            subject: 'AvtoCrash',
            time: '00:07:23',
        },
        {
            id: 2,
            priority: 'warning',
            client: 'Marina Ostrovcher',
            type: 'chat',
            subject: 'New registration',
            time: '00:02:17',
        },
        {
            id: 3,
            priority: 'warning',
            client: 'Alex Maximov',
            type: 'chat',
            subject: 'Animal',
            time: '00:07:23',
        },
    ];
};

export const getAgentAttentionsList = async ({
     
    id, page = 0, size = 20, search = '', sort = '+name',
}) => {
    try {
        return { items: getAttentionList(), next: false };
    } catch (err) {
        throw err;
    }
};

export const deleteAgentAttention = async ({
     
    agentId, attentionId,
 
}) => {
    // try {
        return { success: true };
    // } catch (err) {
    //     throw err;
    // }
};

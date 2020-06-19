export const agentCallFields = ['id', 'name'];

// eslint-disable-next-line arrow-body-style
const getCallList = () => {
    return [
        {
            direction: 'outbound',
            call: 'Active',
            talk: '00:06:21',
            hold: '00:01:54',
            client: 'Oleg Marchenko',
            phone_number: '+38 (098) 231-12-22',
            rating: 1,
            notes: 'Watch',
        },
        {
            direction: 'inbound',
            call: 'End',
            talk: '00:06:21',
            hold: '00:01:54',
            client: 'Oleg Marchenko',
            phone_number: '+38 (098) 231-12-22',
            rating: 5,
            notes: 'Watch',
        },
        {
            direction: 'disconnect',
            call: 'Disconnect',
            // talk: '00:06:21',
            // hold: '00:01:54',
            client: 'Oleg Marchenko',
            phone_number: '+38 (098) 231-12-22',
            rating: 0,
            notes: 'Watch',
        },
        {
            direction: 'outbound',
            call: 'End',
            talk: '00:21:21',
            hold: '00:01:54',
            client: 'Oleg Marchenko',
            phone_number: '+38 (098) 231-12-22',
            rating: 3,
            notes: 'Watch',
        },
        {
            direction: 'outbound',
            call: 'End',
            talk: '00:06:21',
            // hold: '00:01:54',
            client: 'Oleg Marchenko',
            phone_number: '+38 (098) 231-12-22',
            rating: 2,
            notes: 'Watch',
        },
        {
            direction: 'inbound',
            call: 'End',
            talk: '00:06:21',
            hold: '00:01:54',
            client: 'Oleg Marchenko',
            phone_number: '+38 (098) 231-12-22',
            rating: 4,
            notes: 'Watch',
        },
        {
            direction: 'disconnect',
            call: 'Disconnect',
            // talk: '00:06:21',
            // hold: '00:01:54',
            client: 'Oleg Marchenko',
            phone_number: '+38 (098) 231-12-22',
            rating: 0,
            notes: 'Watch',
        },
    ];
};

export const getAgentCallsList = async ({
    // eslint-disable-next-line no-unused-vars
    id, page = 0, size = 20, search = '', sort = '+name',
}) => {
    try {
        return { items: getCallList(), next: false };
    } catch (err) {
        throw err;
    }
};

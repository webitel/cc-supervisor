export const agentChatFields = ['id', 'name'];

 
const getChatList = () => {
    return [
        {
            chat: 'telegram',
            start_end_time: '13:00:23 - Now',
            // end: null,
            time: '00:06:21',
            client: 'Oleg Marchenko',
            subject: 'blablabla',
            rating: 3,
            notes: 'Watch',
        },
        {
            chat: 'viber',
            start_end_time: '13:00:23 - 13:10:23',
            time: '00:06:21',
            client: 'Oleg Marchenko',
            subject: 'blablabla',
            rating: 3,
            notes: 'Watch',
        },
        {
            chat: 'telegram',
            start_end_time: '13:00:23',
            time: null,
            client: 'Oleg Marchenko',
            subject: 'blablabla',
            rating: 3,
            notes: 'Watch',
        },
        {
            chat: 'viber',
            start_end_time: '13:00:23 - 13:10:23',
            time: '00:26:21',
            client: 'Oleg Marchenko',
            subject: 'blablabla',
            rating: 3,
            notes: 'Watch',
        },
        {
            chat: 'telegram',
            start_end_time: '13:00:23 - 13:10:23',
            time: '00:06:21',
            client: 'Oleg Marchenko',
            subject: 'blablabla',
            rating: 3,
            notes: 'Watch',
        },
        {
            chat: 'telegram',
            start_end_time: '13:00:23 - 13:10:23',
            time: '00:06:21',
            client: 'Oleg Marchenko',
            subject: 'blablabla',
            rating: 3,
            notes: 'Watch',
        },
        {
            chat: 'viber',
            start_end_time: '13:00:23 - 13:10:23',
            time: '00:06:21',
            client: 'Oleg Marchenko',
            subject: 'blablabla',
            rating: 3,
            notes: 'Watch',
        },
    ];
};

export const getAgentChatsList = async ({
     
    id, page = 0, size = 20, search = '', sort = '+name',
}) => {
    try {
        return { items: getChatList(), next: false };
    } catch (err) {
        throw err;
    }
};

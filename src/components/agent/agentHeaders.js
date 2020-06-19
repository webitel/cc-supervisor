import i18n from '@/locale/i18n';

export default [
    {
      text: i18n.t('pages.agent.columns.name'),
      value: 'name',
      show: true,
      sort: null,
      width: 'minmax(220px, 1fr)',
    },
    {
      text: i18n.t('pages.agent.columns.status'),
      value: 'status',
      show: true,
      sort: null,
      width: 'minmax(126px, 1fr)',
    },
    {
      text: i18n.t('pages.agent.columns.teams'),
      value: 'teams',
      show: true,
      sort: null,
      width: 'minmax(170px, 1fr)',
    },
    {
      text: i18n.t('pages.agent.columns.queues'),
      value: 'queues',
      show: true,
      sort: null,
      width: 'minmax(170px, 1fr)',
    },
    {
      text: i18n.t('pages.agent.columns.utilization'),
      value: 'utilization',
      show: true,
      sort: null,
      width: 'minmax(80px, 1fr)',
    },
    // {
    //   text: 'Chat',
    //   value: 'chat',
    //   show: true,
    //   sort: null,
    //   width: 'minmax(60px, 1fr)',
    // },
    {
      text: i18n.t('pages.agent.columns.call'),
      value: 'call',
      show: true,
      sort: null,
      width: 'minmax(60px, 1fr)',
    },
    // {
    //   text: 'Attention',
    //   value: 'attentions',
    //   show: true,
    //   sort: null,
    //   width: 'minmax(120px, 1fr)',
    // },
  ];

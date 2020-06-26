import i18n from '@/locale/i18n';

export default [
    {
      text: () => '',
      value: 'direction',
      show: true,
      sort: null,
      width: 'minmax(15px, 30px)',
    },
    {
      text: () => i18n.t('pages.agentItem.calls.columns.call'),
      value: 'call',
      show: true,
      sort: null,
      width: 'minmax(100px, 1fr)',
    },
    {
      text: () => i18n.t('pages.agentItem.calls.columns.talk'),
      value: 'billSec',
      show: true,
      sort: null,
      width: 'minmax(66px, 1fr)',
    },
    {
      text: () => i18n.t('pages.agentItem.calls.columns.hold'),
      value: 'holdSec',
      show: true,
      sort: null,
      width: 'minmax(60px, 1fr)',
    },
    {
      text: () => i18n.t('pages.agentItem.calls.columns.client'),
      value: 'client',
      show: true,
      sort: null,
      width: 'minmax(120px, 1fr)',
    },
    {
      text: () => i18n.t('pages.agentItem.calls.columns.number'),
      value: 'phoneNumber',
      show: true,
      sort: null,
      width: 'minmax(80px, 1fr)',
    },
    // {
    //     text: i18n.t('pages.agentItem.calls.columns.rating'),
    //     value: 'rating',
    //     show: true,
    //     sort: null,
    //     width: 'minmax(150px, 1fr)',
    //   },
    // {
    //   text: 'Notes',
    //   value: 'notes',
    //   show: true,
    //   sort: null,
    //   width: 'minmax(60px, 1fr)',
    // },
  ];

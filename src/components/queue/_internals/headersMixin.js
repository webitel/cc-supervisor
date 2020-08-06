export default {
  computed: {
    headers() {
      return [
        {
          text: this.$t('pages.queue.columns.name'),
          value: 'queue',
          show: true,
          sort: null,
          // width: 'minmax(200px, 1fr)',
        },
        {
          text: this.$t('pages.queue.columns.agents'),
          value: 'agents',
          show: true,
          sort: null,
          // width: 'minmax(100px, 1fr)',
        },
        {
          text: this.$t('pages.queue.columns.team'),
          value: 'team',
          show: true,
          sort: null,
          // width: 'minmax(100px, 1fr)',
        },
        {
          text: this.$t('pages.queue.columns.members'),
          value: 'members',
          show: true,
          sort: null,
          // width: 'minmax(140px, 1fr)',
        },
        {
          text: this.$t('pages.queue.columns.count'),
          value: 'count',
          show: true,
          sort: null,
          // width: 'minmax(60px, 1fr)',
        },
        {
          text: this.$t('pages.queue.columns.answer'),
          value: 'bridged',
          show: false,
          sort: null,
          // width: 'minmax(80px, 1fr)',
        },
        {
          text: this.$t('pages.queue.columns.abandoned'),
          value: 'abandoned',
          show: false,
          sort: null,
          // width: 'minmax(80px, 1fr)',
        },
        {
          text: this.$t('pages.queue.columns.talk'),
          value: 'sumBillSec',
          show: false,
          sort: null,
          // width: 'minmax(50px, 1fr)',
        },
        {
          text: this.$t('pages.queue.columns.wrapUpTime'),
          value: 'avgWrapSec',
          show: false,
          sort: null,
          // width: 'minmax(100px, 1fr)',
        },
        {
          text: this.$t('pages.queue.columns.asa'),
          value: 'avgAsaSec',
          show: false,
          sort: null,
          // width: 'minmax(50px, 1fr)',
        },
        {
          text: this.$t('pages.queue.columns.awt'),
          value: 'avgAwtSec',
          show: false,
          sort: null,
          // width: 'minmax(50px, 1fr)',
        },
        {
          text: this.$t('pages.queue.columns.aht'),
          value: 'avgAhtSec',
          show: false,
          sort: null,
          // width: 'minmax(50px, 1fr)',
        },
      ];
    },
  },
};

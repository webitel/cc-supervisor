export default {
  data: () => ({
    headersProperties: [
      {
        // text: this.$t('pages.queue.columns.queue'),
        value: 'queue',
        show: true,
        sort: null,
        // width: 'minmax(200px, 1fr)',
      }, {
        // text: this.$t('pages.queue.columns.agents'),
        value: 'agents',
        show: true,
        sort: null,
        // width: 'minmax(100px, 1fr)',
      }, {
        // text: this.$t('pages.queue.columns.team'),
        value: 'team',
        show: true,
        sort: null,
        // width: 'minmax(100px, 1fr)',
      }, {
        // text: this.$t('pages.queue.columns.members'),
        value: 'members',
        show: true,
        sort: null,
        // width: 'minmax(140px, 1fr)',
      }, {
        // text: this.$t('pages.queue.columns.count'),
        value: 'count',
        show: true,
        sort: null,
        // width: 'minmax(60px, 1fr)',
      }, {
        // text: this.$t('pages.queue.columns.bridged'),
        value: 'bridged',
        show: false,
        sort: null,
        // width: 'minmax(80px, 1fr)',
      }, {
        // text: this.$t('pages.queue.columns.abandoned'),
        value: 'abandoned',
        show: false,
        sort: null,
        // width: 'minmax(80px, 1fr)',
      }, {
        // text: this.$t('pages.queue.columns.sumBillSec'),
        value: 'sumBillSec',
        show: false,
        sort: null,
        // width: 'minmax(50px, 1fr)',
      }, {
        // text: this.$t('pages.queue.columns.avgWrapSec'),
        value: 'avgWrapSec',
        show: false,
        sort: null,
        // width: 'minmax(100px, 1fr)',
      }, {
        // text: this.$t('pages.queue.columns.avgAsaSec'),
        value: 'avgAsaSec',
        show: false,
        sort: null,
        // width: 'minmax(50px, 1fr)',
      }, {
        // text: this.$t('pages.queue.columns.avgAwtSec'),
        value: 'avgAwtSec',
        show: false,
        sort: null,
        // width: 'minmax(50px, 1fr)',
      }, {
        // text: this.$t('pages.queue.columns.avgAhtSec'),
        value: 'avgAhtSec',
        show: false,
        sort: null,
        // width: 'minmax(50px, 1fr)',
      },
    ],
  }),
  computed: {
    headers: {
      get() {
        return this.headersProperties.map((header) => ({
          ...header,
          text: this.$t(`pages.queue.columns.${header.value}`),
        }));
      },
      set(value) {
        this.headersProperties = value;
      },
    },
  },
};

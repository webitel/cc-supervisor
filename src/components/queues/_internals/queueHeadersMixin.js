export default {
  data: () => ({
    headersProperties: [
      {
        value: 'queue',
        show: true,
        sort: null,
        field: 'queue',
      }, {
        value: 'agents',
        show: true,
        sort: null,
        field: 'online',
      }, {
        value: 'team',
        show: true,
        sort: null,
        field: 'team',
      }, {
        value: 'members',
        show: true,
        sort: null,
        field: 'waiting',
      }, {
        value: 'count',
        show: true,
        sort: null,
        field: 'count',
      }, {
        value: 'bridged',
        show: false,
        sort: null,
        field: 'bridged',
      }, {
        value: 'abandoned',
        show: false,
        sort: null,
        field: 'abandoned',
      }, {
        value: 'sumBillSec',
        show: false,
        sort: null,
        field: 'sum_bill_sec',
      }, {
        value: 'avgWrapSec',
        show: false,
        sort: null,
        field: 'avg_wrap_sec',
      }, {
        value: 'avgAsaSec',
        show: false,
        sort: null,
        field: 'avg_asa_sec',
      }, {
        value: 'avgAwtSec',
        show: false,
        sort: null,
        field: 'avg_awt_sec',
      }, {
        value: 'avgAhtSec',
        show: false,
        sort: null,
        field: 'avg_aht_sec',
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

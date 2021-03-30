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
        field: 'agent_status',
        width: '250px',
      }, {
        value: 'free',
        show: true,
        sort: null,
        field: 'agent_status',
        width: 'minmax(120px, 1fr)',
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
        width: 'minmax(120px, 1fr)',
      }, {
        value: 'count',
        show: true,
        sort: null,
        field: 'count',
        width: 'minmax(120px, 1fr)',
      }, {
        value: 'bridged',
        show: false,
        sort: null,
        field: 'bridged',
        width: 'minmax(120px, 1fr)',
      }, {
        value: 'transferred',
        show: false,
        sort: null,
        field: 'transferred',
        width: 'minmax(120px, 1fr)',
      }, {
        value: 'abandoned',
        show: false,
        sort: null,
        field: 'abandoned',
        width: 'minmax(120px, 1fr)',
      }, {
        value: 'sumBillSec',
        show: false,
        sort: null,
        field: 'sum_bill_sec',
        width: 'minmax(120px, 1fr)',
      }, {
        value: 'avgWrapSec',
        show: false,
        sort: null,
        field: 'avg_wrap_sec',
        width: 'minmax(120px, 1fr)',
      }, {
        value: 'avgAsaSec',
        show: false,
        sort: null,
        field: 'avg_asa_sec',
        width: 'minmax(120px, 1fr)',
      }, {
        value: 'avgAwtSec',
        show: false,
        sort: null,
        field: 'avg_awt_sec',
        width: 'minmax(120px, 1fr)',
      }, {
        value: 'avgAhtSec',
        show: false,
        sort: null,
        field: 'avg_aht_sec',
        width: 'minmax(120px, 1fr)',
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

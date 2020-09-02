export default {
  data: () => ({
    headersProperties: [
      {
        value: 'date',
        show: true,
        sort: null,
        field: 'created_at',
      }, {
        value: 'time',
        show: true,
        sort: null,
        field: 'created_at',
      }, {
        value: 'direction',
        show: true,
        sort: null,
        field: 'direction',
      }, {
        value: 'billSec',
        show: true,
        sort: null,
        field: 'bill_sec',
      }, {
        value: 'holdSec',
        show: true,
        sort: null,
        field: 'hold_sec',
      }, {
        value: 'client',
        show: true,
        sort: null,
        field: 'from',
      }, {
        value: 'phoneNumber',
        show: true,
        sort: null,
        field: 'from',
      },
    ],
  }),
  computed: {
    headers: {
      get() {
        return this.headersProperties.map((header) => ({
          ...header,
          text: this.$t(`pages.agentPage.calls.columns.${header.value}`),
        }));
      },
      set(value) {
        this.headersProperties = value;
      },
    },
  },
};

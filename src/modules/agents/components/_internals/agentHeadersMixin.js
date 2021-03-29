export default {
  data: () => ({
    headersProperties: [
      {
        value: 'name',
        show: true,
        sort: null,
        field: 'name',
      }, {
        value: 'status',
        show: true,
        sort: null,
        field: 'status',
      }, {
        value: 'teams',
        show: true,
        sort: null,
        field: 'teams',
      }, {
        value: 'queues',
        show: true,
        sort: null,
        field: 'queues',
      }, {
        value: 'utilization',
        show: true,
        sort: null,
        field: 'utilization',
      }, {
        value: 'callTime',
        show: true,
        sort: null,
        field: 'call_time',
      },
    ],
  }),
  computed: {
    headers: {
      get() {
        return this.headersProperties.map((header) => ({
          ...header,
          text: this.$t(`pages.agent.columns.${header.value}`),
        }));
      },
      set(value) {
        this.headersProperties = value;
      },
    },
  },
};

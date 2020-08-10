export default {
  data: () => ({
    headersProperties: [
      {
        value: 'name',
        show: true,
        sort: null,
      }, {
        value: 'status',
        show: true,
        sort: null,
      }, {
        value: 'teams',
        show: true,
        sort: null,
      }, {
        value: 'queues',
        show: true,
        sort: null,
      }, {
        value: 'utilization',
        show: true,
        sort: null,
      }, {
        value: 'callTime',
        show: true,
        sort: null,
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

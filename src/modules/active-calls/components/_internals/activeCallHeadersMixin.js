export default {
  data: () => ({
    headersProperties: [
      {
        value: 'createdAt',
        show: true,
        sort: null,
        field: 'created_at',
      }, {
        value: 'direction',
        show: true,
        sort: null,
        field: 'direction',
      }, {
        value: 'duration',
        show: true,
        sort: null,
        field: 'duration',
      }, {
        value: 'from',
        show: true,
        sort: null,
        field: 'from',
      }, {
        value: 'agent',
        show: true,
        sort: null,
        field: 'agent',
      }, {
        value: 'to',
        show: true,
        sort: null,
        field: 'to',
      }, {
        value: 'destination',
        show: true,
        sort: null,
        field: 'destination',
      }, {
        value: 'extension',
        show: true,
        sort: null,
        field: 'extension',
      }, {
        value: 'queue',
        show: true,
        sort: null,
        field: 'queue',
      }, {
        value: 'state',
        show: true,
        sort: null,
        field: 'state',
      }, {
        value: 'user',
        show: true,
        sort: null,
        field: 'user',
      },
    ],
  }),
  computed: {
    headers: {
      get() {
        return this.headersProperties.map((header) => ({
          ...header,
          text: this.$t(`pages.activeCall.columns.${header.value}`),
        }));
      },
      set(value) {
        this.headersProperties = value;
      },
    },
  },
};

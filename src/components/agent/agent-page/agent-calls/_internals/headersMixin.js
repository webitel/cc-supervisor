export default {
  data: () => ({
    headersProperties: [
      {
        value: 'direction',
        show: true,
        sort: null,
      }, {
        value: 'billSec',
        show: true,
        sort: null,
      }, {
        value: 'holdSec',
        show: true,
        sort: null,
      }, {
        value: 'client',
        show: true,
        sort: null,
      }, {
        value: 'phoneNumber',
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
          text: this.$t(`pages.agentPage.calls.columns.${header.value}`),
        }));
      },
      set(value) {
        this.headersProperties = value;
      },
    },
  },
};

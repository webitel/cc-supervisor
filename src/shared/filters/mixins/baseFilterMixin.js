import urlQueryControllerMixin from '../../../mixins/urlQueryControllerMixin';

export default {
  mixins: [urlQueryControllerMixin],

  data: () => ({
    value: null,
  }),

  created() {
    this.restore({ filterQuery: this.filterQuery });
  },

  methods: {
    restore({ filterQuery }) {
      this.restoreArray({ filterQuery });
    },

    restoreArray({ filterQuery }) {
      const valueArray = this.parseQueryArray({ filterQuery });
      if (valueArray) this.fillValue(valueArray);
    },
  },
};

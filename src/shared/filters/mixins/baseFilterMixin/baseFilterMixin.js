import urlControllerMixin from '../urlControllerMixin/urlControllerMixin';

export default {
  mixins: [urlControllerMixin],

  created() {
    this.restore({ filterQuery: this.filterQuery });
  },

  methods: {
    restore({ filterQuery }) {
      const value = this.getValue({ filterQuery });
      this.restoreValue(value);
    },

    getValue({ filterQuery }) {
      return this.getValueFromQuery({ filterQuery });
    },
  },
};

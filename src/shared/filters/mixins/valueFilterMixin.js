import urlQueryControllerMixin from '../../../mixins/urlQueryControllerMixin';

export default {
  mixins: [urlQueryControllerMixin],

  data: () => ({}),

  created() {
    this.restore({ filterQuery: this.filterQuery });
  },

  methods: {
    restore({ filterQuery }) {
      const value = this.$route.query[filterQuery];
      if (value) this.restoreValue({ value });
    },

    restoreValue() {},
  },
};

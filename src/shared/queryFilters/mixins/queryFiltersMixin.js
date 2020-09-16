
export default {
  computed: {
    filterParams() {
      const { query } = this.$route;
      return query;
    },
  },
};

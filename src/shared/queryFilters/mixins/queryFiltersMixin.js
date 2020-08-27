import convertQuery from '../scripts/convertQuery';

export default {
  computed: {
    filterParams() {
      const { query } = this.$route;
      return convertQuery(query);
    },
  },
};

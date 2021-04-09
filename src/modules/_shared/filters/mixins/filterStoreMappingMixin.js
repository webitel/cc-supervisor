import { mapState } from 'vuex';
import getNamespacedState from '@webitel/ui-sdk/src/store/helpers/getNamespacedState';

export default {
  props: {
    filterQuery: {
      type: String,
      default: '',
    },
  },
  computed: {
    ...mapState({
      filterSchema(state) {
        return getNamespacedState(state, this.namespace)[this.filterQuery];
      },
    }),
  },
};

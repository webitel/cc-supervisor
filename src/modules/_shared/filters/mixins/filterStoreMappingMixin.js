import { mapState } from 'vuex';
import getNamespacedState from '@webitel/ui-sdk/src/store/helpers/getNamespacedState';

export default {
  computed: {
    ...mapState({
      value(state) {
        return getNamespacedState(state, this.namespace)[this.filterQuery].value;
      },
      storedProp(state) {
        return getNamespacedState(state, this.namespace)[this.filterQuery].storedProp;
      },
      multiple(state) {
        return getNamespacedState(state, this.namespace)[this.filterQuery].multiple;
      },
    }),
  },
};

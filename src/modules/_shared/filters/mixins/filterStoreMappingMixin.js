import { mapState } from 'vuex';
import getNamespacedState from '@webitel/ui-sdk/src/store/helpers/getNamespacedState';

export default {
  data: () => ({
    filterStoreProperty: '',
  }),
  computed: {
    ...mapState({
      value(state) {
        return getNamespacedState(state, this.namespace)[this.filterStoreProperty].value;
      },
      storedProp(state) {
        return getNamespacedState(state, this.namespace)[this.filterStoreProperty].storedProp;
      },
      multiple(state) {
        return getNamespacedState(state, this.namespace)[this.filterStoreProperty].multiple;
      },
    }),
  },
};

import { mapActions, mapState } from 'vuex';
import getNamespacedState from '@webitel/ui-sdk/src/store/helpers/getNamespacedState';

export default {
  computed: {
    ...mapState({
      headersValue(state) {
        console.log('headersValue state:', state, 'this.namespace:', this.namespace);
        return getNamespacedState(state, this.namespace).headers;
      },
    }),
    headers: {
      get() {
        console.log('get headers:', this.headersValue);
        return this.headersValue.map((header) => ({
          ...header,
          text: Array.isArray(header.locale) ? this.$tc(...header.locale) : this.$t(header.locale),
        }));
      },
      set(value) {
        this.setHeaders(value);
      },
    },
  },
  methods: {
    ...mapActions({
      setHeaders(dispatch, payload) {
        return dispatch(`${this.namespace}/SET_HEADERS`, payload);
      },
    }),
  },
};

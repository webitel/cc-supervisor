import { mapActions, mapState } from 'vuex';
import getNamespacedState from '@webitel/ui-sdk/src/store/helpers/getNamespacedState';

export default {
  computed: {
    ...mapState({
      headersValue(state) {
        return getNamespacedState(state, this.namespace).headers;
      },
    }),
    headers: {
      get() {
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

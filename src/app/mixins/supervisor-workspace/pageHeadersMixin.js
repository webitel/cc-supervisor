import getNamespacedState
  from '@webitel/ui-sdk/src/store/helpers/getNamespacedState';
import { mapActions, mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      headersValue(state) {
        return getNamespacedState(state, this.namespace).headers;
      },
    }),
    headers() {
      return this.headersValue.map((header) => ({
        ...header,
        text: Array.isArray(header.locale)
          ? this.$t(...header.locale)
          : this.$t(header.locale),
      }));
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

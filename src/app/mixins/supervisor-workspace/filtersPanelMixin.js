// import AbstractApiFilter from '@webitel/ui-sdk/src/modules/QueryFilters/components/abstract-api-filter.vue';
// import AbstractEnumFilter from '@webitel/ui-sdk/src/modules/QueryFilters/components/abstract-enum-filter.vue';
import { mapActions, mapState } from 'vuex';
import AbstractApiFilter from '../../../modules/queues/modules/filters/components/api-filter.vue';
import AbstractEnumFilter from '../../../modules/queues/modules/filters/components/enum-filter.vue';
import tableActionsHandlerMixin from './tableActionsHandlerMixin';

export default {
  mixins: [tableActionsHandlerMixin],
  components: {
    AbstractApiFilter,
    AbstractEnumFilter,
  },
  props: {
    namespace: {
      type: String,
    },
  },
  data: () => ({
    filters: [],
  }),
  computed: {
    ...mapState('userinfo', {
      agent: (state) => state.agent,
    }),
    isAdmin() {
      return this.agent.isAdmin;
    },
    availableFilters() {
      return this.filters;
    },
  },
  methods: {
    ...mapActions({
      dispatchResetFilters(dispatch, payload) {
        return dispatch(`${this.namespace}/RESET_FILTERS`, payload);
      },
    }),
  },
};

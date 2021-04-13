<template>
  <wt-filters-panel-wrapper @reset="resetFilters">
  <component
      v-for="(filter, key) of availableFilters"
      :key="key"
      :is="`abstract-${filter.type}-filter`"
      :filter-query="filter.filterQuery"
      :namespace="namespace"
    ></component>
  </wt-filters-panel-wrapper>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import AbstractApiFilter from '@webitel/ui-sdk/src/modules/QueryFilters/components/abstract-api-filter.vue';
import AbstractEnumFilter from '@webitel/ui-sdk/src/modules/QueryFilters/components/abstract-enum-filter.vue';
import tableActionsHandlerMixin from '../../../../../app/mixins/supervisor-workspace/tableActionsHandlerMixin';

export default {
  name: 'queue-filters',
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
    filters: [
      { type: 'enum', filterQuery: 'period' },
      { type: 'api', filterQuery: 'queue' },
      { type: 'api', filterQuery: 'team' },
      { type: 'enum', filterQuery: 'queueType' },
    ],
  }),
  computed: {
    ...mapState('userinfo', {
      agent: (state) => state.agent,
    }),
    isAdmin() {
      return this.agent.isAdmin;
    },
    availableFilters() {
      return this.isAdmin
        ? this.filters
        : this.filters.filter((filter) => filter.filterQuery !== 'team');
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
</script>

<style lang="scss" scoped>
</style>

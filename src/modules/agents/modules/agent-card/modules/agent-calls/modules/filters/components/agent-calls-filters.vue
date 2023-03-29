<template>
  <wt-filters-panel-wrapper @reset="resetFilters">
    <filter-from :namespace="filtersNamespace"/>
    <filter-to :namespace="filtersNamespace"/>
    <component
      v-for="(filter) of availableFilters"
      :key="filter.filterQuery"
      :is="`abstract-${filter.type}-filter`"
      :filter-query="filter.filterQuery"
      :namespace="filtersNamespace"
    ></component>
  </wt-filters-panel-wrapper>
</template>

<script>
import { mapActions } from 'vuex';
import tableActionsHandlerMixin
  from '../../../../../../../../../app/mixins/supervisor-workspace/tableActionsHandlerMixin';
import filtersPanelMixin from '../../../../../../../../../app/mixins/supervisor-workspace/filtersPanelMixin';
import FilterFrom from '../../../../../../../../_shared/filters/components/filter-from.vue';
import FilterTo from '../../../../../../../../_shared/filters/components/filter-to.vue';

export default {
  name: 'agent-calls-filters',
  mixins: [filtersPanelMixin],
  components: {
    FilterFrom,
    FilterTo,
  },
  props: {
    namespace: {
      type: String,
    },
  },
  data: () => ({
    filters: [
      { type: 'enum', filterQuery: 'rated' },
      { type: 'api', filterQuery: 'ratedBy' },
    ],
  }),
  computed: {
    filtersNamespace() {
      return `${this.namespace}/filters`;
    },
  },
  methods: {
    ...mapActions({
      dispatchResetFilters(dispatch, payload) {
        return dispatch(`${this.filtersNamespace}/RESET_FILTERS`, payload);
      },
    }),
  },
};
</script>

<style lang="scss" scoped>
</style>

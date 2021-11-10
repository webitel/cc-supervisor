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
import filtersPanelMixin from '../../../../../app/mixins/supervisor-workspace/filtersPanelMixin';

export default {
  name: 'active-calls-filters',
  mixins: [filtersPanelMixin],
  data: () => ({
    filters: [
      { type: 'enum', filterQuery: 'direction' },
      // From the backend comes the state, which is filtered in the "Result" select
      { type: 'enum', filterQuery: 'state' },
      { type: 'api', filterQuery: 'gateway' },
      { type: 'api', filterQuery: 'queue' },
      { type: 'api', filterQuery: 'user' },
      { type: 'api', filterQuery: 'agent' },
      { type: 'api', filterQuery: 'supervisor' },
      { type: 'api', filterQuery: 'team' },
    ],
  }),
  computed: {
    availableFilters() {
      return this.isAdmin
        ? this.filters
        : this.filters.filter((filter) => filter.filterQuery !== 'team'
          && filter.filterQuery !== 'supervisor');
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

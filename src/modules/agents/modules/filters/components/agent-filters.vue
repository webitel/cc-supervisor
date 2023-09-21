<template>
  <wt-filters-panel-wrapper @reset="resetFilters">
    <component
      :is="`abstract-${filter.type}-filter`"
      v-for="(filter) of availableFilters"
      :key="filter.filterQuery"
      :filter-query="filter.filterQuery"
      :namespace="namespace"
      option-label
    ></component>
  </wt-filters-panel-wrapper>
</template>

<script>
import filtersPanelMixin from '../../../../../app/mixins/supervisor-workspace/filtersPanelMixin';

export default {
  name: 'agent-filters',
  mixins: [filtersPanelMixin],
  data: () => ({
    filters: [
      { type: 'enum', filterQuery: 'status' },
      { type: 'api', filterQuery: 'queue' },
      { type: 'api', filterQuery: 'skill' },
      { type: 'api', filterQuery: 'team' },
      { type: 'api', filterQuery: 'supervisor' },
      { type: 'api', filterQuery: 'auditor' },
      { type: 'api', filterQuery: 'region' },
      { type: 'enum', filterQuery: 'utilization' },
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

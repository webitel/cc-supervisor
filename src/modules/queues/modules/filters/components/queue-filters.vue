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
  name: 'queue-filters',
  mixins: [filtersPanelMixin],
  data: () => ({
    filters: [
      { type: 'enum', filterQuery: 'period' },
      { type: 'api', filterQuery: 'queue' },
      { type: 'api', filterQuery: 'team' },
      { type: 'enum', filterQuery: 'queueType' },
    ],
  }),
  computed: {
    availableFilters() {
      return this.isAdmin
        ? this.filters
        : this.filters.filter((filter) => filter.filterQuery !== 'team');
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

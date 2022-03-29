<template>
  <wt-filters-panel-wrapper @reset="resetFilters">
  <component
    v-for="(filter) of availableFilters"
    :key="filter.filterQuery"
    :is="`abstract-${filter.type}-filter`"
    :filter-query="filter.filterQuery"
    :namespace="namespace"
  ></component>
<!--    <skip-parent-filter-->
<!--      :namespace="namespace"-->
<!--    ></skip-parent-filter>-->
  </wt-filters-panel-wrapper>
</template>

<script>
import filtersPanelMixin from '../../../../../app/mixins/supervisor-workspace/filtersPanelMixin';
import SkipParentFilter from './skip-parent-filter.vue';

export default {
  name: 'active-calls-filters',
  mixins: [filtersPanelMixin],
  components: { SkipParentFilter },
  data: () => ({
    filters: [
      { type: 'enum', filterQuery: 'direction' },
      { type: 'enum', filterQuery: 'result' },
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

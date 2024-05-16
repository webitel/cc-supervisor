<template>
  <wt-filters-panel-wrapper @reset="resetFilters">
  <component
      v-for="(filter) of availableFilters"
      :key="filter.filterQuery"
      :is="`abstract-${filter.type}-filter`"
      :filter-query="filter.filterQuery"
      :namespace="namespace"
      :disabled="filter.disabled"
    ></component>
  </wt-filters-panel-wrapper>
</template>

<script>
import { mapGetters } from 'vuex';
import filtersPanelMixin from '../../../../../app/mixins/supervisor-workspace/filtersPanelMixin';

export default {
  name: 'queue-filters',
  mixins: [filtersPanelMixin],
  computed: {
    ...mapGetters('userinfo', {
      allowQueues: 'ALLOW_QUEUES_ACCESS',
    }),
    // add _ to because mixin data.filters overlaps computed.filters
    _filters() {
      return [
        { type: 'enum', filterQuery: 'period' },
        { type: 'api', filterQuery: 'queue', disabled: !this.allowQueues },
        { type: 'api', filterQuery: 'team' },
        { type: 'enum', filterQuery: 'queueType' },
      ];
    },
    availableFilters() {
      return this.isAdmin
        ? this._filters
        : this._filters.filter((filter) => filter.filterQuery !== 'team');
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

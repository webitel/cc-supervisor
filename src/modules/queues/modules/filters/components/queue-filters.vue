<template>
  <wt-filters-panel-wrapper @reset="resetFilters(['search'])">
    <component
      :is="`abstract-${filter.type}-filter`"
      v-for="(filter) of queueFilters"
      :key="filter.filterQuery"
      :filter-query="filter.filterQuery"
      :namespace="namespace"
      :disabled="filter.disabled"
    />
  </wt-filters-panel-wrapper>
</template>

<script>
import { mapGetters } from 'vuex';

import filtersPanelMixin from '../../../../../app/mixins/supervisor-workspace/filtersPanelMixin';

export default {
  name: 'QueueFilters',
  mixins: [filtersPanelMixin],
  computed: {
    ...mapGetters('userinfo', {
      allowQueues: 'ALLOW_QUEUES_ACCESS',
      allowTeams: 'ALLOW_TEAMS_ACCESS',
    }),
    // not just "filters" because mixin data.filters overlaps computed.filters
    queueFilters() {
      return [
        { type: 'enum', filterQuery: 'period' },
        { type: 'api', filterQuery: 'queue', disabled: !this.allowQueues },
        { type: 'api', filterQuery: 'team', disabled: !this.allowTeams },
        { type: 'enum', filterQuery: 'queueType' },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

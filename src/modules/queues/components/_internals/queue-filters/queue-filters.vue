<template>
  <div class="filter-wrap">
    <filter-period class="filter-item" :namespace="filtersNamespace"/>
    <filter-queue class="filter-item" :namespace="filtersNamespace"/>
    <filter-team class="filter-item" :namespace="filtersNamespace"/>
    <filter-type class="filter-item" :namespace="filtersNamespace"/>
  </div>
</template>

<script>
import FilterPeriod from '../../../../_shared/filters/components/filter-period.vue';
import FilterQueue from '../../../../_shared/filters/components/filter-queue.vue';
import FilterType from '../../../../_shared/filters/components/filter-queue-type.vue';
import FilterTeam from '../../../../_shared/filters/components/filter-team.vue';

export default {
  name: 'queue-filters',
  components: {
    FilterType,
    FilterTeam,
    FilterQueue,
    FilterPeriod,
  },
  props: {
    namespace: {
      type: String,
    },
  },
  computed: {
    filtersNamespace() {
      return `${this.namespace}/filters`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../../../app/css/supervisor-workspace/table-page/table-filters/table-filters';
</style>

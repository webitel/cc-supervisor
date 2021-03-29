<template>
  <div class="filter-wrap">
    <filter-status class="filter-item" :namespace="namespace"/>
    <filter-queue class="filter-item" :namespace="namespace"/>
    <filter-team class="filter-item" :namespace="namespace"/>
    <filter-utilization class="filter-item" :namespace="namespace"/>
  </div>
</template>

<script>
import FilterQueue from '../../../../_shared/filters/components/filter-queue.vue';
import FilterStatus from '../../../../_shared/filters/components/filter-status.vue';
import FilterTeam from '../../../../_shared/filters/components/filter-team.vue';
import FilterUtilization from '../../../../_shared/filters/components/filter-utilization.vue';

export default {
  name: 'agent-filters',
  components: {
    FilterTeam,
    FilterQueue,
    FilterStatus,
    FilterUtilization,
  },
  props: {
    namespace: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../../../app/css/supervisor-workspace/table-page/table-filters/table-filters';
</style>

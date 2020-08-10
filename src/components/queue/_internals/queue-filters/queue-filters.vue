<template>
  <div class="filter-wrap">
    <filter-period class="filter-item"/>
    <filter-queue class="filter-item"/>
    <filter-team class="filter-item"/>
    <filter-type class="filter-item"/>
  </div>
</template>

<script>
import FilterPeriod from '../../../filters/filter-period.vue';
import FilterQueue from '../../../filters/filter-queue.vue';
import FilterType from '../../../filters/filter-queue-type.vue';
import FilterTeam from '../../../filters/filter-team.vue';

export default {
  name: 'queue-filters',
  components: {
    FilterType,
    FilterTeam,
    FilterQueue,
    FilterPeriod,
  },
};
</script>

<style lang="scss" scoped>
@import '../../../../css/supervisor-workspace/table-page/table-filters/table-filters';
</style>

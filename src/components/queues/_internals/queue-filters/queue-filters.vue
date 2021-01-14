<template>
  <div class="filter-wrap">
    <filter-period class="filter-item"/>
    <filter-queue class="filter-item"/>
    <filter-team class="filter-item"/>
    <filter-type class="filter-item"/>
  </div>
</template>

<script>
import FilterPeriod from '../../../../shared/filters/components/filter-period.vue';
import FilterQueue from '../../../../shared/filters/components/filter-queue.vue';
import FilterType from '../../../../shared/filters/components/filter-queue-type.vue';
import FilterTeam from '../../../../shared/filters/components/filter-team.vue';

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

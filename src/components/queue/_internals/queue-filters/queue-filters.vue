<template>
  <div class="filter-header">
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
.filter-header {
  display: flex;
  flex-wrap: wrap;

  .filter-item {
    min-width: 170px;
    max-width: 250px;
    margin-right: 20px;
    margin-bottom: 10px;
  }
}
</style>

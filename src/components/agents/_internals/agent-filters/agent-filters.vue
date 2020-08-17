<template>
  <div class="filter-wrap">
    <filter-status class="filter-item"/>
    <filter-queue class="filter-item"/>
    <filter-team class="filter-item"/>
    <filter-utilization class="filter-item"/>
    <!--    <div class="switcher-label-wrap filter-switch-item">-->
    <!--      <div class="label">{{ $t('filters.callNow') }}</div>-->
    <!--      <switcher-->
    <!--        v-model="callNow"-->
    <!--      ></switcher>-->
    <!--    </div>-->
  </div>
</template>

<script>
import FilterQueue from '../../../filters/filter-queue.vue';
import FilterStatus from '../../../filters/filter-status.vue';
import FilterTeam from '../../../filters/filter-team.vue';
import FilterUtilization from '../../../filters/filter-utilization.vue';

export default {
  name: 'agent-filters',
  components: {
    FilterTeam,
    FilterQueue,
    FilterStatus,
    FilterUtilization,
  },
};
</script>

<style lang="scss" scoped>
@import '../../../../css/supervisor-workspace/table-page/table-filters/table-filters';
</style>

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
import FilterQueue from '../../../../shared/filters/components/filter-queue.vue';
import FilterStatus from '../../../../shared/filters/components/filter-status.vue';
import FilterTeam from '../../../../shared/filters/components/filter-team.vue';
import FilterUtilization from '../../../../shared/filters/components/filter-utilization.vue';

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

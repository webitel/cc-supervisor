<template>
  <div class="filter-wrap">
    <filter-direction class="filter-item"/>
    <filter-user class="filter-item"/>
    <filter-gateway class="filter-item"/>
    <filter-queue class="filter-item"/>
    <filter-agent class="filter-item"/>
  </div>
</template>

<script>
import FilterAgent from '../../../filters/filter-agent.vue';
import FilterDirection from '../../../filters/filter-direction.vue';
import FilterGateway from '../../../filters/filter-gateway.vue';
import FilterQueue from '../../../filters/filter-queue.vue';
import FilterUser from '../../../filters/filter-user.vue';

export default {
  name: 'active-calls-filters',
  components: {
    FilterAgent,
    FilterUser,
    FilterQueue,
    FilterDirection,
    FilterGateway,
  },
};
</script>

<style lang="scss" scoped>
@import '../../../../css/supervisor-workspace/table-page/table-filters/table-filters';
</style>

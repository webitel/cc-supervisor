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
import FilterAgent from '../../../../_shared/filters/components/filter-agent.vue';
import FilterDirection from '../../../../_shared/filters/components/filter-direction.vue';
import FilterGateway from '../../../../_shared/filters/components/filter-gateway.vue';
import FilterQueue from '../../../../_shared/filters/components/filter-queue.vue';
import FilterUser from '../../../../_shared/filters/components/filter-user.vue';

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
@import '../../../../../app/css/supervisor-workspace/table-page/table-filters/table-filters';
</style>

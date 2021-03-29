<template>
  <div class="filter-wrap">
    <filter-direction class="filter-item" :namespace="namespace"/>
    <filter-user class="filter-item" :namespace="namespace"/>
    <filter-gateway class="filter-item" :namespace="namespace"/>
    <filter-queue class="filter-item" :namespace="namespace"/>
    <filter-agent class="filter-item" :namespace="namespace"/>
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

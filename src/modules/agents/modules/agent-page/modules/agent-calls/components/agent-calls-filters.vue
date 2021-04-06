<template>
  <article  class="filter-wrap">
    <filter-from class="filter-item" :namespace="namespace"/>
    <filter-to class="filter-item" :namespace="namespace"/>
  </article>
</template>

<script>
import FilterFrom from '../../../../../../_shared/filters/components/filter-from.vue';
import FilterTo from '../../../../../../_shared/filters/components/filter-to.vue';

export default {
  name: 'agent-calls-filters',
  components: { FilterFrom, FilterTo },
  data: () => ({
    namespace: 'agents/agentPage/agentCalls/filters',
  }),
};
</script>

<style lang="scss" scoped>
@import '../../../../../../../app/css/supervisor-workspace/table-page/table-filters/table-filters';
</style>

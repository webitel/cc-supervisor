<template>
  <div class="filter-wrap">
    <filter-status class="filter-item" :namespace="namespace"/>
    <filter-queue class="filter-item" :namespace="namespace"/>
    <filter-skill class="filter-item" :namespace="namespace"/>
    <filter-team class="filter-item" :namespace="namespace"/>
    <filter-supervisor class="filter-item" :namespace="namespace"/>
    <filter-auditor class="filter-item" :namespace="namespace"/>
    <filter-region class="filter-item" :namespace="namespace"/>
    <filter-utilization class="filter-item" :namespace="namespace"/>
  </div>
</template>

<script>
import FilterQueue from '../../../../_shared/filters/components/filter-queue.vue';
import FilterStatus from '../../../../_shared/filters/components/filter-status.vue';
import FilterSkill from '../../../../_shared/filters/components/filter-skill.vue';
import FilterTeam from '../../../../_shared/filters/components/filter-team.vue';
import FilterSupervisor from '../../../../_shared/filters/components/filter-supervisor.vue';
import FilterAuditor from '../../../../_shared/filters/components/filter-auditor.vue';
import FilterRegion from '../../../../_shared/filters/components/filter-region.vue';
import FilterUtilization from '../../../../_shared/filters/components/filter-utilization.vue';

export default {
  name: 'agent-filters',
  components: {
    FilterTeam,
    FilterQueue,
    FilterSkill,
    FilterStatus,
    FilterSupervisor,
    FilterAuditor,
    FilterRegion,
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
</style>

<template>
  <wt-filters-panel-wrapper @reset="resetFilters">
  <component
    v-for="(filter) of activeCallsFilters"
    :key="filter.filterQuery"
    :is="`abstract-${filter.type}-filter`"
    :filter-query="filter.filterQuery"
    :namespace="namespace"
    :disabled="filter.disabled"
  ></component>
<!--    <skip-parent-filter-->
<!--      :namespace="namespace"-->
<!--    ></skip-parent-filter>-->
  </wt-filters-panel-wrapper>
</template>

<script>
import { mapGetters } from 'vuex';
import filtersPanelMixin from '../../../../../app/mixins/supervisor-workspace/filtersPanelMixin';
import SkipParentFilter from './skip-parent-filter.vue';

export default {
  name: 'active-calls-filters',
  mixins: [filtersPanelMixin],
  components: { SkipParentFilter },
  computed: {
    ...mapGetters('userinfo', {
      allowUsers: 'ALLOW_USERS_ACCESS',
      allowQueues: 'ALLOW_QUEUES_ACCESS',
      allowAgents: 'ALLOW_AGENTS_ACCESS',
      allowGateways: 'ALLOW_GATEWAYS_ACCESS',
    }),
    // not just "filters" because mixin data.filters overlaps computed.filters
    activeCallsFilters() {
      return [
        { type: 'enum', filterQuery: 'direction' },
        { type: 'enum', filterQuery: 'result' },
        { type: 'api', filterQuery: 'gateway', disabled: !this.allowGateways },
        { type: 'api', filterQuery: 'queue', disabled: !this.allowQueues },
        { type: 'api', filterQuery: 'user', disabled: !this.allowUsers },
        { type: 'api', filterQuery: 'agent', disabled: !this.allowAgents },
        { type: 'api', filterQuery: 'supervisor' },
        { type: 'api', filterQuery: 'team' },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

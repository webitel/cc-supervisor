<template>
  <wt-filters-panel-wrapper @reset="resetFilters(['search'])">
    <component
      :is="`abstract-${filter.type}-filter`"
      v-for="(filter) of agentFilters"
      :key="filter.filterQuery"
      :filter-query="filter.filterQuery"
      :namespace="namespace"
      :disabled="filter.disabled"
    ></component>
  </wt-filters-panel-wrapper>
</template>

<script>
import { mapGetters } from 'vuex';

import filtersPanelMixin from '../../../../../app/mixins/supervisor-workspace/filtersPanelMixin';

export default {
  name: 'AgentFilters',
  mixins: [filtersPanelMixin],
  computed: {
    ...mapGetters('userinfo', {
      allowUsers: 'ALLOW_USERS_ACCESS',
      allowQueues: 'ALLOW_QUEUES_ACCESS',
      allowAgents: 'ALLOW_AGENTS_ACCESS',
      allowSkills: 'ALLOW_SKILLS_ACCESS',
      allowRegions: 'ALLOW_REGIONS_ACCESS',
      allowTeams: 'ALLOW_TEAMS_ACCESS',
    }),
    // not just "filters" because mixin data.filters overlaps computed.filters
    agentFilters() {
      return [
        { type: 'enum', filterQuery: 'status' },
        { type: 'api', filterQuery: 'queue', disabled: !this.allowQueues },
        { type: 'api', filterQuery: 'skill', disabled: !this.allowSkills },
        { type: 'api', filterQuery: 'team', disabled: !this.allowTeams },
        { type: 'api', filterQuery: 'supervisor', disabled: !this.allowAgents }, // !this.allowAgents because we use agents api for this filter
        { type: 'api', filterQuery: 'auditor', disabled: !this.allowUsers },
        { type: 'api', filterQuery: 'region', disabled: !this.allowRegions },
        { type: 'enum', filterQuery: 'utilization' },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

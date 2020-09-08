<template>
  <wt-select
    v-model="value"
    :label="$t('filters.agent')"
    :track-by="trackBy"
    :search="fetch"
    :internal-search="false"
    :close-on-select="false"
    multiple
    @reset="setValueToQuery({ value, filterQuery, storedProp })"
    @closed="setValueToQuery({ value, filterQuery, storedProp })"
  ></wt-select>
</template>

<script>
  import apiFilterMixin from '../mixins/apiFilterMixin';
  import { getAgents, getAgentsByIds } from '../api/agentFilter';

  export default {
    name: 'filter-agent',
    mixins: [apiFilterMixin],

    data: () => ({
      filterQuery: 'agent',
    }),

    methods: {
      fetch: getAgents,
      fetchSelected: getAgentsByIds,
    },
  };
</script>

<style scoped>

</style>

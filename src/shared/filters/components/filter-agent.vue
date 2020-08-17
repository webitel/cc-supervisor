<template>
  <wt-select
    v-model="value"
    :label="$t('filters.agent')"
    :internal-search="!apiMode"
    :track-by="trackBy"
    :search="fetch"
    :close-on-select="false"
    multiple
    @reset="setQueryArray({ value, filterQuery, queriedProp })"
    @closed="setQueryArray({ value, filterQuery, queriedProp })"
  ></wt-select>
</template>

<script>
  import apiFilterMixin from '../mixins/apiFilterMixin';
  import { getAgents, getAgentsByIds } from '../api/agentFilter';

  export default {
    name: 'filter-agent',
    mixins: [apiFilterMixin],

    data: () => ({
      filterQuery: 'agentIds',
    }),

    methods: {
      fetch: getAgents,
      fetchSelected: getAgentsByIds,
    },
  };
</script>

<style scoped>

</style>

<template>
  <multiselect
    v-model="value"
    :fetch-method="fetch"
    :label="$t('filters.agent')"
    :api-mode="apiMode"
    :track-by="trackBy"
    @closed="setQueryArray({ value, filterQuery, queriedProp })"
    :multiple="true"
    :closeOnSelect="false"
  ></multiselect>
</template>

<script>
  import apiFilterMixin from '@/mixins/filters/apiFilterMixin';
  import { fetchAgents, getSelectedAgents } from '@/api/filter-getters/agentFilter';

  export default {
    name: 'filter-agent',
    mixins: [apiFilterMixin],

    data: () => ({
      filterQuery: 'agentIds',
    }),

    methods: {
      fetch: fetchAgents,
      fetchSelected: getSelectedAgents,
    },
  };
</script>

<style scoped>

</style>

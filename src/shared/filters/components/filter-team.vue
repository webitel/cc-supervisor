<template>
  <wt-select
    v-model="value"
    :label="$t('filters.team')"
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
  import apiFilterMixin from '@webitel/ui-sdk/src/mixins/dataFilterMixins/apiFilterMixin';
  import { getTeams, getTeamsByIds } from '../api/teamFilter';

  export default {
    name: 'filter-team',
    mixins: [apiFilterMixin],

    data: () => ({
      filterQuery: 'team',
    }),

    methods: {
      fetch: getTeams,
      fetchSelected: getTeamsByIds,
    },
  };
</script>

<style scoped>

</style>

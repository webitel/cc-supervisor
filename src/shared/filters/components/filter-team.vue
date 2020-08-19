<template>
  <wt-select
    v-model="value"
    :label="$t('filters.team')"
    :track-by="trackBy"
    :search="fetch"
    :internal-search="false"
    :close-on-select="false"
    multiple
    @reset="setValueArrayToQuery({ value, filterQuery, storedProp })"
    @closed="setValueArrayToQuery({ value, filterQuery, storedProp })"
  ></wt-select>
</template>

<script>
  import apiFilterMixin from '../mixins/apiFilterMixin';
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

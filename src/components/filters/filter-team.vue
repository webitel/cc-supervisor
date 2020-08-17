<template>
  <wt-select
    v-model="value"
    :label="$t('filters.team')"
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
  import apiFilterMixin from '../../mixins/filters/apiFilterMixin';
  import { getTeams, getTeamsByIds } from '../../api/filters/teamFilter';

  export default {
    name: 'filter-team',
    mixins: [apiFilterMixin],

    data: () => ({
      filterQuery: 'teamIds',
    }),

    methods: {
      fetch: getTeams,
      fetchSelected: getTeamsByIds,
    },
  };
</script>

<style scoped>

</style>

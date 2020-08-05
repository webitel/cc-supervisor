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
  import apiFilterMixin from '@/mixins/filters/apiFilterMixin';
  import { fetchTeams, getSelectedTeams } from '@/api/filter-getters/teamFilter';

  export default {
    name: 'filter-team',
    mixins: [apiFilterMixin],

    data: () => ({
      filterQuery: 'teamIds',
    }),

    methods: {
      fetch: fetchTeams,
      fetchSelected: getSelectedTeams,
    },
  };
</script>

<style scoped>

</style>

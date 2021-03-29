<template>
  <wt-select
    :value="value"
    :label="$t('filters.team')"
    :track-by="storedProp"
    :multiple="multiple"
    :search="fetch"
    :internal-search="false"
    :close-on-select="false"
    v-bind="$attrs"
    @input="setValue({ filter: filterQuery, value: $event })"
    @reset="setValueToQuery({ value, filterQuery, storedProp })"
    @closed="setValueToQuery({ value, filterQuery, storedProp })"
  ></wt-select>
</template>

<script>
import apiFilterMixin from '@webitel/ui-sdk/src/modules/QueryFilters/mixins/apiFilterMixin';
import filterStoreMappingMixin from '../mixins/filterStoreMappingMixin';
import { getTeams, getTeamsByIds } from '../api/teamFilter';

export default {
  name: 'filter-team',
  mixins: [apiFilterMixin, filterStoreMappingMixin],
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

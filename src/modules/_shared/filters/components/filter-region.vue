<template>
  <wt-select
    :value="value"
    :label="$t('filters.region')"
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
import { getRegions, getRegionsByIds } from '../api/regionFilter';

export default {
  name: 'filter-region',
  mixins: [apiFilterMixin, filterStoreMappingMixin],
  data: () => ({
    filterQuery: 'region',
  }),
  methods: {
    fetch: getRegions,
    fetchSelected: getRegionsByIds,
  },
};
</script>

<style scoped>

</style>

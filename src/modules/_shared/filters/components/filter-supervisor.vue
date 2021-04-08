<template>
  <wt-select
    :value="value"
    :label="$t('filters.supervisor')"
    :track-by="storedProp"
    :multiple="multiple"
    :search="fetch"
    :internal-search="false"
    :close-on-select="false"
    @input="setValue({ filter: filterQuery, value: $event })"
    @reset="setValueToQuery({ value, filterQuery, storedProp })"
    @closed="setValueToQuery({ value, filterQuery, storedProp })"
  ></wt-select>
</template>

<script>
import apiFilterMixin from '@webitel/ui-sdk/src/modules/QueryFilters/mixins/apiFilterMixin';
import { getSupervisors, getSupervisorsByIds } from '../api/supervisorFilter';
import filterStoreMappingMixin from '../mixins/filterStoreMappingMixin';

export default {
  name: 'filter-supervisor',
  mixins: [apiFilterMixin, filterStoreMappingMixin],

  data: () => ({
    filterQuery: 'supervisor',
  }),

  methods: {
    fetch: getSupervisors,
    fetchSelected: getSupervisorsByIds,
  },
};
</script>

<style scoped>

</style>

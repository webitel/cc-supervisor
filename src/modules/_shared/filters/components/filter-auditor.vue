<template>
  <wt-select
    :value="value"
    :label="$t('filters.auditor')"
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
import filterStoreMappingMixin from '../mixins/filterStoreMappingMixin';
import { getUsers, getUsersByIds } from '../api/userFilter';

export default {
  name: 'filter-auditor',
  mixins: [apiFilterMixin, filterStoreMappingMixin],

  data: () => ({
    filterQuery: 'auditor',
  }),

  methods: {
    fetch: getUsers,
    fetchSelected: getUsersByIds,
  },
};
</script>

<style scoped>

</style>

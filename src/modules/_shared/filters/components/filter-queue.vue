<template>
  <wt-select
    :value="value"
    :label="$t('filters.queue')"
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
import { getQueues, getQueuesByIds } from '../api/queueFilter';
import filterStoreMappingMixin from '../mixins/filterStoreMappingMixin';

export default {
  name: 'filter-queue',
  mixins: [apiFilterMixin, filterStoreMappingMixin],

  data: () => ({
    filterQuery: 'queue',
  }),

  methods: {
    fetch: getQueues,
    fetchSelected: getQueuesByIds,
  },
};
</script>

<style scoped>

</style>

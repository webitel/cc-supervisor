<template>
  <wt-select
    v-model="value"
    :label="$t('filters.queue')"
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
  import { getQueues, getQueuesByIds } from '../api/queueFilter';

  export default {
    name: 'filter-queue',
    mixins: [apiFilterMixin],

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

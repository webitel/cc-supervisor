<template>
  <wt-select
    v-model="value"
    :label="$t('filters.queue')"
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
  import { getQueues, getQueuesByIds } from '../../api/filters/queueFilter';

  export default {
    name: 'filter-queue',
    mixins: [apiFilterMixin],

    data: () => ({
      filterQuery: 'queueIds',
    }),

    methods: {
      fetch: getQueues,
      fetchSelected: getQueuesByIds,
    },
  };
</script>

<style scoped>

</style>

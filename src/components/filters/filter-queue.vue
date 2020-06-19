<template>
  <multiselect
    v-model="value"
    :fetch-method="fetch"
    :label="$t('filters.queue')"
    :api-mode="apiMode"
    :track-by="trackBy"
    @closed="setQueryArray({ value, filterQuery, queriedProp })"
    :multiple="true"
    :closeOnSelect="false"
  ></multiselect>
</template>

<script>
  import apiFilterMixin from '@/mixins/filters/apiFilterMixin';
  import { fetchQueues, getSelectedQueues } from '@/api/filter-getters/queueFilter';

  export default {
    name: 'filter-queue',
    mixins: [apiFilterMixin],

    data: () => ({
      filterQuery: 'queueIds',
    }),

    methods: {
      fetch: fetchQueues,
      fetchSelected: getSelectedQueues,
    },
  };
</script>

<style scoped>

</style>

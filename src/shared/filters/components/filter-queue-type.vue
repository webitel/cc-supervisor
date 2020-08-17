<template>
  <wt-select
    v-model="value"
    :options="options"
    :label="$t('filters.queueType')"
    :track-by="trackBy"
    multiple
    @reset="setQueryArray({ value, filterQuery, queriedProp })"
    @closed="setQueryArray({ value, filterQuery, queriedProp })"
  ></wt-select>
</template>

<script>
  import enumFilterMixin from '../mixins/enumFilterMixin';
  import TypeOptions from '../api/TypeOptions.enum';

  export default {
    name: 'filter-queue-type',
    mixins: [enumFilterMixin],

    data: () => ({
      options: TypeOptions,
      filterQuery: 'queues-type',
    }),
  };
</script>

<style scoped>

</style>

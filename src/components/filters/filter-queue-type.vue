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
  import enumFilterMixin from '../../mixins/filters/enumFilterMixin';
  import TypeOptions from '../../api/filter-getters/TypeOptions.enum';

  export default {
    name: 'filter-queue-type',
    mixins: [enumFilterMixin],

    data: () => ({
      options: TypeOptions,
      filterQuery: 'queue-type',
    }),
  };
</script>

<style scoped>

</style>

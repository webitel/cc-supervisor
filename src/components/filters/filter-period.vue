<template>
  <wt-select
    v-model="value"
    :options="options"
    :label="$t('filters.time')"
    :track-by="trackBy"
    @reset="setQueryValue({ filterQuery, value: value.value })"
    @closed="setQueryValue({ filterQuery, value: value.value })"
  ></wt-select>
</template>

<script>
  import enumFilterMixin from '../../mixins/filters/enumFilterMixin';
  import PeriodOptions from '../../api/filters/PeriodOptions.enum';

  export default {
    name: 'filter-period',
    mixins: [enumFilterMixin],

    data: () => ({
      options: PeriodOptions,
      filterQuery: 'period',
    }),
  };
</script>

<style scoped>
</style>

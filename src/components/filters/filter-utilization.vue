<template>
  <wt-select
    v-model="value"
    :options="options"
    :label="$t('filters.utilization')"
    :track-by="trackBy"
    multiple
    @reset="setQueryArray({ value, filterQuery, queriedProp })"
    @closed="setQueryArray({ value, filterQuery, queriedProp })"
  ></wt-select>
</template>

<script>
  import enumFilterMixin from '../../mixins/filters/enumFilterMixin';
  import Utilization from '../../api/filter-getters/UtilizationOptions.enum';

  export default {
    name: 'filter-utilization',
    mixins: [enumFilterMixin],

    data: () => ({
      options: Utilization,
      filterQuery: 'utilization',
    }),
  };
</script>

<style scoped>

</style>

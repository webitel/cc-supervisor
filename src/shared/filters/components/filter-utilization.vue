<template>
  <wt-select
    v-model="value"
    :options="options"
    :label="$t('filters.utilization')"
    :track-by="trackBy"
    multiple
    @reset="setValueArrayToQuery({ value, filterQuery, storedProp })"
    @closed="setValueArrayToQuery({ value, filterQuery, storedProp })"
  ></wt-select>
</template>

<script>
  import enumFilterMixin from '../mixins/enumFilterMixin';
  import Utilization from '../api/UtilizationOptions.enum';

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

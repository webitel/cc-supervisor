<template>
  <multiselect
    v-model="value"
    :options="options"
    :label="'Utilization progress'"
    :track-by="trackBy"
    :api-mode="apiMode"
    @closed="setQueryArray({ value, filterQuery, queriedProp })"
    :multiple="true"
    :closeOnSelect="false"
  ></multiselect>
</template>

<script>
  import enumFilterMixin from '@/mixins/filters/enumFilterMixin';
  import Utilization from '@/api/filter-getters/UtilizationOptions.enum';

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

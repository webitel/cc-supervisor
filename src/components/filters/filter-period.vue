<template>
  <multiselect
    v-model="value"
    :options="options"
    :label="'Time'"
    :track-by="trackBy"
    :api-mode="apiMode"
    @closed="setQueryValue({ filterQuery: filterQuery, value: value.value })"
    :multiple="false"
    :closeOnSelect="true"
  ></multiselect>
</template>

<script>
  import enumFilterMixin from '@/mixins/filters/enumFilterMixin';
  import PeriodOptions from '@/api/filter-getters/PeriodOptions.enum';

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

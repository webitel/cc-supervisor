<template>
  <wt-select
    v-model="value"
    :options="options"
    :label="$t('filters.time')"
    :track-by="trackBy"
    @reset="setValueToQuery({ filterQuery, value: value.value })"
    @closed="setValueToQuery({ filterQuery, value: value.value })"
  ></wt-select>
</template>

<script>
  import enumFilterMixin from '@webitel/ui-sdk/src/mixins/dataFilterMixins/enumFilterMixin';
  import DirectionOptions from '../api/DirectionOptions.enum';
  import PeriodOptions from '../api/PeriodOptions.enum';

  export default {
    name: 'filter-period',
    mixins: [enumFilterMixin],
    data: () => ({
      filterQuery: 'period',
    }),
    computed: {
      options() {
        return PeriodOptions;
      },
    },
  };
</script>

<style scoped>
</style>

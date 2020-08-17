<template>
  <wt-select
    v-model="value"
    :options="options"
    :label="$t('filters.direction')"
    :track-by="trackBy"
    multiple
    @reset="setQueryArray({ value, filterQuery, queriedProp })"
    @closed="setQueryArray({ value, filterQuery, queriedProp })"
  ></wt-select>
</template>

<script>
  import enumFilterMixin from '../../mixins/filters/enumFilterMixin';
  import DirectionOptions from '../../api/filters/DirectionOptions.enum';

  export default {
    name: 'filter-direction',
    mixins: [enumFilterMixin],

    data: () => ({
      options: DirectionOptions,
      filterQuery: 'direction',
    }),
  };
</script>

<style scoped>

</style>

<template>
  <multiselect
    v-model="value"
    :options="options"
    :label="$t('filters.direction')"
    :track-by="trackBy"
    :api-mode="apiMode"
    @closed="setQueryArray({ value, filterQuery, queriedProp })"
    :multiple="true"
    :closeOnSelect="false"
  ></multiselect>
</template>

<script>
  import enumFilterMixin from '@/mixins/filters/enumFilterMixin';
  import DirectionOptions from '@/api/filter-getters/DirectionOptions.enum';

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

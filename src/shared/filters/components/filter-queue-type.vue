<template>
  <wt-select
    v-model="value"
    :options="options"
    :label="$t('filters.queueType')"
    :track-by="trackBy"
    multiple
    @reset="setValueArrayToQuery({ value, filterQuery, storedProp })"
    @closed="setValueArrayToQuery({ value, filterQuery, storedProp })"
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
      filterQuery: 'queue-type',
    }),
  };
</script>

<style scoped>

</style>

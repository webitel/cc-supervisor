<template>
  <wt-select
    v-model="value"
    :options="options"
    :label="$t('filters.queueType')"
    :track-by="trackBy"
    multiple
    @reset="setValueToQuery({ value, filterQuery, storedProp })"
    @closed="setValueToQuery({ value, filterQuery, storedProp })"
  ></wt-select>
</template>

<script>
  import enumFilterMixin from '@webitel/ui-sdk/src/mixins/dataFilterMixins/enumFilterMixin';
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

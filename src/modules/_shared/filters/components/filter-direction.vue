<template>
  <wt-select
    v-model="value"
    :options="options"
    :label="$t('filters.direction')"
    :track-by="trackBy"
    multiple
    @reset="setValueToQuery({ value, filterQuery, storedProp })"
    @closed="setValueToQuery({ value, filterQuery, storedProp })"
  ></wt-select>
</template>

<script>
  import enumFilterMixin from '@webitel/ui-sdk/src/mixins/dataFilterMixins/enumFilterMixin';
  import DirectionOptions from '../api/DirectionOptions.enum';

  export default {
    name: 'filter-direction',
    mixins: [enumFilterMixin],
    data: () => ({
      filterQuery: 'direction',
    }),
    computed: {
      options() {
        return DirectionOptions;
      },
    },
  };
</script>

<style scoped>

</style>

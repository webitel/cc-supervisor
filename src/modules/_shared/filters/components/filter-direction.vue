<template>
  <wt-select
    :value="value"
    :options="options"
    :label="$t('filters.direction')"
    :track-by="storedProp"
    :multiple="multiple"
    @input="setValue({ filter: filterQuery, value: $event })"
    @reset="setValueToQuery({ value, filterQuery, storedProp })"
    @closed="setValueToQuery({ value, filterQuery, storedProp })"
  ></wt-select>
</template>

<script>
import enumFilterMixin from '@webitel/ui-sdk/src/modules/QueryFilters/mixins/enumFilterMixin';
import filterStoreMappingMixin from '../mixins/filterStoreMappingMixin';
import DirectionOptions from '../api/DirectionOptions.enum';

export default {
  name: 'filter-direction',
  mixins: [enumFilterMixin, filterStoreMappingMixin],
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

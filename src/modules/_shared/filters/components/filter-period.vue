<template>
  <wt-select
    v-model="value"
    :options="options"
    :label="$t('filters.time')"
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
import PeriodOptions from '../api/PeriodOptions.enum';

export default {
  name: 'filter-period',
  mixins: [enumFilterMixin, filterStoreMappingMixin],
  data: () => ({
    filterQuery: 'period',
    filterStoreProperty: 'period',
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

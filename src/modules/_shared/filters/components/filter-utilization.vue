<template>
  <wt-select
    :value="value"
    :options="options"
    :label="$t('filters.utilization')"
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
import Utilization from '../api/UtilizationOptions.enum';

export default {
  name: 'filter-utilization',
  mixins: [enumFilterMixin, filterStoreMappingMixin],
  data: () => ({
    filterQuery: 'utilization',
  }),
  computed: {
    options() {
      return Utilization;
    },
  },
};
</script>

<style scoped>

</style>

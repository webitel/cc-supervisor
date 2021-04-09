<template>
  <wt-select
    :value="filterSchema.value"
    :options="filterSchema.options"
    :label="$t(filterSchema.locale.label)"
    :track-by="filterSchema.storedProp"
    :multiple="filterSchema.multiple"
    @input="setValue({ filter: filterQuery, value: $event })"
    @reset="setValueToQuery({ value, filterQuery, storedProp: filterSchema.storedProp })"
    @closed="setValueToQuery({ value, filterQuery, storedProp: filterSchema.storedProp })"
  ></wt-select>
</template>

<script>
import enumFilterMixin from '@webitel/ui-sdk/src/modules/QueryFilters/mixins/enumFilterMixin';
import filterStoreMappingMixin from '../mixins/filterStoreMappingMixin';

export default {
  name: 'abstract-enum-filter',
  mixins: [enumFilterMixin, filterStoreMappingMixin],
};
</script>

<style scoped>

</style>

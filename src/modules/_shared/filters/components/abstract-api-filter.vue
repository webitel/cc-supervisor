<template>
  <wt-select
    :value="filterSchema.value"
    :label="$t(filterSchema.locale.label)"
    :track-by="filterSchema.storedProp"
    :multiple="filterSchema.multiple"
    :search="search"
    :internal-search="false"
    :close-on-select="filterSchema.closeOnSelect"
    @input="setValue({ filter: filterQuery, value: $event })"
    @reset="setValueToQuery({ value, filterQuery, storedProp: filterSchema.storedProp })"
    @closed="setValueToQuery({ value, filterQuery, storedProp: filterSchema.storedProp })"
  ></wt-select>
</template>

<script>
import apiFilterMixin from '@webitel/ui-sdk/src/modules/QueryFilters/mixins/apiFilterMixin';
import filterStoreMappingMixin from '../mixins/filterStoreMappingMixin';

export default {
  name: 'abstract-api-filter',
  mixins: [apiFilterMixin, filterStoreMappingMixin],
  methods: {
    search(...args) {
      return this.filterSchema.search(...args);
    },
    fetchSelected(...args) {
      return this.filterSchema.fetchSelected(...args);
    },
  },
};
</script>

<style scoped>

</style>

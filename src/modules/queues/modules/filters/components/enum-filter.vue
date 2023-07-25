<template>
  <wt-select
    :value="value"
    :options="localizedOptions"
    :label="label"
    :track-by="filterSchema.storedProp"
    :multiple="filterSchema.multiple"
    :search-method="search"
    v-bind="$attrs"
    @input="setValue({ filter: filterQuery, value: $event })"
    @reset="setValueToQuery({ value, filterQuery, storedProp: filterSchema.storedProp })"
    @closed="setValueToQuery({ value, filterQuery, storedProp: filterSchema.storedProp })"
  ></wt-select>
</template>

<script>
import enumFilterMixin from '@webitel/ui-sdk/src/modules/QueryFilters/mixins/enumFilterMixin';

export default {
  name: 'abstract-enum-filter',
  mixins: [enumFilterMixin],
  props: {
    filterQuery: {
      type: String,
      required: true,
    },
  },
  methods: {
    search(params) {
      console.log('search enum params:', params);
      console.log('search this.value:', this.value);
      // return this.value;
    },
  },
};
</script>

<style scoped>

</style>

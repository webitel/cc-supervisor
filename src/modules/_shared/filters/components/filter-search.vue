<template>
  <wt-search-bar
    :value="value"
    debounce
    @input="setValue({ filter: filterQuery, value: $event })"
    @search="setValueToQuery({ filter: filterQuery, value: $event })"
  />
</template>

<script>
import baseFilterMixin from '@webitel/ui-sdk/src/modules/QueryFilters/mixins/baseFilterMixin/baseFilterMixin';
import filterStoreMappingMixin from '../mixins/filterStoreMappingMixin';

export default {
  name: 'filter-search',
  mixins: [baseFilterMixin, filterStoreMappingMixin],
  data: () => ({
    filterQuery: 'search',
  }),
  methods: {
    restoreValue(value) {
      this.setValue({ filterQuery: this.filterQuery, value });
    },
  },
};
</script>

<style scoped>

</style>

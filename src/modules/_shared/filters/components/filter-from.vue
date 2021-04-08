<template>
  <wt-datetimepicker
    :value="value"
    :label="$t('filters.from')"
    @change="handleChange"
  ></wt-datetimepicker>
</template>

<script>
import baseFilterMixin from '@webitel/ui-sdk/src/modules/QueryFilters/mixins/baseFilterMixin/baseFilterMixin';
import filterStoreMappingMixin from '../mixins/filterStoreMappingMixin';

export default {
  name: 'filter-from',
  mixins: [baseFilterMixin, filterStoreMappingMixin],
  data: () => ({
    filterQuery: 'from',
  }),

  methods: {
    handleChange(value) {
      this.setValue({ filter: this.filterQuery, value });
      this.setValueToQuery({ filterQuery: this.filterQuery, value });
    },
    restoreValue(value) {
      this.setValue({ filter: this.filterQuery, value: +value });
    },
  },
};
</script>

<style scoped>

</style>

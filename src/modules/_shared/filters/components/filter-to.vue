<template>
  <wt-datetimepicker
    :value="value"
    :label="$t('filters.to')"
    @change="handleChange"
  ></wt-datetimepicker>
</template>

<script>
import baseFilterMixin from '@webitel/ui-sdk/src/modules/QueryFilters/mixins/baseFilterMixin/baseFilterMixin';

export default {
  name: 'filter-to',
  mixins: [baseFilterMixin],

  data: () => ({
    filterQuery: 'to',
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

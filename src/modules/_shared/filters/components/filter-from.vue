<template>
  <wt-datepicker
    :value="value"
    :label="$t('filters.from')"
    mode="datetime"
    @input="handleChange"
  ></wt-datepicker>
</template>

<script>
import baseFilterMixin from '@webitel/ui-sdk/src/modules/QueryFilters/mixins/baseFilterMixin/baseFilterMixin';

export default {
  name: 'FilterFrom',
  mixins: [baseFilterMixin],
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

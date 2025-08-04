<template>
  <wt-datepicker
    :value="value"
    :label="$t('reusable.to')"
    mode="datetime"
    @input="handleChange"
  ></wt-datepicker>
</template>

<script>
import baseFilterMixin from '@webitel/ui-sdk/src/modules/QueryFilters/mixins/baseFilterMixin/baseFilterMixin';

export default {
  name: 'FilterTo',
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

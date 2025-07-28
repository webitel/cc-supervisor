<template>
  <wt-checkbox
    :selected="value"
    :label="$t('filters.skipParent')"
    @update:selected="handleChange"
  ></wt-checkbox>
</template>

<script>
import baseFilterMixin from '@webitel/ui-sdk/src/modules/QueryFilters/mixins/baseFilterMixin/baseFilterMixin';

export default {
  name: 'SkipParentFilter',
  mixins: [baseFilterMixin],
  data: () => ({
    filterQuery: 'skipParent',
  }),
  methods: {
    handleChange(value) {
      this.setValue({ filter: this.filterQuery, value });
      this.setValueToQuery({ filterQuery: this.filterQuery, value });
    },
    restoreValue(value) {
      this.setValue({ filter: this.filterQuery, value: (value === 'true') });
    },
  },
};
</script>

<style scoped>

</style>

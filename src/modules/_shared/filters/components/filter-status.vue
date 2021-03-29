<template>
  <wt-select
    :value="value"
    :options="options"
    :label="$t('filters.status')"
    :track-by="storedProp"
    :multiple="multiple"
    :close-on-select="false"
    @input="setValue({ filter: filterQuery, value: $event })"
    @reset="setValueToQuery({ value, filterQuery, storedProp })"
    @closed="setValueToQuery({ value, filterQuery, storedProp })"
  ></wt-select>
</template>

<script>
import enumFilterMixin from '@webitel/ui-sdk/src/modules/QueryFilters/mixins/enumFilterMixin';
import AgentStatus from '../api/AgentStatusOptions.enum';
import filterStoreMappingMixin from '../mixins/filterStoreMappingMixin';

export default {
  name: 'filter-status',
  mixins: [enumFilterMixin, filterStoreMappingMixin],
  data: () => ({
    filterQuery: 'status',
  }),
  computed: {
    options() {
      return AgentStatus;
    },
  },
};
</script>

<style scoped>

</style>

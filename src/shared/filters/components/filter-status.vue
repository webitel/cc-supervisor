<template>
  <wt-select
    v-model="value"
    :options="options"
    :label="$t('filters.status')"
    :track-by="trackBy"
    multiple
    @reset="setValueToQuery({ value, filterQuery, storedProp })"
    @closed="setValueToQuery({ value, filterQuery, storedProp })"
  ></wt-select>
</template>

<script>
  import enumFilterMixin from '@webitel/ui-sdk/src/mixins/dataFilterMixins/enumFilterMixin';
  import AgentStatus from '../api/AgentStatusOptions.enum';

  export default {
    name: 'filter-status',
    mixins: [enumFilterMixin],

    data: () => ({
      options: AgentStatus,
      filterQuery: 'status',
      storedProp: 'value',
    }),
  };
</script>

<style scoped>

</style>

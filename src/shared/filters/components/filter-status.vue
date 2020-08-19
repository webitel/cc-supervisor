<template>
  <wt-select
    v-model="value"
    :options="options"
    :label="$t('filters.status')"
    :track-by="trackBy"
    multiple
    @reset="setValueArrayToQuery({ value, filterQuery, storedProp })"
    @closed="setValueArrayToQuery({ value, filterQuery, storedProp })"
  ></wt-select>
</template>

<script>
  import enumFilterMixin from '../mixins/enumFilterMixin';
  import AgentStatus from '../api/AgentStatusOptions.enum';

  export default {
    name: 'filter-status',
    mixins: [enumFilterMixin],

    data: () => ({
      options: AgentStatus,
      filterQuery: 'value',
    }),
  };
</script>

<style scoped>

</style>

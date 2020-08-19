<template>
  <wt-select
    v-model="value"
    :options="options"
    :label="$t('filters.status')"
    :track-by="trackBy"
    multiple
    @reset="setQueryArray({ value, filterQuery, queriedProp })"
    @closed="setQueryArray({ value, filterQuery, queriedProp })"
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
      filterQuery: 'status',
    }),
  };
</script>

<style scoped>

</style>

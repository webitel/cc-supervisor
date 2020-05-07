<template>
  <multiselect
    v-model="value"
    :options="options"
    :label="'Status'"
    :track-by="trackBy"
    :api-mode="apiMode"
    @closed="setQueryArray({ value, filterQuery, queriedProp })"
  ></multiselect>
</template>

<script>
  import enumFilterMixin from '@/mixins/filters/enumFilterMixin';
  import AgentStatus from '@/api/filter-getters/AgentStatus.enum';

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

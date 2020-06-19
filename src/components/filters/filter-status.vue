<template>
  <multiselect
    v-model="value"
    :options="options"
    :label="$t('filters.status')"
    :track-by="trackBy"
    :api-mode="apiMode"
    @closed="setQueryArray({ value, filterQuery, queriedProp })"
    :multiple="true"
    :closeOnSelect="false"
  ></multiselect>
</template>

<script>
  import enumFilterMixin from '@/mixins/filters/enumFilterMixin';
  import AgentStatus from '@/api/filter-getters/AgentStatusOptions.enum';

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

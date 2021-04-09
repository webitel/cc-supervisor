<template>
  <div class="filter-wrap">
    <component
      class="filter-item"
      v-for="(filter, key) of filters"
      :key="key"
      :is="`abstract-${filter.type}-filter`"
      :filter-query="filter.filterQuery"
      :namespace="namespace"
    ></component>
  </div>
</template>

<script>
import AbstractApiFilter from '../../../../_shared/filters/components/abstract-api-filter.vue';
import AbstractEnumFilter from '../../../../_shared/filters/components/abstract-enum-filter.vue';

export default {
  name: 'agent-filters',
  components: {
    AbstractApiFilter,
    AbstractEnumFilter,
  },
  props: {
    namespace: {
      type: String,
    },
  },
  data: () => ({
    filters: [
      { type: 'enum', filterQuery: 'status' },
      { type: 'api', filterQuery: 'queue' },
      { type: 'api', filterQuery: 'skill' },
      { type: 'api', filterQuery: 'team' },
      { type: 'api', filterQuery: 'supervisor' },
      { type: 'api', filterQuery: 'auditor' },
      { type: 'api', filterQuery: 'region' },
      { type: 'enum', filterQuery: 'utilization' },
    ],
  }),
};
</script>

<style lang="scss" scoped>
</style>

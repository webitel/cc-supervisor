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
import AbstractApiFilter from '@webitel/ui-sdk/src/modules/QueryFilters/components/abstract-api-filter.vue';
import AbstractEnumFilter from '@webitel/ui-sdk/src/modules/QueryFilters/components/abstract-enum-filter.vue';

export default {
  name: 'active-calls-filters',
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
      { type: 'enum', filterQuery: 'direction' },
      { type: 'api', filterQuery: 'user' },
      { type: 'api', filterQuery: 'gateway' },
      { type: 'api', filterQuery: 'queue' },
      { type: 'api', filterQuery: 'agent' },
    ],
  }),
};
</script>

<style lang="scss" scoped>
</style>

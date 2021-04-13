<template>
  <div class="filter-wrap">
    <component
      class="filter-item"
      v-for="(filter, key) of availableFilters"
      :key="key"
      :is="`abstract-${filter.type}-filter`"
      :filter-query="filter.filterQuery"
      :namespace="namespace"
    ></component>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import AbstractApiFilter from '@webitel/ui-sdk/src/modules/QueryFilters/components/abstract-api-filter.vue';
import AbstractEnumFilter from '@webitel/ui-sdk/src/modules/QueryFilters/components/abstract-enum-filter.vue';

export default {
  name: 'queue-filters',
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
      { type: 'enum', filterQuery: 'period' },
      { type: 'api', filterQuery: 'queue' },
      { type: 'api', filterQuery: 'team' },
      { type: 'enum', filterQuery: 'queueType' },
    ],
  }),
  computed: {
    ...mapState('userinfo', {
      agent: (state) => state.agent,
    }),
    isAdmin() {
      return this.agent.isAdmin;
    },
    availableFilters() {
      return this.isAdmin
        ? this.filters
        : this.filters.filter((filter) => filter.filterQuery !== 'team');
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

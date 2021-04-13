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
import AbstractApiFilter from '@webitel/ui-sdk/src/modules/QueryFilters/components/abstract-api-filter.vue';
import AbstractEnumFilter from '@webitel/ui-sdk/src/modules/QueryFilters/components/abstract-enum-filter.vue';
import { mapState } from 'vuex';

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
        : this.filters.filter((filter) => filter.filterQuery !== 'team'
          && filter.filterQuery !== 'supervisor');
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

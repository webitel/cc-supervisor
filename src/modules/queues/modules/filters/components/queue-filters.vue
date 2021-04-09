<template>
  <div class="filter-wrap">
    <abstract-enum-filter
      class="filter-item"
      :namespace="namespace"
      filter-query="period"
    />
    <abstract-api-filter
      class="filter-item"
      :namespace="namespace"
      filter-query="queue"
    />
    <abstract-api-filter
      class="filter-item"
      :namespace="namespace"
      :disabled="!isAdmin"
      filter-query="team"
    />
    <abstract-enum-filter
      class="filter-item"
      :namespace="namespace"
      filter-query="queueType"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
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
  watch: {
    agent(agent) {
      if (!this.isAdmin && agent.team) {
        this.setFilter({
          filter: 'team',
          value: agent.team,
        });
      }
    },
  },
  computed: {
    ...mapState('userinfo', {
      agent: (state) => state.agent,
    }),
    isAdmin() {
      return this.agent.isAdmin;
    },
  },
  methods: {
    ...mapActions({
      setFilter(dispatch, payload) {
        return dispatch(`${this.namespace}/SET_FILTER`, payload);
      },
    }),
  },
};
</script>

<style lang="scss" scoped>
</style>

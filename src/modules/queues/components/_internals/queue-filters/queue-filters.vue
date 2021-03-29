<template>
  <div class="filter-wrap">
    <filter-period class="filter-item" :namespace="namespace"/>
    <filter-queue class="filter-item" :namespace="namespace"/>
    <filter-team class="filter-item" :namespace="namespace" :disabled="!isAdmin"/>
    <filter-type class="filter-item" :namespace="namespace"/>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import FilterPeriod from '../../../../_shared/filters/components/filter-period.vue';
import FilterQueue from '../../../../_shared/filters/components/filter-queue.vue';
import FilterType from '../../../../_shared/filters/components/filter-queue-type.vue';
import FilterTeam from '../../../../_shared/filters/components/filter-team.vue';

export default {
  name: 'queue-filters',
  components: {
    FilterType,
    FilterTeam,
    FilterQueue,
    FilterPeriod,
  },
  props: {
    namespace: {
      type: String,
    },
  },
  watch: {
    agent(agent) {
      if (!this.isAdmin && agent.team) {
        this.setFilter({ filter: 'team', value: agent.team });
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
@import '../../../../../app/css/supervisor-workspace/table-page/table-filters/table-filters';
</style>

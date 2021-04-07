<template>
  <div class="actions-panel-wrapper">
    <article  class="filter-wrap">
      <filter-from class="filter-item" :namespace="filtersNamespace"/>
      <filter-to class="filter-item" :namespace="filtersNamespace"/>
    </article>
    <div class="table-actions-wrapper">
      <wt-table-actions
        :icons="['filter-reset']"
        @input="tableActionsHandler"
      ></wt-table-actions>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import FilterFrom from '../../../../../../_shared/filters/components/filter-from.vue';
import FilterTo from '../../../../../../_shared/filters/components/filter-to.vue';
import tableActionsHandlerMixin from '../../../../../../../app/mixins/supervisor-workspace/tableActionsHandlerMixin';

export default {
  name: 'agent-calls-filters',
  mixins: [tableActionsHandlerMixin],
  components: { FilterFrom, FilterTo },
  props: {
    namespace: {
      type: String,
    },
  },
  computed: {
    filtersNamespace() {
      return `${this.namespace}/filters`;
    },
  },
  methods: {
    ...mapActions({
      dispatchResetFilters(dispatch, payload) {
        return dispatch(`${this.filtersNamespace}/RESET_FILTERS`, payload);
      },
    }),
  },
};
</script>

<style lang="scss" scoped>
</style>

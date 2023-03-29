<template>
  <wt-filters-panel-wrapper @reset="resetFilters">
    <filter-from :namespace="filtersNamespace"/>
    <filter-to :namespace="filtersNamespace"/>
    <wt-table-actions
      class="table-wrapper__actions-wrapper"
      :icons="['refresh']"
      @input="tableActionsHandler"
    >
      <filter-fields
        v-model="headers"
        entity="agentCalls"
      ></filter-fields>
    </wt-table-actions>
  </wt-filters-panel-wrapper>
</template>

<script>
import { mapActions } from 'vuex';
import tablePageMixin from '../../../../../../../../../app/mixins/supervisor-workspace/tablePageMixin';
import tableActionsHandlerMixin
  from '../../../../../../../../../app/mixins/supervisor-workspace/tableActionsHandlerMixin';
import FilterFrom from '../../../../../../../../_shared/filters/components/filter-from.vue';
import FilterTo from '../../../../../../../../_shared/filters/components/filter-to.vue';
import FilterFields from '../../../../../../../../_shared/filters/components/filter-table-fields.vue';

export default {
  name: 'agent-calls-filters',
  mixins: [tableActionsHandlerMixin, tablePageMixin],
  components: {
    FilterFrom,
    FilterTo,
    FilterFields,
  },
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

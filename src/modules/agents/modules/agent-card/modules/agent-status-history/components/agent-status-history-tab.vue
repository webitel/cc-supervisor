<template>
  <article class="table-wrapper table-wrapper--tab-table">
    <wt-table-actions
      class="table-wrapper__actions-wrapper"
      :icons="['refresh']"
      @input="tableActionsHandler"
    >
      <filter-fields
        :headers="headers"
        entity="agentStatusHistory"
        @change="setHeaders"
      ></filter-fields>
    </wt-table-actions>
    <wt-loader v-show="isLoading"></wt-loader>
    <div v-show="!isLoading" class="table-loading-wrapper">
      <wt-table
        :headers="headers"
        :data="dataList"
        :selectable="false"
        :grid-actions="false"
        sortable
        @sort="sort"
      >
        <template #state="{ item }">
          <table-agent-state :item="item"/>
        </template>
      </wt-table>
      <filter-pagination :is-next="isNext"/>
    </div>
  </article>
</template>

<script>
import sortFilterMixin from '@webitel/ui-sdk/src/mixins/dataFilterMixins/sortFilterMixin';

import tablePageMixin from '../../../../../../../app/mixins/supervisor-workspace/tablePageMixin';
import FilterPagination from '../../../../../../_shared/filters/components/filter-pagination.vue';
import FilterFields from '../../../../../../_shared/filters/components/filter-table-fields.vue';
import TableAgentState from './_internals/table-templates/table-agent-state.vue';

export default {
  name: 'AgentStatusHistoryTab',
  components: {
    TableAgentState,
    FilterFields,
    FilterPagination,
  },
  mixins: [
    tablePageMixin,
    sortFilterMixin,
  ],
  props: {
    namespace: {
      type: String,
    },
  },
  methods: {
    loadList() {
      const agentId = this.$route.params.id;
      const { query } = this.$route;

      if (agentId)
      return this.loadDataList({
        ...query,
        agentId,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

<template>
  <wt-page-wrapper>
    <template #header>
      <wt-headline>
        <template #title>
          {{ $t('pages.queue.title') }}
        </template>
        <template #actions>
          <filter-search :namespace="filtersNamespace" filter-query="search"/>
          <wt-button
            :loading="isCSVLoading"
            :disabled="!dataList.length"
            @click="exportCSV"
          >{{ $t('defaults.exportCSV') }}
          </wt-button>
        </template>
      </wt-headline>
    </template>
    <template #actions-panel>
      <queue-filters :namespace="filtersNamespace"/>
    </template>
    <template #main>
      <section class="main-section-wrapper">
        <wt-loader v-show="isLoading"></wt-loader>
        <div v-show="!isLoading" class="table-wrapper">
          <wt-table-actions
            class="table-wrapper__actions-wrapper"
            :icons="['refresh']"
            @input="tableActionsHandler"
          >
            <filter-fields
              :headers="headers"
              :static-headers="['queue', 'agents', 'free']"
              entity="queues"
              @change="setHeaders"
            ></filter-fields>
          </wt-table-actions>
          <wt-table
            :headers="headers"
            :data="dataList"
            sortable
            :grid-actions="false"
            @sort="sort"
          >
            <template #queue="{ item }">
              <table-queue :item="item"/>
            </template>
            <template #agents="{ item }">
              <table-agents :status="item.agentStatus"/>
            </template>
            <template #free="{ item }">
              <div v-if="item.agentStatus">
                {{ item.agentStatus.free }}
              </div>
            </template>
            <template #team="{ item }">
              <table-team :item="item"/>
            </template>
            <template #members="{ item }">
              <table-members :item="item"/>
            </template>
            <template #queue-footer>
              {{ $t('reusable.total') }}
            </template>
            <template #agents-footer>
              <table-agents :status="aggs"/>
            </template>
            <template #free-footer>
              {{ aggs.free }}
            </template>
          </wt-table>
          <filter-pagination :is-next="isNext"/>
        </div>
      </section>
    </template>
  </wt-page-wrapper>
</template>

<script>
import sortFilterMixin from '@webitel/ui-sdk/src/mixins/dataFilterMixins/sortFilterMixin';
import exportCSVMixin from '@webitel/ui-sdk/src/modules/CSVExport/mixins/exportCSVMixin';
import FilterSearch from '@webitel/ui-sdk/src/modules/QueryFilters/components/filter-search.vue';

import tablePageMixin from '../../../app/mixins/supervisor-workspace/tablePageMixin';
import FilterPagination from '../../_shared/filters/components/filter-pagination.vue';
import FilterFields from '../../_shared/filters/components/filter-table-fields.vue';
import QueuesAPI from '../api/queues';
import QueueFilters from '../modules/filters/components/queue-filters.vue';
import TableAgents from './_internals/table-templates/table-agents.vue';
import TableMembers from './_internals/table-templates/table-members.vue';
import TableQueue from './_internals/table-templates/table-queue.vue';
import TableTeam from './_internals/table-templates/table-team.vue';

export default {
  name: 'TheQueues',
  components: {
    FilterSearch,
    FilterFields,
    FilterPagination,
    QueueFilters,
    TableQueue,
    TableAgents,
    TableTeam,
    TableMembers,
  },
  mixins: [
    tablePageMixin,
    sortFilterMixin,
    exportCSVMixin,
  ],
  data: () => ({
    namespace: 'queues',
  }),

  computed: {
    selectedIds() {
      return this.dataList
      .filter((item) => item._isSelected)
      .map((item) => item.queue?.id);
    },
  },

  created() {
    this.initCSVExport(QueuesAPI.getList, { filename: 'queues-stats' });
  },
};
</script>

<style lang="scss" scoped>
</style>

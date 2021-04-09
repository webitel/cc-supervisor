<template>
  <wt-page-wrapper>
    <template slot="header">
      <wt-headline>
        <template slot="title">
          {{ $t('pages.queue.title') }}
        </template>
        <template slot="actions">
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
    <template slot="actions-panel">
      <div class="actions-panel-wrapper">
        <queue-filters :namespace="filtersNamespace" />
        <div class="table-actions-wrapper">
          <filter-fields
            v-model="headers"
            entity="queues"
            :static-headers="['queue', 'agents', 'free']"
          ></filter-fields>
          <wt-table-actions
          :icons="['refresh', 'filter-reset']"
          @input="tableActionsHandler"
        ></wt-table-actions>
        </div>
      </div>
    </template>
    <template slot="main">
      <section class="main-section-wrapper">
        <wt-loader v-show="isLoading"></wt-loader>
        <div class="table-wrapper" v-show="!isLoading">
          <wt-table
            :headers="headers"
            :data="dataList"
            sortable
            :grid-actions="false"
            @sort="sort"
          >
            <template slot="queue" slot-scope="{ item }">
              <table-queue :item="item"/>
            </template>
            <template slot="agents" slot-scope="{ item }">
              <table-agents :status="item.agentStatus"/>
            </template>
            <template slot="free" slot-scope="{ item }">
              <div v-if="item.agentStatus">
                {{ item.agentStatus.free }}
              </div>
            </template>
            <template slot="team" slot-scope="{ item }">
              <table-team :item="item"/>
            </template>
            <template slot="members" slot-scope="{ item }">
              <table-members :item="item"/>
            </template>
            <template slot="queue-footer">
              {{ $t('reusable.total') }}
            </template>
            <template slot="agents-footer">
              <table-agents :status="aggs"/>
            </template>
            <template slot="free-footer">
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

import FilterFields from '../../_shared/filters/components/filter-table-fields.vue';
import FilterPagination from '../../_shared/filters/components/filter-pagination.vue';

import QueueFilters from './_internals/queue-filters/queue-filters.vue';
import TableQueue from './_internals/table-templates/table-queue.vue';
import TableAgents from './_internals/table-templates/table-agents.vue';
import TableTeam from './_internals/table-templates/table-team.vue';
import TableMembers from './_internals/table-templates/table-members.vue';
import tablePageMixin from '../../../app/mixins/supervisor-workspace/tablePageMixin';
import QueuesAPI from '../api/queues';

export default {
  name: 'the-queues',
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

  created() {
    this.initCSVExport(QueuesAPI.getList, { filename: 'queues-stats' });
  },

  computed: {
    selectedIds() {
      return this.dataList
      .filter((item) => item._isSelected)
      .map((item) => item.queue?.id);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

<template>
  <wt-page-wrapper>
    <template slot="header">
      <wt-headline>
        <template slot="title">
          {{ $t('pages.queue.title') }}
        </template>
        <template slot="actions">
          <filter-search :namespace="filtersNamespace" />
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
            :static-headers="['queue', 'agents']"
          ></filter-fields>
          <wt-table-actions
          :icons="['refresh', 'filter-reset']"
          @input="tableActionsHandler"
        ></wt-table-actions>
        </div>
      </div>
    </template>
    <template slot="main">
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
          <template slot="team" slot-scope="{ item }">
            <table-team :item="item"/>
          </template>
          <template slot="agents" slot-scope="{ item }">
            <table-agents :status="item.agentStatus"/>
          </template>
          <template slot="members" slot-scope="{ item }">
            <table-members :item="item"/>
          </template>
          <template slot="agents-footer">
            <table-agents :status="aggs"/>
          </template>
        </wt-table>
        <filter-pagination :is-next="isNext"/>
      </div>
    </template>
  </wt-page-wrapper>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import sortFilterMixin from '@webitel/ui-sdk/src/mixins/dataFilterMixins/sortFilterMixin';
import exportCSVMixin from '@webitel/ui-sdk/src/modules/CSVExport/mixins/exportCSVMixin';

import FilterFields from '../../_shared/filters/components/filter-table-fields.vue';
import FilterSearch from '../../_shared/filters/components/filter-search.vue';
import FilterPagination from '../../_shared/filters/components/filter-pagination.vue';

import QueueFilters from './_internals/queue-filters/queue-filters.vue';
import TableQueue from './_internals/table-templates/table-queue.vue';
import TableAgents from './_internals/table-templates/table-agents.vue';
import TableTeam from './_internals/table-templates/table-team.vue';
import TableMembers from './_internals/table-templates/table-members.vue';
import headersMixin from './_internals/queueHeadersMixin';
import tableActionsHandlerMixin from '../../../app/mixins/supervisor-workspace/tableActionsHandlerMixin';
import autoRefreshMixin from '../../../app/mixins/autoRefresh/autoRefreshMixin';

import getQueuesList from '../api/queues';

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
    headersMixin,
    sortFilterMixin,
    autoRefreshMixin,
    exportCSVMixin,
    tableActionsHandlerMixin,
  ],
  data: () => ({
    namespace: 'queues',
    isLoading: false,
  }),

  watch: {
    '$route.query': {
      async handler() {
        await this.initializeList();
        this.setAutoRefresh();
      },
      immediate: true,
    },
  },

  created() {
    this.initCSVExport(getQueuesList, { filename: 'queues-stats' });
  },

  computed: {
    ...mapState('queues', {
      dataList: (state) => state.dataList,
      aggs: (state) => state.aggs,
      isNext: (state) => state.isNext,
    }),

    selectedIds() {
      return this.dataList
      .filter((item) => item._isSelected)
      .map((item) => item.queue?.id);
    },
    filtersNamespace() {
      return `${this.namespace}/filters`;
    },
  },

  methods: {
    ...mapActions('queues', {
      loadDataList: 'FETCH_LIST',
    }),
    ...mapActions('queues/filters', {
      dispatchResetFilters: 'RESET_FILTERS',
    }),

    async initializeList() {
      this.isLoading = true;
      try {
        await this.loadList();
      } catch {
      } finally {
        this.isLoading = false;
      }
    },

    loadList() {
      const { query } = this.$route;
      return this.loadDataList(query);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../app/css/supervisor-workspace/table-page/table-page';
</style>

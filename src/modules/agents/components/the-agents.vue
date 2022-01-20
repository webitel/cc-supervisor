<template>
  <wt-page-wrapper>
    <template slot="header">
      <wt-headline>
        <template slot="title">
          {{ $t('pages.agent.title') }}
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
      <agents-filters :namespace="filtersNamespace"/>
    </template>

    <template slot="main">
      <section class="main-section-wrapper">
        <wt-loader v-show="isLoading"></wt-loader>
        <div class="table-wrapper" v-show="!isLoading">
          <wt-table-actions
            class="table-wrapper__actions-wrapper"
            :icons="['refresh']"
            @input="tableActionsHandler"
          >
            <filter-fields
              v-model="headers"
              entity="agents"
              :static-headers="['name']"
            ></filter-fields>
          </wt-table-actions>
          <wt-table
            ref="agents-table"
            :headers="headers"
            :data="dataList"
            sortable
            :grid-actions="false"
            @sort="sort"
          >
            <template slot="name" slot-scope="{ item }">
              <table-agent :item="item"/>
            </template>
            <template slot="status" slot-scope="{ item }">
              <table-agent-status :item="item"/>
            </template>
            <template slot="callTime" slot-scope="{ item }">
              <table-agent-call-time :item="item" @attach-call="attachCall"/>
            </template>
            <template slot="team" slot-scope="{ item }">
              <div v-if="item.team">
                {{ item.team.name }}
              </div>
            </template>
            <template slot="queues" slot-scope="{ item }">
              <table-queues :item="item"/>
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
import { mapActions } from 'vuex';
import { AgentStatus } from 'webitel-sdk';
import tablePageMixin from '../../../app/mixins/supervisor-workspace/tablePageMixin';
import FilterPagination from '../../_shared/filters/components/filter-pagination.vue';
import FilterFields from '../../_shared/filters/components/filter-table-fields.vue';
import AgentsAPI from '../api/agents';
import AgentsFilters from '../modules/filters/components/agent-filters.vue';
import TableQueues from './_internals/table-templates/table-agent-queues.vue';
import TableAgentStatus from './_internals/table-templates/table-agent-status.vue';
import TableAgentCallTime from './_internals/table-templates/table-agent-sum-call-time.vue';
import TableAgent from './_internals/table-templates/table-agent.vue';

const collectBreakoutIndexes = (dataList) => (
  dataList.reduce((indexes, dataRow, dataRowIndex) => {
    if (dataRow.status === AgentStatus.BreakOut) return indexes.concat(dataRowIndex);
    return indexes;
  }, [])
);

export default {
  name: 'the-agents',
  components: {
    FilterSearch,
    FilterFields,
    FilterPagination,
    AgentsFilters,
    TableAgent,
    TableAgentStatus,
    TableAgentCallTime,
    TableQueues,
  },
  mixins: [
    tablePageMixin,
    sortFilterMixin,
    exportCSVMixin,
  ],
  data: () => ({
    namespace: 'agents',
  }),
  watch: {
    dataList: {
      handler() {
        this.highlightBreakoutAgents();
      },
      immediate: true,
    },
  },
  created() {
    this.initCSVExport(AgentsAPI.getList, { filename: 'agents' });
  },
  computed: {
    selectedIds() {
      return this.dataList
      .filter((item) => item._isSelected)
      .map((item) => item.agentId);
    },
  },
  methods: {
    ...mapActions('call', {
      attachToCall: 'ATTACH_TO_CALL',
      openWindow: 'EAVESDROP_OPEN_WINDOW',
    }),
    async highlightBreakoutAgents() {
      const breakoutIndexes = collectBreakoutIndexes(this.dataList);
      await this.$nextTick(); // wait for table to render
      this.clearHighlights();
      if (!breakoutIndexes.length) return;
      this.highlightRows(breakoutIndexes);
    },
    highlightRows(breakoutIndexes) {
      const table = this.$refs['agents-table'];
      breakoutIndexes.forEach((index) => {
        const className = `wt-table__tr__${index}`;
        const row = table.$el.querySelector(`.${className}`);
        if (row) row.classList.add('wt-table__tr--highlight-breakout');
      });
    },
    clearHighlights() {
      const table = this.$refs['agents-table'];
      const highlightedRows = table.$el.querySelectorAll('.wt-table__tr--highlight-breakout');
      highlightedRows.forEach((row) => {
        row.classList.remove('wt-table__tr--highlight-breakout');
      });
    },
    async attachCall(id) {
      await this.attachToCall({ id });
      this.openWindow();
    },
  },
};
</script>

<style lang="scss" scoped>
.wt-table ::v-deep .wt-table__tr.wt-table__tr--highlight-breakout {
  // https://github.com/sass/node-sass/issues/2251
  background: HSLA(var(--_negative-color), 0.1);
}
</style>

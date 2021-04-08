<template>
  <wt-page-wrapper>
    <template slot="header">
      <wt-headline>
        <template slot="title">
          {{ $t('pages.agent.title') }}
        </template>
        <template slot="actions">
          <filter-search :namespace="filtersNamespace"/>
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
        <agents-filters :namespace="filtersNamespace"/>
        <div class="table-actions-wrapper">
          <filter-fields
            v-model="headers"
            entity="agents"
            :static-headers="['name']"
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
            <table-queues :item="item" />
          </template>
        </wt-table>
        <filter-pagination :is-next="isNext"/>
      </div>
    </template>
  </wt-page-wrapper>
</template>

<script>
import sortFilterMixin from '@webitel/ui-sdk/src/mixins/dataFilterMixins/sortFilterMixin';
import exportCSVMixin from '@webitel/ui-sdk/src/modules/CSVExport/mixins/exportCSVMixin';
import { mapActions } from 'vuex';
import tablePageMixin from '../../../app/mixins/supervisor-workspace/tablePageMixin';
import FilterPagination from '../../_shared/filters/components/filter-pagination.vue';
import FilterSearch from '../../_shared/filters/components/filter-search.vue';
import FilterFields from '../../_shared/filters/components/filter-table-fields.vue';
import AgentsAPI from '../api/agents';
import AgentsFilters from './_internals/agent-filters/agent-filters.vue';
import TableAgentStatus from './_internals/table-templates/table-agent-status.vue';
import TableAgentCallTime from './_internals/table-templates/table-agent-sum-call-time.vue';
import TableQueues from './_internals/table-templates/table-agent-queues.vue';
import TableAgent from './_internals/table-templates/table-agent.vue';

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

  created() {
    this.initCSVExport(AgentsAPI.getList, { filename: 'agents-status' });
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

    async attachCall(id) {
      await this.attachToCall({ id });
      this.openWindow();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

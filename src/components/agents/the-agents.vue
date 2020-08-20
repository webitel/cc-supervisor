<template>
  <page-wrapper>
    <template slot="header">
      <wt-headline>
        <template slot="title">
          {{ $t('pages.agent.title') }}
        </template>
        <template slot="actions">
          <filter-search/>
          <wt-button
            :loading="isCSVLoading"
            @click="download"
          >{{ $t('defaults.exportCSV') }}
          </wt-button>
        </template>
      </wt-headline>
    </template>

    <template slot="actions-panel">
      <filter-fields
        v-show="isFilterFieldsOpened"
        v-model="headers"
        :entity="'agents'"
        @close="isFilterFieldsOpened = false"
      ></filter-fields>
      <div class="actions-panel-wrapper">
        <agents-filters/>
        <wt-table-actions
          :icons="['refresh', 'column-select', 'filter-reset']"
          @input="tableActionsHandler"
        ></wt-table-actions>
      </div>
    </template>

    <template slot="main">
      <wt-loader v-show="isLoading"></wt-loader>
      <div class="table-wrapper" v-show="!isLoading">
        <wt-table
          :headers="headers"
          :data="data"
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

          <template slot="queues" slot-scope="{ item }">
            <table-agent-queues :item="item"/>
          </template>

          <template slot="teams" slot-scope="{ item }">
            <table-agent-teams :item="item"/>
          </template>
        </wt-table>
        <filter-pagination :is-next="isNext"/>
      </div>
    </template>
  </page-wrapper>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { agentFields } from '../../api/agents/agents';
import PageWrapper from '../supervisor-workspace/page-wrapper.vue';
import FilterSearch from '../../shared/filters/components/filter-search.vue';
import FilterFields from '../filters/filter-table-fields.vue';
import FilterPagination from '../../shared/filters/components/filter-pagination.vue';
import AgentsFilters from './_internals/agent-filters/agent-filters.vue';

import TableAgent from './_internals/table-templates/table-agent.vue';
import TableAgentStatus from './_internals/table-templates/table-agent-status.vue';
import TableAgentCallTime from './_internals/table-templates/table-agent-sum-call-time.vue';
import TableAgentQueues from './_internals/table-templates/table-agent-queues.vue';
import TableAgentTeams from './_internals/table-templates/table-agent-teams.vue';

import headersMixin from './_internals/agentHeadersMixin';
import sortFilterMixin from '../../shared/filters/mixins/sortFilterMixin';
import autoRefreshMixin from '../../mixins/autoRefresh/autoRefreshMixin';
import tableActionsHandlerMixin from '../../mixins/supervisor-workspace/tableActionsHandlerMixin';
import downloadCSVMixin from '../../mixins/downloadCSV/downloadCSVMixin';
import convertQuery from '../../utils/loadScripts';

export default {
  name: 'the-agents',
  components: {
    PageWrapper,
    FilterSearch,
    FilterFields,
    FilterPagination,
    AgentsFilters,
    TableAgent,
    TableAgentStatus,
    TableAgentCallTime,
    TableAgentQueues,
    TableAgentTeams,
  },
  mixins: [
    headersMixin,
    sortFilterMixin,
    autoRefreshMixin,
    downloadCSVMixin,
    tableActionsHandlerMixin,
  ],
  data() {
    return {
      isFilterFieldsOpened: false,
      // callNow: false,
      // attentionNow: false,
      isLoading: false,
    };
  },
  watch: {
    '$route.query': {
      async handler() {
        await this.initializeList();
        this.setAutoRefresh();
      },
      immediate: true,
    },
    // callNow(value) {
    //   if (value) {
    //     this.setValueToQuery({
    //       filterQuery: 'callNow',
    //       value: value.toString(),
    //     });
    //   } else {
    //     this.setValueToQuery({
    //       filterQuery: 'callNow',
    //       value: undefined,
    //     });
    //   }
    // },
    // attentionNow(value) {
    //   if (value) {
    //     this.setValueToQuery({
    //       filterQuery: 'attentionNow',
    //       value: value.toString(),
    //     });
    //   } else {
    //     this.setValueToQuery({
    //       filterQuery: 'attentionNow',
    //       value: undefined,
    //     });
    //   }
    // },
  },
  mounted() {
    // this.callNow = (this.getValueByQuery({ filterQuery: 'callNow' }) === 'true') || false;
    // this.attentionNow = (
    //   this.getValueByQuery({ filterQuery: 'attentionNow' }) === 'true') || false;
  },
  computed: {
    ...mapState('agents', {
      data: (state) => state.dataList,
      isNext: (state) => state.isNext,
    }),
  },
  methods: {
    ...mapActions('agents', {
      loadDataList: 'FETCH_LIST',
    }),
    ...mapActions('call', {
      attachToCall: 'ATTACH_TO_CALL',
      openWindow: 'EAVESDROP_OPEN_WINDOW',
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
      const params = this.getQueryParams();
      return this.loadDataList(params);
    },

    download() {
      this.downloadCSV({
        fields: agentFields,
        items: this.data,
      });
    },
    getQueryParams() {
      const { query } = this.$route;
      return convertQuery(query);
    },
    async attachCall(id) {
      await this.attachToCall({ id });
      this.openWindow();
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../css/supervisor-workspace/table-page/table-page';
</style>

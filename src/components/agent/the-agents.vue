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
          :icons="['refresh', 'column-select']"
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
            <table-agent-call-time :item="item"/>
          </template>

          <template slot="queues" slot-scope="{ item }">
            <table-agent-queues :item="item"/>
          </template>

          <template slot="teams" slot-scope="{ item }">
            <table-agent-teams :item="item"/>
          </template>

          <template slot="attentions" slot-scope="{ item }">
            <table-agent-attentions :item="item"/>
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
import FilterSearch from '../filters/filter-search.vue';
import FilterFields from '../filters/filter-table-fields.vue';
import FilterPagination from '../filters/filter-pagination.vue';
import AgentsFilters from './_internals/agent-filters/agent-filters.vue';

import TableAgent from './_internals/table-templates/table-agent.vue';
import TableAgentAttentions from './_internals/table-templates/table-agent-attentions.vue';
import TableAgentStatus from './_internals/table-templates/table-agent-status.vue';
import TableAgentCallTime from './_internals/table-templates/table-agent-sum-call-time.vue';
import TableAgentQueues from './_internals/table-templates/table-agent-queues.vue';
import TableAgentTeams from './_internals/table-templates/table-agent-teams.vue';

import headersMixin from './_internals/headersMixin';
import sortFilterMixin from '../../mixins/filters/sortFilterMixin';
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
    TableAgentAttentions,
    TableAgentStatus,
    TableAgentCallTime,
    TableAgentQueues,
    TableAgentTeams,
  },
  mixins: [
    headersMixin,
    sortFilterMixin,
    downloadCSVMixin,
    tableActionsHandlerMixin,
  ],
  data() {
    return {
      isFilterFieldsOpened: false,
      callNow: false,
      attentionNow: false,
      isLoading: false,
      autorefresh: null,
    };
  },
  watch: {
    '$route.query': {
      async handler() {
        await this.loadList();
        if (this.autorefresh) clearInterval(this.autorefresh);
        this.autorefresh = setInterval(this.loadList, this.timer);
      },
      immediate: true,
    },
    callNow(value) {
      if (value) {
        this.setQueryValue({
          filterQuery: 'callNow',
          value: value.toString(),
        });
      } else {
        this.setQueryValue({
          filterQuery: 'callNow',
          value: undefined,
        });
      }
    },
    attentionNow(value) {
      if (value) {
        this.setQueryValue({
          filterQuery: 'attentionNow',
          value: value.toString(),
        });
      } else {
        this.setQueryValue({
          filterQuery: 'attentionNow',
          value: undefined,
        });
      }
    },
  },
  mounted() {
    this.callNow = (this.getValueByQuery({ filterQuery: 'callNow' }) === 'true') || false;
    this.attentionNow = (
      this.getValueByQuery({ filterQuery: 'attentionNow' }) === 'true') || false;
  },
  destroyed() {
    clearInterval(this.autorefresh);
  },
  computed: {
    ...mapState('agents', {
      data: (state) => state.dataList,
      isNext: (state) => state.isNext,
    }),
    timer: () => +localStorage.getItem('autorefresh'),
  },
  methods: {
    ...mapActions('agents', {
      loadDataList: 'FETCH_LIST',
    }),
    ...mapActions('call', {
      attachToCall: 'ATTACH_TO_CALL',
      openWindow: 'EAVESDROP_OPEN_WINDOW',
    }),
    async loadList() {
      this.isLoading = true;
      const params = this.getQueryParams();
      try {
        await this.loadDataList(params);
      } catch {
      } finally {
        this.isLoading = false;
      }
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

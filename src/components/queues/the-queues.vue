<template>
  <page-wrapper>
    <template slot="header">
      <wt-headline>
        <template slot="title">
          {{ $t('pages.queue.title') }}
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
        :entity="'queues'"
        @close="isFilterFieldsOpened = false"
      ></filter-fields>
      <div class="actions-panel-wrapper">
        <queue-filters/>
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
          <template slot="queue" slot-scope="{ item }">
            <table-queue :item="item"/>
          </template>
          <template slot="team" slot-scope="{ item }">
            <table-team :item="item"/>
          </template>
          <template slot="agents" slot-scope="{ item }">
            <table-agents :item="item"/>
          </template>
          <template slot="members" slot-scope="{ item }">
            <table-members :item="item"/>
          </template>
        </wt-table>
        <filter-pagination :is-next="isNext"/>
      </div>
    </template>
  </page-wrapper>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import convertQuery from '../../utils/loadScripts';
import { queueFields } from '../../api/queues/queues';
import FilterFields from '../filters/filter-table-fields.vue';
import FilterSearch from '../../shared/filters/components/filter-search.vue';
import FilterPagination from '../../shared/filters/components/filter-pagination.vue';

import PageWrapper from '../supervisor-workspace/page-wrapper.vue';
import QueueFilters from './_internals/queue-filters/queue-filters.vue';
import TableQueue from './_internals/table-templates/table-queue.vue';
import TableAgents from './_internals/table-templates/table-agents.vue';
import TableTeam from './_internals/table-templates/table-team.vue';
import TableMembers from './_internals/table-templates/table-members.vue';
import headersMixin from './_internals/queueHeadersMixin';
import sortFilterMixin from '../../shared/filters/mixins/sortFilterMixin';
import downloadCSVMixin from '../../mixins/downloadCSV/downloadCSVMixin';
import tableActionsHandlerMixin from '../../mixins/supervisor-workspace/tableActionsHandlerMixin';
import autoRefreshMixin from '../../mixins/autoRefresh/autoRefreshMixin';

export default {
  name: 'the-queues',
  components: {
    FilterSearch,
    FilterFields,
    FilterPagination,
    QueueFilters,
    PageWrapper,
    TableQueue,
    TableAgents,
    TableTeam,
    TableMembers,
  },
  mixins: [
    headersMixin,
    sortFilterMixin,
    autoRefreshMixin,
    downloadCSVMixin,
    tableActionsHandlerMixin,
  ],
  data: () => ({
    isFilterFieldsOpened: false,
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

  computed: {
    ...mapState('queues', {
      data: (state) => state.dataList,
      isNext: (state) => state.isNext,
    }),
  },

  methods: {
    ...mapActions('queues', {
      loadDataList: 'FETCH_LIST',
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
        fields: queueFields,
        items: this.data,
      });
    },

    getQueryParams() {
      const { query } = this.$route;
      return convertQuery(query);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../css/supervisor-workspace/table-page/table-page';
</style>
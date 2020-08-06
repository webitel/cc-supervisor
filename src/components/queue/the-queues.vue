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
            @click.native="download"
          >{{ $t('defaults.exportCSV') }}
          </wt-button>
        </template>
      </wt-headline>
    </template>
    <template slot="actions-panel">
      <queue-filters/>
    </template>
    <template slot="main">
      <wt-loader v-show="isLoading"></wt-loader>
      <div class="table-wrapper" v-show="!isLoading">
        <wt-table
          :headers="headers"
          :data="data"
          sortable
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
          <template slot="actions-header">
            <filter-fields
              :entity="'queues'"
              :headers="headers"
            />
          </template>
        </wt-table>
        <wt-pagination
          :size="10"
          :next="true"
          :prev="true"
        ></wt-pagination>
      </div>
    </template>
  </page-wrapper>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import convertQuery from '../../utils/loadScripts';
import { queueFields } from '../../api/queues/queues';
import FilterFields from '../filters/filter-table-fields.vue';
import FilterSearch from '../filters/filter-search.vue';

import PageWrapper from '../supervisor-workspace/page-wrapper.vue';
import QueueFilters from './_internals/queue-filters/queue-filters.vue';
import TableQueue from './_internals/table-templates/table-queue.vue';
import TableAgents from './_internals/table-templates/table-agents.vue';
import TableTeam from './_internals/table-templates/table-team.vue';
import TableMembers from './_internals/table-templates/table-members.vue';
import headersMixin from './_internals/headersMixin';
import sortFilterMixin from '../../mixins/filters/sortFilterMixin';
import downloadCSVMixin from '../../mixins/downloadCSV/downloadCSVMixin';

export default {
  name: 'the-queues',
  components: {
    FilterSearch,
    FilterFields,
    QueueFilters,
    PageWrapper,
    TableQueue,
    TableAgents,
    TableTeam,
    TableMembers,
  },
  mixins: [headersMixin, sortFilterMixin, downloadCSVMixin],
  data: () => ({
    isNext: false,
    isLoading: false,
    autorefresh: null,
  }),

  watch: {
    '$route.query': {
      async handler() {
        await this.loadList();
        if (this.autorefresh) clearInterval(this.autorefresh);
        this.autorefresh = setInterval(this.loadList, this.timer);
      },
      immediate: true,
    },
  },

  destroyed() {
    clearInterval(this.autorefresh);
  },

  computed: {
    ...mapState('queues', {
      data: (state) => state.dataList,
    }),
    timer: () => +localStorage.getItem('autorefresh'),
  },

  methods: {
    ...mapActions('queues', {
      loadDataList: 'FETCH_LIST',
    }),

    async loadList() {
      this.isLoading = true;
      const params = this.getQueryParams();
      try {
        this.isNext = await this.loadDataList(params);
      } catch {
      } finally {
        this.isLoading = false;
      }
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
.wt-button {
  margin-left: 20px;
}

.table-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1 1 100%;
  width: 100%;
  box-sizing: border-box;

  .wt-table {
  }

  .wt-pagination {
    margin-top: 20px;
    margin-left: auto;
  }
}
</style>

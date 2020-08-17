<template>
  <page-wrapper>
    <template slot="header">
      <wt-headline>
        <template slot="title">
          {{ $t('pages.activeCall.title') }}
        </template>
        <template slot="actions">
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
        :entity="'active-calls'"
        @close="isFilterFieldsOpened = false"
      ></filter-fields>
      <div class="actions-panel-wrapper">
        <active-calls-filters/>
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
          <template slot="direction" slot-scope="{ item }">
            <table-direction :item="item"/>
          </template>
          <template slot="from" slot-scope="{ item }">
            <table-from :item="item"/>
          </template>
          <template slot="to" slot-scope="{ item }">
            <table-to :item="item"/>
          </template>
          <template slot="agent" slot-scope="{ item }">
            <table-agent :item="item"/>
          </template>
          <template slot="queue" slot-scope="{ item }">
            <table-queue :item="item"/>
          </template>
          <template slot="user" slot-scope="{ item }">
            <table-user :item="item"/>
          </template>
          <template slot="state" slot-scope="{ item }">
            <table-active-call-state :item="item"/>
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
import { activeCallFields } from '../../api/activeCalls/activeCalls';
import PageWrapper from '../supervisor-workspace/page-wrapper.vue';
import ActiveCallsFilters from './_internals/active-calls-filters/active-calls-filters.vue';
import FilterFields from '../filters/filter-table-fields.vue';
import FilterPagination from '../../shared/filters/components/filter-pagination.vue';
import TableDirection from './_internals/table-templates/table-direction.vue';
import TableFrom from './_internals/table-templates/table-from.vue';
import TableTo from './_internals/table-templates/table-to.vue';
import TableAgent from './_internals/table-templates/table-agent.vue';
import TableQueue from './_internals/table-templates/table-queue.vue';
import TableUser from './_internals/table-templates/table-user.vue';
import TableActiveCallState from './_internals/table-templates/table-active-call-state.vue';
import headersMixin from './_internals/activeCallHeadersMixin';
import downloadCSVMixin from '../../mixins/downloadCSV/downloadCSVMixin';
import sortFilterMixin from '../../shared/filters/mixins/sortFilterMixin';
import tableActionsHandlerMixin from '../../mixins/supervisor-workspace/tableActionsHandlerMixin';

export default {
  name: 'the-active-calls',
  components: {
    PageWrapper,
    FilterFields,
    FilterPagination,
    TableDirection,
    TableFrom,
    TableTo,
    TableAgent,
    TableQueue,
    TableUser,
    TableActiveCallState,
    ActiveCallsFilters,
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
  },
  destroyed() {
    clearInterval(this.autorefresh);
  },
  computed: {
    ...mapState('activeCalls', {
      data: (state) => state.dataList,
      isNext: (state) => state.isNext,
    }),
    timer: () => +localStorage.getItem('autorefresh'),
  },
  methods: {
    ...mapActions('activeCalls', {
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
        fields: activeCallFields,
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

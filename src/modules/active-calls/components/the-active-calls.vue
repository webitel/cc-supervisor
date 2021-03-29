<template>
  <wt-page-wrapper>
    <template slot="header">
      <wt-headline>
        <template slot="title">
          {{ $t('pages.activeCall.title') }}
        </template>
      </wt-headline>
    </template>

    <template slot="actions-panel">
      <div class="actions-panel-wrapper">
        <active-calls-filters :namespace="namespace"/>
        <div class="table-actions-wrapper">
          <filter-fields
            v-model="headers"
            entity="active-calls"
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
            <table-active-call-state :item="item" @attach-call="attachCall"/>
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
import ActiveCallsFilters from './_internals/active-calls-filters/active-calls-filters.vue';
import FilterFields from '../../_shared/filters/components/filter-table-fields.vue';
import FilterPagination from '../../_shared/filters/components/filter-pagination.vue';
import TableDirection from './_internals/table-templates/table-direction.vue';
import TableFrom from './_internals/table-templates/table-from.vue';
import TableTo from './_internals/table-templates/table-to.vue';
import TableAgent from './_internals/table-templates/table-agent.vue';
import TableQueue from './_internals/table-templates/table-queue.vue';
import TableUser from './_internals/table-templates/table-user.vue';
import TableActiveCallState from './_internals/table-templates/table-active-call-state.vue';
import headersMixin from './_internals/activeCallHeadersMixin';
import autoRefreshMixin from '../../../app/mixins/autoRefresh/autoRefreshMixin';
import tableActionsHandlerMixin from '../../../app/mixins/supervisor-workspace/tableActionsHandlerMixin';

export default {
  name: 'the-active-calls',
  components: {
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
    autoRefreshMixin,
    tableActionsHandlerMixin,
  ],
  data() {
    return {
      namespace: 'activeCalls',
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
  },
  computed: {
    ...mapState('activeCalls', {
      dataList: (state) => state.dataList,
      isNext: (state) => state.isNext,
    }),
  },
  methods: {
    ...mapActions('activeCalls', {
      loadDataList: 'FETCH_LIST',
    }),
    ...mapActions('activeCalls/filters', {
      dispatchResetFilters: 'RESET_FILTERS',
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
      const { query } = this.$route;
      return this.loadDataList(query);
    },

    async attachCall(id) {
      await this.attachToCall({ id });
      this.openWindow();
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../app/css/supervisor-workspace/table-page/table-page';
</style>

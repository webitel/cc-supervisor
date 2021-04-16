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
      <active-calls-filters :namespace="filtersNamespace"/>
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
              entity="active-calls"
            ></filter-fields>
          </wt-table-actions>
          <wt-table
            :headers="headers"
            :data="dataList"
            :grid-actions="false"
            :selectable="false"
            sortable
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
      </section>
    </template>
  </wt-page-wrapper>
</template>

<script>
import sortFilterMixin from '@webitel/ui-sdk/src/mixins/dataFilterMixins/sortFilterMixin';
import { mapActions } from 'vuex';
import tablePageMixin from '../../../app/mixins/supervisor-workspace/tablePageMixin';
import FilterPagination from '../../_shared/filters/components/filter-pagination.vue';
import FilterFields from '../../_shared/filters/components/filter-table-fields.vue';
import ActiveCallsFilters from '../modules/filters/components/active-calls-filters.vue';
import TableActiveCallState from './_internals/table-templates/table-active-call-state.vue';
import TableAgent from './_internals/table-templates/table-agent.vue';
import TableDirection from './_internals/table-templates/table-direction.vue';
import TableFrom from './_internals/table-templates/table-from.vue';
import TableQueue from './_internals/table-templates/table-queue.vue';
import TableTo from './_internals/table-templates/table-to.vue';
import TableUser from './_internals/table-templates/table-user.vue';

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
    tablePageMixin,
    sortFilterMixin,
  ],
  data: () => ({
    namespace: 'activeCalls',
  }),
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

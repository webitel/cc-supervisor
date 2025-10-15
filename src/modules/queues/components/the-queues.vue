<template>
  <wt-page-wrapper>
    <template #header>
      <wt-headline>
        <template #title>
          {{ t('pages.queue.title') }}
        </template>
        <template #actions>
          <dynamic-filter-search
            :filters-manager="piniaFiltersManager"
            :is-filters-restoring="piniaIsFiltersRestoring"
            :value="searchValue"
            @filter:add="piniaAddFilter"
            @filter:update="piniaUpdateFilter"
            @filter:delete="piniaDeleteFilter"
            @update:search-mode="piniaUpdateSearchMode"
          />
          <wt-button
            :loading="isCSVLoading"
            :disabled="!piniaDataList.length"
            @click="exportCSV"
          >{{ t('defaults.exportCSV') }}
          </wt-button>
        </template>
      </wt-headline>
    </template>
    <template #actions-panel>
      <queue-filters :namespace="filtersNamespace"/>
    </template>
    <template #main>
      <section class="main-section-wrapper">
        <wt-loader v-show="piniaIsLoading"></wt-loader>
        <div v-show="!piniaIsLoading" class="table-wrapper">
          <wt-table
            :headers="piniaHeaders"
            :data="piniaDataList"
            sortable
            :selectable="false"
            :grid-actions="false"
            @sort="piniaUpdateSort"
          >
            <template #queue="{ item }">
              <table-queue :item="item" />
            </template>
            <template #agents="{ item }">
              <table-agents :status="item.agentStatus" />
            </template>
            <template #free="{ item }">
              <div v-if="item.agentStatus">
                {{ item.agentStatus.free }}
              </div>
            </template>
            <template #team="{ item }">
              <table-team :item="item" />
            </template>
            <template #members="{ item }">
              <table-members :item="item" />
            </template>
            <template #queue-footer>
              {{ t('reusable.total') }}
            </template>
            <template #agents-footer>
              <table-agents :status="aggs"/>
            </template>
            <template #free-footer>
              {{ aggs.free }}
            </template>
          </wt-table>
        </div>
      </section>
    </template>
  </wt-page-wrapper>
</template>

<script>
import { DynamicFilterSearchComponent as DynamicFilterSearch } from '@webitel/ui-datalist/filters';
import { useCSVExport } from '@webitel/ui-sdk/src/modules/CSVExport/composables/useCSVExport';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import tablePageMixin from '../../../app/mixins/supervisor-workspace/tablePageMixin';
import QueuesAPI from '../api/queues';
import QueueFilters from '../modules/filters/components/queue-filters.vue';
import { QueuesNamespace } from '../namespace';
import { useQueuesTableStore } from '../stores/queues';
import TableAgents from './_internals/table-templates/table-agents.vue';
import TableMembers from './_internals/table-templates/table-members.vue';
import TableQueue from './_internals/table-templates/table-queue.vue';
import TableTeam from './_internals/table-templates/table-team.vue';

export default {
  name: 'TheQueues',
  components: { QueueFilters, TableMembers, TableTeam, TableQueue, TableAgents, DynamicFilterSearch },
  mixins: [tablePageMixin],
  setup() {
    const { t } = useI18n();

    const tableStore = useQueuesTableStore();
    const filtersNamespace = `${QueuesNamespace}/filters`;

    // Get all values from Pinia store with 'pinia' prefix to avoid conflicts with tablePageMixin
    const {
      dataList: piniaDataList,
      isLoading: piniaIsLoading,
      page: piniaPage,
      size: piniaSize,
      next: piniaNext,
      headers: piniaHeaders,
      isFiltersRestoring: piniaIsFiltersRestoring,
      filtersManager: piniaFiltersManager,
      selected: piniaSelected,
    } = storeToRefs(tableStore);

    // Get all methods from Pinia store with 'pinia' prefix to avoid conflicts with tablePageMixin
    const {
      initialize: piniaInitialize,
      loadDataList: piniaLoadDataList,
      updatePage: piniaUpdatePage,
      updateSize: piniaUpdateSize,
      updateSort: piniaUpdateSort,
      updateShownHeaders: piniaUpdateShownHeaders,
      addFilter: piniaAddFilter,
      updateFilter: piniaUpdateFilter,
      deleteFilter: piniaDeleteFilter,
      updateSearchMode: piniaUpdateSearchMode,
    } = tableStore;

    const { exportCSV, isCSVLoading, initCSVExport } = useCSVExport({
      selected: piniaSelected,
    });
    initCSVExport(QueuesAPI.getList, { filename: 'queues-stats' });

    const searchValue = computed(() => piniaFiltersManager.value.filters.get('search')?.value || '');

    piniaInitialize();

    return {
      t,

      piniaDataList,
      piniaIsLoading,
      piniaPage,
      piniaSize,
      piniaNext,
      piniaHeaders,
      piniaIsFiltersRestoring,
      piniaFiltersManager,
      piniaSelected,

      piniaInitialize,
      piniaLoadDataList,
      piniaUpdatePage,
      piniaUpdateSize,
      piniaUpdateSort,
      piniaUpdateShownHeaders,
      piniaAddFilter,
      piniaUpdateFilter,
      piniaDeleteFilter,
      piniaUpdateSearchMode,

      exportCSV,
      isCSVLoading,

      searchValue,

      filtersNamespace,
    };
  },
  data() {
    return {
      namespace: QueuesNamespace,
      TableAgents,
      TableMembers,
      TableQueue,
      TableTeam,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>

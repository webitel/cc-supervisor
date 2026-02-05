<template>
  <wt-page-wrapper
    :actions-panel="showActionsPanel"
    class="table-page"
  >
    <template #header>
      <wt-headline>
        <template #title>
          {{ t('pages.queue.title') }}
        </template>
        <template #actions>
          <dynamic-filter-search
            :filters-manager="filtersManager"
            :is-filters-restoring="isFiltersRestoring"
            :value="searchValue"
            @filter:add="addFilter"
            @filter:update="updateFilter"
            @filter:delete="deleteFilter"
            @update:search-mode="updateSearchMode"
          />
          <wt-button
            :loading="isCSVLoading"
            :disabled="!dataList.length"
            @click="exportCSV"
          >{{ t('defaults.exportCSV') }}
          </wt-button>
        </template>
      </wt-headline>
    </template>
    <template #actions-panel>
      <queue-filters-panel @hide="showActionsPanel = false" />
    </template>
    <template #main>
      <section class="table-section">
        <header class="table-title">
          <div>
            <!-- title should be here -->
          </div>
            <wt-action-bar
            :include="[
              IconAction.FILTERS,
              IconAction.REFRESH,
              IconAction.COLUMNS
            ]"
            class="table-section__actions-wrapper"
            @click:refresh="loadDataList"
          >
            <template #columns>
              <wt-table-column-select
                :headers="headers"
                @change="updateShownHeaders"
              />
            </template>
            <template #filters>
              <wt-badge :hidden="!hasFilters">
                <wt-icon-action
                  action="filters"
                  @click="showActionsPanel = !showActionsPanel"
                />
              </wt-badge>
            </template>
          </wt-action-bar>
        </header>
        <wt-loader v-show="isLoading && !dataList.length" />
        <wt-empty
          v-if="showEmpty"
          :image="imageEmpty"
          :text="textEmpty"
        />
        <div
          v-show="dataList?.length"
          class="table-section__table-wrapper"
        >

          <wt-table
            :headers="headers"
            :data="dataList"
            sortable
            :selectable="false"
            :grid-actions="false"
            @sort="updateSort"
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
              <table-agents :status="aggs" />
            </template>
            <template #free-footer>
              {{ aggs.free }}
            </template>
          </wt-table>

          <wt-pagination
            :next="next"
            :prev="page > 1"
            :size="size"
            debounce
            @change="updateSize"
            @next="updatePage(page + 1)"
            @prev="updatePage(page - 1)"
          />
        </div>
      </section>
    </template>
  </wt-page-wrapper>
</template>

<script setup>
import { DynamicFilterSearchComponent as DynamicFilterSearch } from '@webitel/ui-datalist/filters';
import IconAction from '@webitel/ui-sdk/src/enums/IconAction/IconAction.enum.js';
import { WtEmpty } from '@webitel/ui-sdk/components';
import { useCSVExport } from '@webitel/ui-sdk/src/modules/CSVExport/composables/useCSVExport';
import { useTableEmpty } from '@webitel/ui-sdk/src/modules/TableComponentModule/composables/useTableEmpty';
import { storeToRefs } from 'pinia';
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useTableAutoRefresh } from '../../../app/composables/useTableAutoRefresh';

import QueuesAPI from '../api/queues';
import QueueFiltersPanel from '../modules/filters/components/queue-filters-panel.vue';
import { useQueuesTableStore } from '../stores/queues';
import TableAgents from './_internals/table-templates/table-agents.vue';
import TableMembers from './_internals/table-templates/table-members.vue';
import TableQueue from './_internals/table-templates/table-queue.vue';
import TableTeam from './_internals/table-templates/table-team.vue';

const { t } = useI18n();

const tableStore = useQueuesTableStore();
const showActionsPanel = ref(false);

const {
  dataList,
  isLoading,
  page,
  size,
  next,
  headers,
  isFiltersRestoring,
  filtersManager,
  selected,
  aggs,
} = storeToRefs(tableStore);

const hasFilters = computed(() => filtersManager.value.getFiltersList()?.length);

const {
  initialize,
  loadDataList,
  updatePage,
  updateSize,
  updateSort,
  updateShownHeaders,
  addFilter,
  updateFilter,
  deleteFilter,
  updateSearchMode,
} = tableStore;

const { exportCSV, isCSVLoading, initCSVExport } = useCSVExport({
  selected,
});

initCSVExport(QueuesAPI.getList, { filename: 'queues-stats' });

const searchValue = computed(() => filtersManager.value.filters.get('search')?.value || '');

const {
  showEmpty,
  image: imageEmpty,
  text: textEmpty,
} = useTableEmpty({
  dataList,
  filters: computed(() => filtersManager.value.getFiltersList()),
  isLoading,
  error: computed(() => null),
});

const {
  setAutoRefresh,
  clearAutoRefresh,
} = useTableAutoRefresh(loadDataList)

initialize();

onMounted(() => {
  setAutoRefresh()
})

onUnmounted(() => {
  clearAutoRefresh()
})
</script>

<style
  lang="scss"
  scoped
></style>

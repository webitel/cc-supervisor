<template>
  <section class="table-section">
    <header class="agent-status-history-tab__title table-title">
      <h3 class="table-title__title">
        {{ t('pages.card.statusHistory.title') }}
      </h3>
      <wt-action-bar
        :include="[
          IconAction.FILTERS,
          IconAction.REFRESH,
          IconAction.COLUMNS
        ]"
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
              @click="emit('toggle-filter')"
            />
          </wt-badge>
        </template>
      </wt-action-bar>
    </header>

    <wt-empty
      v-if="showEmpty"
      :image="imageEmpty"
      :text="textEmpty"
    />
    <wt-loader v-show="isLoading" />

    <div
      v-if="!showEmpty && dataList?.length"
      v-show="!isLoading"
      class="table-section__table-wrapper"
    >
      <wt-table
        :headers="headers"
        :data="dataList"
        :selectable="false"
        :grid-actions="false"
        sortable
        resizable-columns
        reorderable-columns
        @sort="updateSort"
        @column-resize="columnResize"
        @column-reorder="columnReorder"
      >
        <template #state="{ item }">
          <table-agent-state :item="item" />
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

<script lang="ts" setup>
import { IconAction } from '@webitel/ui-sdk/enums';
import { useTableEmpty } from '@webitel/ui-sdk/src/modules/TableComponentModule/composables/useTableEmpty';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

import { initializeDefaultFilters } from '../modules/filters/configs/initializeDefaultFilters';
import {
	agentStatusHistoryAgentId,
	useAgentStatusHistoryTableStore,
} from '../stores/datalist/agent-status-history';
import TableAgentState from './_internals/table-templates/table-agent-state.vue';

const emit = defineEmits<{
	'toggle-filter': [];
}>();

const { t } = useI18n();
const route = useRoute();

const tableStore = useAgentStatusHistoryTableStore();

const {
	dataList,
	error,
	isLoading,
	page,
	size,
	next,
	headers,
	filtersManager,
} = storeToRefs(tableStore);

const hasFilters = computed(
	() => filtersManager.value.getFiltersList()?.length,
);

const {
	initialize,
	loadDataList,
	updatePage,
	updateSize,
	updateSort,
	updateShownHeaders,
	columnResize,
	columnReorder,
} = tableStore;

const {
	showEmpty,
	image: imageEmpty,
	text: textEmpty,
} = useTableEmpty({
	dataList,
	error,
	filters: computed(() => filtersManager.value.getAllValues()),
	isLoading,
});

agentStatusHistoryAgentId.value = route.params.id as string;
initializeDefaultFilters();
initialize();
</script>

<style
  lang="scss"
  scoped
>
.agent-status-history-tab__title {
  padding: var(--spacing-xs);
  margin: 0;
}

.wt-action-bar {
  margin-left: auto;
}
</style>

<template>
  <wt-page-wrapper
    :actions-panel="showActionsPanel"
    class="table-page"
  >
    <template #header>
      <wt-headline>
        <template #title>
          {{ t('pages.activeCall.title') }}
        </template>
      </wt-headline>
    </template>

    <template #actions-panel>
      <active-calls-filters-panel @hide="showActionsPanel = false" />
    </template>

    <template #main>
      <section class="table-section">
        <header class="table-title">
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

        <div class="table-section__table-wrapper">
          <wt-empty
            v-if="showEmpty"
            :image="imageEmpty"
            :text="textEmpty"
            :size="ComponentSize.LG"
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
              sortable
              :selectable="false"
              :grid-actions="false"
              resizable-columns
              reorderable-columns
              @sort="updateSort"
              @column-resize="columnResize"
              @column-reorder="columnReorder"
            >
              <template #direction="{ item }">
                <table-direction :item="item" />
              </template>
              <template #from="{ item }">
                <div v-if="item.from">
                  {{ item.from.number }}
                </div>
              </template>
              <template #to="{ item }">
                <div v-if="item.to">
                  {{ item.to.number }}
                </div>
              </template>
              <template #agent="{ item }">
                <div v-if="item.agent">
                  {{ item.agent.name }}
                </div>
              </template>
              <template #queue="{ item }">
                <div v-if="item.queue">
                  {{ item.queue.name }}
                </div>
              </template>
              <template #user="{ item }">
                <div v-if="item.user">
                  {{ item.user.name }}
                </div>
              </template>
              <template #state="{ item }">
                <table-active-call-state
                  :item="item"
                  @attach-call="attachCall"
                />
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
        </div>
      </section>
    </template>
  </wt-page-wrapper>
</template>

<script setup>
import { WtEmpty } from '@webitel/ui-sdk/components';
import { ComponentSize, IconAction } from '@webitel/ui-sdk/enums';
import { useTableEmpty } from '@webitel/ui-sdk/src/modules/TableComponentModule/composables/useTableEmpty';
import { storeToRefs } from 'pinia';
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';

import { useTableAutoRefresh } from '../../../app/composables/useTableAutoRefresh';
import DummyAfterSearchDark from '../assets/sv-dummy-after-search-dark.svg';
import DummyAfterSearchLight from '../assets/sv-dummy-after-search-light.svg';
import DummyDark from '../assets/sv-dummy-dark.svg';
import DummyLight from '../assets/sv-dummy-light.svg';
import ActiveCallsFiltersPanel from '../modules/filters/components/active-calls-filters-panel.vue';
import { useActiveCallsTableStore } from '../stores/datalist/active-calls';
import TableActiveCallState from './_internals/table-templates/table-active-call-state.vue';
import TableDirection from './_internals/table-templates/table-direction.vue';

const { t } = useI18n();

/*
 * TODO: need to refactor call store to remove usage of vuex store in component
 *
 * [WTEL-7283](https://webitel.atlassian.net/browse/WTEL-7283)
 * */
const store = useStore();

const tableStore = useActiveCallsTableStore();
const showActionsPanel = ref(false);

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
} = useTableEmpty(
	{
		dataList,
		error,
		filters: computed(() => filtersManager.value.getAllValues()),
		isLoading,
	},
	computed(() => ({
		image: {
			empty: {
				dark: DummyDark,
				light: DummyLight,
			},
			filters: {
				dark: DummyAfterSearchDark,
				light: DummyAfterSearchLight,
			},
		},
		text: {
			empty: t('pages.activeCall.empty.workspace'),
		},
	})),
);

const { setAutoRefresh, clearAutoRefresh } = useTableAutoRefresh(loadDataList);

const attachCall = async (id) => {
	await store.dispatch('call/ATTACH_TO_CALL', {
		id,
	});
	await store.dispatch('call/EAVESDROP_OPEN_WINDOW');
};

initialize();

onMounted(() => {
	setAutoRefresh();
});

onUnmounted(() => {
	clearAutoRefresh();
});
</script>

<style
  lang="scss"
  scoped
>
.wt-action-bar {
  margin-left: auto;
}

.table-section__actions-wrapper {
  justify-content: flex-end;
}
</style>

<template>
  <wt-page-wrapper
    class="agents table-page"
    :actions-panel="showActionsPanel"
  >
    <template #header>
      <wt-headline>
        <template #title>
          {{ t('pages.agent.title') }}
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
            :disabled="!dataList.length || !hasExportDataGridAccess"
            :loading="isCSVLoading"
            @click="exportCSV"
          >{{ t('defaults.exportCSV') }}
          </wt-button>
        </template>
      </wt-headline>
    </template>

    <template #actions-panel>
      <agents-filters-panel />
    </template>

    <template #main>
      <section class="table-section">
        <header
          class="table-title"
        >
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
                :headers="filteredTableHeaders"
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

        <div
          class="table-section__table-wrapper"
        >
          <wt-empty
            v-if="showEmpty"
            :image="imageEmpty"
            :text="textEmpty"
          />
          <wt-loader v-show="isLoading" />
          <div
            v-if="dataList?.length"
            v-show="!isLoading"
            class="table-section__table-wrapper"
          >
            <wt-table
              ref="agents-table"
              :data="dataList"
              :headers="headers"
              sortable
              resizable-columns
              reorderable-columns
              :selectable="false"
              :row-style="rowStyle"
              class="agents-table"
              @sort="updateSort"
              @column-resize="columnResize"
              @column-reorder="columnReorder"
            >
              <template #name="{ item }">
                <table-agent :item="item" />
              </template>
              <template #status="{ item }">
                <table-agent-status :item="item" />
              </template>
              <template #callTime="{ item }">
                <table-agent-call-time
                  :item="item"
                  @attach-call="attachCall"
                />
              </template>
              <template #team="{ item }">
                <div v-if="item.team">
                  {{ item.team.name }}
                </div>
              </template>
              <template #queues="{ item }">
                <wt-display-chip-items :items="item.queues" />
              </template>
              <template #statusComment="{ item }">
                <div>
                  <agent-status-comment
                    v-if="item.statusComment && item.status === AgentStatus.Pause"
                    :status-comment="item.statusComment"
                  />
                </div>
              </template>
              <template #actions="{ item }">
                <wt-icon
                  v-if="item.descTrack && isControlAgentScreenAllow && item.agentId !== screenSharingLoadingAgentId"
                  :color="getDeskTrackIconColor(item.user.id)"
                  icon="desk-track"
                  size="md"
                  class="agents-table__desk-track-icon"
                  @click="connect(item)"
                ></wt-icon>
                <wt-loader
                  v-else-if="screenSharingLoadingAgentId === item.agentId"
                  :size="ComponentSize.SM"
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

      <div v-if="mediaStream">
        <screen-sharing
          :class="{ 'screen-sharing--moved': isScreenSharingMoved }"
          v-for="session in cli?.spyScreenSessions"
          :key="`screen-${session.id}`"
          :stream="mediaStream"
          :session="session"
          :screenshot-status="screenshotStatus"
          :screenshot-is-loading="screenshotIsLoading"
          :record-is-loading="recordIsLoading"
          :username="selectedAgentToSpyScreen?.user.name"
          :closable="false"
          @close-session="closeSession(session)"
          @make-screenshot="makeScreenshot(session)"
          @toggle-record="toggleRecordAction(session)"
        />
      </div>
    </template>
  </wt-page-wrapper>
</template>

<script lang="ts" setup>
import { AgentsAPI } from '@webitel/api-services/api';
import { DynamicFilterSearchComponent as DynamicFilterSearch } from '@webitel/ui-datalist/filters';
import { WtDisplayChipItems, WtEmpty } from '@webitel/ui-sdk/components';
import { ComponentSize, IconAction, IconColor } from '@webitel/ui-sdk/enums';
import { ScreenSharing } from '@webitel/ui-sdk/modules/CallSession';
import { SpecialGlobalAction } from '@webitel/ui-sdk/modules/Userinfo';
import { eventBus } from '@webitel/ui-sdk/scripts';
import { useCSVExport } from '@webitel/ui-sdk/src/modules/CSVExport/composables/useCSVExport';
import { useTableEmpty } from '@webitel/ui-sdk/src/modules/TableComponentModule/composables/useTableEmpty';
import { storeToRefs } from 'pinia';
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { AgentStatus } from 'webitel-sdk';

import {
	getCliInstance,
	getIsSocketConnected,
} from '../../../app/api/callWSConnection';
import { useTableAutoRefresh } from '../../../app/composables/useTableAutoRefresh';
import { useScreenSharingSession } from '../../_shared/composables/useScreenSharingSession';
import { useCallStore } from '../../call-window/store/callStore';
import { useUserinfoStore } from '../../userinfo/store/userInfoStore';
import { useControlAgentScreenAccess } from '../composables/useControlAgentScreenAccess';
import AgentStatusComment from '../modules/agent-card/components/agent-panel/_internals/agent-status-comment.vue';
import AgentsFiltersPanel from '../modules/filters/components/agent-filters-panel.vue';
import { useAgentsTableStore } from '../stores/datalist/agents';
import TableAgent from './_internals/table-templates/table-agent.vue';
import TableAgentStatus from './_internals/table-templates/table-agent-status.vue';
import TableAgentCallTime from './_internals/table-templates/table-agent-sum-call-time.vue';

const { t } = useI18n();

const callStore = useCallStore();
const { callState, eavesdrop } = storeToRefs(callStore);
const { attachToCall, eavesdropOpenWindow } = callStore;

const tableStore = useAgentsTableStore();
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
	addFilter,
	updateFilter,
	deleteFilter,
	updateSearchMode,
	columnResize,
	columnReorder,
} = tableStore;

const { setAutoRefresh, clearAutoRefresh } = useTableAutoRefresh(loadDataList);

const userinfoStore = useUserinfoStore();

const hasExportDataGridAccess = computed(() => {
	return userinfoStore.hasSpecialGlobalActionAccess(
		SpecialGlobalAction.ExportDataGrid,
	);
});

const { exportCSV, isCSVLoading, initCSVExport } = useCSVExport({
	selected,
});
initCSVExport(AgentsAPI.getStatusStatistics, {
	filename: 'agents',
});

initialize();

// if call-window popup is opened need to move screen sharing player
const isScreenSharingMoved = computed(
	() => eavesdrop.value.isOpened || callState.value.isVisible,
);

const filteredTableHeaders = computed(() =>
	headers.value.filter((header) => header.value !== 'descTrack'),
);

const searchValue = computed(
	() => filtersManager.value.filters.get('search')?.value || '',
);

const screenSharingLoadingAgentId = ref(null);

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

const rowStyle = (row: { status: AgentStatus }) => {
	if (row.status !== AgentStatus.BreakOut) return {};

	return {
		background: 'hsla(var(--_negative-color), 0.1)',
	};
};
const attachCall = async (id) => {
	await attachToCall({
		id,
	});
	await eavesdropOpenWindow();
};

const getDeskTrackIconColor = (id) =>
	selectedAgentToSpyScreen.value?.user.id === id
		? IconColor.SUCCESS
		: IconColor.DEFAULT;

const { isControlAgentScreenAllow } = useControlAgentScreenAccess();

const {
	selectedAgentToSpyScreen,
	mediaStream,
	screenshotStatus,
	screenshotIsLoading,
	recordIsLoading,
	toggleRecordAction,
	makeScreenshot,
	closeSession,
} = useScreenSharingSession();

let cli: Awaited<ReturnType<typeof getCliInstance>>;

onMounted(async () => {
	setAutoRefresh();
	cli = await getCliInstance();
});

const connect = async (agent) => {
	if (!getIsSocketConnected()) {
		eventBus.$emit('notification', {
			type: 'error',
			text: t('errorNotifications.websocketDisconnect'),
		});
		return;
	}

	screenSharingLoadingAgentId.value = agent.agentId;
	mediaStream.value = null;
	selectedAgentToSpyScreen.value = null;
	cli?.spyScreenSessions.forEach((session) => {
		session.close();
	});

	try {
		await cli.spyScreen(
			Number(agent.user.id),
			{
				iceServers: [],
			},
			async (stream) => {
				selectedAgentToSpyScreen.value = agent;
				mediaStream.value = stream;
			},
		);
	} catch {
		eventBus.$emit('notification', {
			type: 'error',
			text: t('errorNotifications.websocketDisconnect'),
		});
	} finally {
		screenSharingLoadingAgentId.value = null;
	}
};

onUnmounted(() => {
	clearAutoRefresh();

	if (!cli) return;

	const activeSession = cli.spyScreenSessions.find(
		(session) =>
			session.toUserId === Number(selectedAgentToSpyScreen.value?.user.id),
	);
	if (activeSession) {
		closeSession(activeSession);
	}
});
</script>

<style scoped>

.table-page .table-title {
  justify-content: flex-end;
}

.table-page .agents-table__desk-track-icon {
  cursor: pointer;
}

.table-page .agents-table__desk-track-icon_active {
  fill: var(--success-color);
}

/**
  @author @HlukhovYe
  doubling class for specifity because wt-vidstack-player's styles has higher specifity
  https://webitel.atlassian.net/browse/WTEL-9311
*/
.screen-sharing--moved.screen-sharing--moved {
  /* 256px is current width of call-window popup */
  right: calc(256px + var(--spacing-sm));
  bottom: var(--spacing-sm);
}
</style>

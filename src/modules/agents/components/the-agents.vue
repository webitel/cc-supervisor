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
            :disabled="!dataList.length"
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
      <section class="table-section main-section-wrapper">
        <header v-show="dataList?.length" class="table-title">
          <wt-action-bar
            :include="[
              IconAction.FILTERS,
              IconAction.REFRESH,
              IconAction.COLUMNS
            ]"
            @click:refresh="loadDataList"
            @click:filters="showActionsPanel = !showActionsPanel"
          >
            <template #columns>
              <wt-table-column-select
                :headers="filteredTableHeaders"
                @change="updateShownHeaders"
              />
            </template>
          </wt-action-bar>
        </header>

        <wt-loader v-show="isLoading"></wt-loader>

        <div
          v-show="dataList?.length"
          class="table-section__table-wrapper"
        >
          <wt-table
            ref="agents-table"
            :data="dataList"
            :grid-actions="false"
            :headers="headers"
            sortable
            :selectable="false"
            :row-class="rowClass"
            class="agents-table"
            @sort="updateSort"
          >
            <template #name="{ item }">
              <table-agent :item="item" />
            </template>
            <template #status="{ item }">
              <table-agent-status :item="item" />
            </template>
            <template #callTime="{ item }">
              <table-agent-call-time :item="item" @attach-call="attachCall" />
            </template>
            <template #team="{ item }">
              <div v-if="item.team">
                {{ item.team.name }}
              </div>
            </template>
            <template #queues="{ item }">
              <table-queues :item="item" />
            </template>
            <template #descTrack="{ item }">
              <div>
                <wt-icon
                  v-if="item.descTrack && isControlAgentScreenAllow"
                  :color="getDeskTrackIconColor(item.user.id)"
                  icon="desk-track"
                  size="md"
                  class="agents-table__desk-track-icon"
                  @click="connect(item)"
                ></wt-icon>
              </div>
            </template>
            <template #statusComment="{ item }">
              <div>
                <agent-status-comment
                  v-if="item.statusComment && item.status === AgentStatus.Pause"
                  :status-comment="item.statusComment"
                />
              </div>
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

      <div
        v-if="mediaStream"
      >
        <wt-vidstack-player
          v-for="session in cli?.spyScreenSessions" :key="`screen-${session.id}`"
          :stream="mediaStream"
          :session="session"
          :screenshot-status="screenshotStatus"
          :screenshot-is-loading="screenshotIsLoading"
          :username="selectedAgentToSpyScreen?.user.name"
          autoplay
          muted
          mode="stream"
          @close-session="closeSession(session)"
          @make-screenshot="makeScreenshot(session)"
          @toggle-record="toggleRecordAction(session)"
        />
      </div>
    </template>
  </wt-page-wrapper>
</template>

<script setup>
import { DynamicFilterSearchComponent as DynamicFilterSearch } from '@webitel/ui-datalist/filters';
import { IconColor } from '@webitel/ui-sdk/enums';
import IconAction from '@webitel/ui-sdk/src/enums/IconAction/IconAction.enum';
import { useCSVExport } from '@webitel/ui-sdk/src/modules/CSVExport/composables/useCSVExport';
import { storeToRefs } from 'pinia';
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import { AgentStatus } from 'webitel-sdk';

import { getCliInstance } from '../../../app/api/callWSConnection';
import { useTableAutoRefresh } from '../../../app/composables/useTableAutoRefresh';
import { useScreenSharingSession } from '../../_shared/composables/useScreenSharingSession';
import AgentsAPI from '../api/agents';
import AgentsFiltersPanel from '../modules/filters/components/agent-filters-panel.vue';
import { useAgentsTableStore } from '../stores/agents';
import TableQueues from './_internals/table-templates/table-agent-queues.vue';
import TableAgentStatus from './_internals/table-templates/table-agent-status.vue';
import TableAgentCallTime from './_internals/table-templates/table-agent-sum-call-time.vue';
import TableAgent from './_internals/table-templates/table-agent.vue';
import AgentStatusComment from '../modules/agent-card/components/agent-panel/_internals/agent-status-comment.vue';

const { t } = useI18n();

/*
* @author @Oleksandr Palonnyi
*
* TODO: need to refactor call store to remove usage of vuex store in component
*
* [WTEL-7283](https://webitel.atlassian.net/browse/WTEL-7283)
* */
const store = useStore();

const tableStore = useAgentsTableStore();
const showActionsPanel = ref(true);

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

const {
  setAutoRefresh,
  clearAutoRefresh,
} = useTableAutoRefresh(loadDataList)

const { exportCSV, isCSVLoading, initCSVExport } = useCSVExport({
  selected,
});
initCSVExport(AgentsAPI.getList, { filename: 'agents' });

initialize();

const filteredTableHeaders = computed(() => headers.value.filter((header) => header.value !== 'descTrack'))

const searchValue = computed(() => filtersManager.value.filters.get('search')?.value || '');
const rowClass = (row) => {
  return row.status === AgentStatus.BreakOut && 'wt-table__tr--highlight-breakout';
};
const attachCall = async (id) => {
  await store.dispatch('ATTACH_TO_CALL', { id });
  await store.dispatch('OPEN_WINDOW');
};

const getDeskTrackIconColor = (id) => selectedAgentToSpyScreen.value?.user.id === id ? IconColor.SUCCESS : IconColor.DEFAULT

const isControlAgentScreenAllow = computed(() => store.getters[`userinfo/IS_CONTROL_AGENT_SCREEN_ALLOW`])

const {
  selectedAgentToSpyScreen,
  mediaStream,
  screenshotStatus,
  screenshotIsLoading,
  toggleRecordAction,
  makeScreenshot,
  closeSession,
} = useScreenSharingSession()

let cli;

onMounted(async () => {
  setAutoRefresh()
  cli = await getCliInstance();
});

const connect = async (agent) => {
  mediaStream.value = null
  selectedAgentToSpyScreen.value = null
  cli?.spyScreenSessions.forEach((session) => session.close())

  await cli.spyScreen(Number(agent.user.id), {
    iceServers: [],
  }, async (stream) => {
    selectedAgentToSpyScreen.value = agent
    mediaStream.value = stream;
  });
};

onUnmounted(() => {
  clearAutoRefresh()

  if (!cli) return

  const activeSession = cli.spyScreenSessions.find((session) => session.toUserId === Number(selectedAgentToSpyScreen.value?.user.id))
  if (activeSession) {
    closeSession(activeSession)
  }
});
</script>

<style lang="scss" scoped>
//@use '@/app/css/main.scss" as *';
@use '@webitel/ui-sdk/src/css/main' as *;

.wt-table ::v-deep .wt-table__tr--highlight-breakout {
  // https://github.com/sass/node-sass/issues/2251
  background: HSLA(var(--_negative-color), 0.1);
}

.table-page {
  .table-title {
    justify-content: flex-end;
  }

  .agents-table {
    &__desk-track-icon {
      cursor: pointer;

      &_active {
        fill: var(--success-color);
      }
    }
  }
}

</style>

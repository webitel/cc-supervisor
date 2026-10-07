<template>
  <wt-page-wrapper
    class="agent-page"
    :actions-panel="currentActionsPanel"
  >
    <template #header>
      <agent-panel />
    </template>
    <template #actions-panel>
      <component
        :is="currentTab.filters"
        v-if="currentTab.filters"
      ></component>
    </template>
    <template #main>
      <div class="agent-page__content">
        <wt-tabs
          :current="currentTab"
          :tabs="tabs"
          @change="changeTab"
        ></wt-tabs>
        <component
          :is="currentTab.component"
          @toggle-filter="toggleFilter"
        ></component>
      </div>
    </template>
  </wt-page-wrapper>
</template>

<script lang="ts" setup>
import { WtObject } from '@webitel/ui-sdk/enums';
import type { Component } from 'vue';
import { computed, markRaw, onUnmounted, reactive } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';

import { useTableAutoRefresh } from '../../../../../app/composables/useTableAutoRefresh';
import { useUserAccessControl } from '../../../../../app/composables/useUserAccessControl';
import AgentTabsPathName from '../../../../../app/router/_internals/AgentTabsPathName.enum';
import { useErrorRedirectHandler } from '../../../../../modules/error-pages/composable/useErrorRedirectHandler';
import Calls from '../modules/agent-calls/components/agent-calls-tab.vue';
import CallsFilters from '../modules/agent-calls/modules/filters/components/agent-calls-filters-panel.vue';
import General from '../modules/agent-general/components/agent-general-tab.vue';
import Pdfs from '../modules/agent-pdfs/components/agent-pdfs-tab.vue';
import PdfsFilters from '../modules/agent-pdfs/modules/filters/components/agent-pdfs-filters-panel.vue';
import ScreenRecordings from '../modules/agent-screen-recordings/components/agent-screen-recordings-tab.vue';
import ScreenRecordingsFilters from '../modules/agent-screen-recordings/modules/filters/components/agent-screen-recordings-filters-panel.vue';
import Screenshots from '../modules/agent-screenshots/components/agent-screenshots-tab.vue';
import ScreenshotsFilters from '../modules/agent-screenshots/modules/filters/components/agent-screenshots-filters-panel.vue';
import Skills from '../modules/agent-skills/components/agent-skills-tab.vue';
import StatusHistory from '../modules/agent-status-history/components/agent-status-history-tab.vue';
import StatusHistoryFilters from '../modules/agent-status-history/modules/filters/components/agent-status-history-filters-panel.vue';
import { useAgentCardStore } from '../stores/agentCardStore';
import AgentPanel from './agent-panel/agent-panel.vue';

interface AgentCardTab {
	text: string;
	value: string;
	pathName: string;
	component: Component;
	filters?: Component;
	disabled?: boolean;
}

const { t } = useI18n();
const route = useRoute();
const router = useRouter();
const { handleError } = useErrorRedirectHandler();

const { hasReadAccess: hasCallReadAccess } = useUserAccessControl(
	WtObject.Call,
);
const { hasReadAccess: hasScreenRecordingsReadAccess } = useUserAccessControl(
	WtObject.ScreenRecordings,
);

const { setAgentId, loadAgent } = useAgentCardStore();

const actionsPanelStatus = reactive<Record<string, boolean>>({});

const tabs = computed<AgentCardTab[]>(() => {
	const tabs: AgentCardTab[] = [
		{
			text: t('pages.card.general.title'),
			value: 'general',
			pathName: AgentTabsPathName.GENERAL,
			component: markRaw(General),
		},
		{
			text: t('pages.card.calls.title'),
			value: 'calls',
			pathName: AgentTabsPathName.WORK_LOG,
			component: markRaw(Calls),
			filters: markRaw(CallsFilters),
			disabled: !hasCallReadAccess.value,
		},
		{
			text: t('pages.card.statusHistory.title'),
			value: 'status-history',
			pathName: AgentTabsPathName.STATE_HISTORY,
			component: markRaw(StatusHistory),
			filters: markRaw(StatusHistoryFilters),
		},
		{
			text: t('pages.card.skills.title'),
			value: 'skills',
			pathName: AgentTabsPathName.SKILLS,
			component: markRaw(Skills),
		},
		{
			text: t('objects.screenRecordings', 2),
			value: 'screen-recordings',
			pathName: AgentTabsPathName.SCREEN_RECORDINGS,
			component: markRaw(ScreenRecordings),
			filters: markRaw(ScreenRecordingsFilters),
			disabled: !hasScreenRecordingsReadAccess.value,
		},
		{
			text: t('objects.screenshots', 2),
			value: 'screenshots',
			pathName: AgentTabsPathName.SCREENSHOTS,
			component: markRaw(Screenshots),
			filters: markRaw(ScreenshotsFilters),
			disabled: !hasScreenRecordingsReadAccess.value,
		},
		{
			text: t('objects.agentPdfs.pdfs', 2),
			value: 'pdfs',
			pathName: AgentTabsPathName.PDFS,
			component: markRaw(Pdfs),
			filters: markRaw(PdfsFilters),
			disabled: !hasScreenRecordingsReadAccess.value,
		},
	];

	return tabs.filter(({ disabled }) => !disabled);
});

const currentTab = computed(
	() =>
		tabs.value.find(({ pathName }) => route.name === pathName) || tabs.value[0],
);

const currentActionsPanel = computed(
	() => actionsPanelStatus[currentTab.value.value] || false,
);

const changeTab = (tab: AgentCardTab) =>
	router.push({
		name: tab.pathName,
	});

const toggleFilter = () => {
	actionsPanelStatus[currentTab.value.value] =
		!actionsPanelStatus[currentTab.value.value];
};

const loadPage = async () => {
	try {
		setAgentId(route.params.id as string);
		await loadAgent();
	} catch (err) {
		handleError(err);
	}
};

const { setAutoRefresh, clearAutoRefresh } = useTableAutoRefresh(loadAgent);

loadPage();
setAutoRefresh();

onUnmounted(() => {
	clearAutoRefresh();
});
</script>

<style
  lang="scss"
  scoped
>
.agent-page__content {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 100%;
  min-height: 0;
}
</style>

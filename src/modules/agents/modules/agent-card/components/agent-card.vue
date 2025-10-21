<template>
  <wt-page-wrapper class="agent-page" :actions-panel="currentActionsPanel">
    <template #header>
      <agent-panel :namespace="namespace"/>
    </template>
    <template #actions-panel>
      <component :is="`${currentTab.value}-filters`" :namespace="currentTab.namespace"></component>
    </template>
    <template #main>
      <div class="agent-page__content">
        <wt-tabs
          :current="currentTab"
          :tabs="tabs"
          @change="changeTab"
        ></wt-tabs>
        <component :is="currentTab.value" :namespace="currentTab.namespace" @toggle-filter="toggleFilter"></component>
      </div>
    </template>
  </wt-page-wrapper>
</template>

<script>
import getNamespacedState from '@webitel/ui-sdk/src/store/helpers/getNamespacedState';
import { mapActions, mapState } from 'vuex';

import autoRefreshMixin from '../../../../../app/mixins/autoRefresh/autoRefreshMixin';
import AgentTabsPathName from "../../../../../app/router/_internals/AgentTabsPathName.enum.js";
import Calls from '../modules/agent-calls/components/agent-calls-tab.vue';
import CallsFilters from '../modules/agent-calls/modules/filters/components/agent-calls-filters.vue';
import General from '../modules/agent-general/components/agent-general-tab.vue';
import Screenshots from '../modules/agent-screenshots/components/agent-screenshots-tab.vue';
import ScreenshotsFilters from '../modules/agent-screenshots/modules/filters/components/agent-screenshots-filters.vue';
import ScreenRecordings from '../modules/agent-screen-recordings/components/agent-screen-recordings-tab.vue';
import ScreenRecordingsFilters from '../modules/agent-screen-recordings/modules/filters/components/agent-screen-recordings-filters.vue';
import Skills from '../modules/agent-skills/components/agent-skills-tab.vue';
import StatusHistory from '../modules/agent-status-history/components/agent-status-history-tab.vue';
import StatusHistoryFilters from '../modules/agent-status-history/modules/filters/components/agent-status-history-filters.vue';
import AgentPanel from './agent-panel/agent-panel.vue';

export default {
  name: 'AgentCard',
  components: {
    AgentPanel,
    General,
    Calls,
    CallsFilters,
    Screenshots,
    ScreenshotsFilters,
    ScreenRecordings,
    ScreenRecordingsFilters,
    Skills,
    StatusHistory,
    StatusHistoryFilters,
  },
  mixins: [autoRefreshMixin],

  data: () => ({
    namespace: 'agents/card',
    isLoading: false,
    actionsPanelStatus: {}
  }),

  created() {
    this.loadPage();
  },

  computed: {
    ...mapState({
      agent(state) {
        return getNamespacedState(state, this.namespace).agent;
      },
    }),
    isControlAgentScreenAllow() {
      return this.$store.getters[`userinfo/IS_CONTROL_AGENT_SCREEN_ALLOW`];
    },
    tabs() {
      const tabs = []

      const generalTab = {
        text: this.$t('pages.card.general.title'),
        value: 'general',
        namespace: this.namespace,
        pathName: AgentTabsPathName.GENERAL,
      }

      const calls = {
        text: this.$t('pages.card.calls.title'),
        value: 'calls',
        namespace: `${this.namespace}/calls`,
        pathName: AgentTabsPathName.WORK_LOG,
      }

      const screenshots = {
        text: this.$t('objects.screenshots', 2),
        value: 'screenshots',
        namespace: this.namespace,
        pathName: AgentTabsPathName.SCREENSHOTS,
      }

      const screenRecordings = {
        text: this.$t('objects.screenRecordings', 2),
        value: 'screen-recordings',
        namespace: this.namespace,
        pathName: AgentTabsPathName.SCREEN_RECORDINGS,
      }

      const statusHistory = {
        text: this.$t('pages.card.statusHistory.title'),
        value: 'status-history',
        namespace: `${this.namespace}/statusHistory`,
        pathName: AgentTabsPathName.STATE_HISTORY,
      }

      const skills = {
        text: this.$t('pages.card.skills.title'),
        value: 'skills',
        namespace: `${this.namespace}/skills`,
        pathName: AgentTabsPathName.SKILLS,
      }

      tabs.push(generalTab, calls);

      if (this.isControlAgentScreenAllow) {
        tabs.push(screenshots, screenRecordings);
      }

      tabs.push(statusHistory, skills);

      return tabs;
    },
    currentTab() {
      return this.tabs.find(({pathName}) => this.$route.name === pathName) || this.tabs[0];
    },
    currentActionsPanel() {
      return this.actionsPanelStatus[this.currentTab.value] || false;
    },
  },
  unmounted() {
    this.resetCallsFilters();
    this.resetStatusHistoryFilters();
  },
  methods: {
    ...mapActions({
      setAgentId(dispatch, payload) {
        return dispatch(`${this.namespace}/SET_AGENT_ID`, payload);
      },
      loadAgent(dispatch, payload) {
        return dispatch(`${this.namespace}/LOAD_AGENT`, payload);
      },
      resetCallsFilters(dispatch) {
        return dispatch(`${this.namespace}/calls/filters/RESET_FILTERS`);
      },
      resetStatusHistoryFilters(dispatch) {
        return dispatch(`${this.namespace}/statusHistory/filters/RESET_FILTERS`);
      },
    }),
    async changeTab(tab) {
      this.$router.push({ name: tab.pathName });
    },
    async loadPage() {
      this.isLoading = true;
      try {
        const { id } = this.$route.params;
        await this.setAgentId(id);
        await this.loadAgent();
        console.log(this.agent, ' agent');
      } catch {
      } finally {
        this.isLoading = false;
      }
    },
    makeAutoRefresh() {
      return this.loadAgent();
    },
    toggleFilter() {
      this.actionsPanelStatus[this.currentTab.value] = !this.actionsPanelStatus[this.currentTab.value];
    },
  },
};
</script>

<style lang="scss" scoped>
.agent-page__content {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 100%;
  min-height: 0;
}
</style>

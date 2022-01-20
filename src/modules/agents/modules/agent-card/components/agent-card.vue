<template>
  <wt-page-wrapper class="agent-page" :actions-panel="currentTab.actionsPanel">
    <template slot="header">
      <agent-panel :namespace="namespace"/>
    </template>
    <template slot="actions-panel">
      <component :is="`${currentTab.value}-filters`" :namespace="currentTab.namespace"></component>
    </template>
    <template slot="main">
      <div class="agent-page__content">
        <wt-tabs
          :current="currentTab"
          :tabs="tabs"
          @change="changeTab"
        ></wt-tabs>
        <component :is="currentTab.value" :namespace="currentTab.namespace"></component>
      </div>
    </template>
  </wt-page-wrapper>
</template>

<script>
import getNamespacedState from '@webitel/ui-sdk/src/store/helpers/getNamespacedState';
import { mapActions, mapState } from 'vuex';
import Calls from '../modules/agent-calls/components/agent-calls-tab.vue';
import CallsFilters from '../modules/agent-calls/modules/filters/components/agent-calls-filters.vue';
import General from '../modules/agent-general/components/agent-general-tab.vue';
import Skills from '../modules/agent-skills/components/agent-skills-tab.vue';
import StatusHistory from '../modules/agent-status-history/components/agent-status-history-tab.vue';
import StatusHistoryFilters from '../modules/agent-status-history/modules/filters/components/agent-status-history-filters.vue';
import AgentPanel from './agent-panel/agent-panel.vue';
import autoRefreshMixin from '../../../../../app/mixins/autoRefresh/autoRefreshMixin';

export default {
  name: 'agent-card',
  mixins: [autoRefreshMixin],
  components: {
    AgentPanel,
    General,
    Calls,
    CallsFilters,
    Skills,
    StatusHistory,
    StatusHistoryFilters,
  },

  data: () => ({
    namespace: 'agents/card',
    isLoading: false,
    currentTab: {},
  }),

  created() {
    this.setInitialTab();
    this.loadPage();
  },

  computed: {
    ...mapState({
      agent(state) {
        return getNamespacedState(state, this.namespace).agent;
      },
    }),

    tabs() {
      return [
        {
          text: this.$t('pages.card.general.title'),
          value: 'general',
          actionsPanel: false,
          namespace: this.namespace,
        },
        {
          text: this.$t('pages.card.calls.title'),
          value: 'calls',
          actionsPanel: true,
          namespace: `${this.namespace}/calls`,
        },
        {
          text: this.$t('pages.card.statusHistory.title'),
          value: 'status-history',
          actionsPanel: true,
          namespace: `${this.namespace}/statusHistory`,
        },
        {
          text: this.$t('pages.card.skills.title'),
          value: 'skills',
          actionsPanel: false,
          namespace: `${this.namespace}/skills`,
        },
      ];
    },
  },
  methods: {
    ...mapActions({
      setAgentId(dispatch, payload) {
        return dispatch(`${this.namespace}/SET_AGENT_ID`, payload);
      },
      loadAgent(dispatch, payload) {
        return dispatch(`${this.namespace}/LOAD_AGENT`, payload);
      },
    }),
    changeTab(tab) {
      if (Object.keys(this.$route.query).length) {
        this.$router.replace({ query: null }); // reset specific previous tab filters
      }
      this.currentTab = tab;
    },
    async loadPage() {
      this.isLoading = true;
      try {
        const { id } = this.$route.params;
        await this.setAgentId(id);
        await this.loadAgent();
      } catch {
      } finally {
        this.isLoading = false;
      }
    },
    setInitialTab() {
      if (this.tabs) this.changeTab(this.tabs[0]);
    },
    makeAutoRefresh() {
      return this.loadAgent();
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

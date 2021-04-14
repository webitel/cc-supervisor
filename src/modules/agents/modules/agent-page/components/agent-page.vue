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
import AgentCalls from '../modules/agent-calls/components/agent-calls-tab.vue';
import AgentCallsFilters from '../modules/agent-calls/modules/filters/components/agent-calls-filters.vue';
import AgentSkills from '../modules/agent-skills/components/agent-skills-tab.vue';
import AgentPanel from './agent-panel/agent-panel.vue';

export default {
  name: 'agent-page',
  components: {
    AgentPanel,
    AgentCalls,
    AgentCallsFilters,
    AgentSkills,
  },

  data: () => ({
    namespace: 'agents/agentPage',
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
          text: this.$t('pages.agentPage.calls.title'),
          value: 'agent-calls',
          actionsPanel: true,
          namespace: `${this.namespace}/agentCalls`,
        }, {
          text: this.$t('pages.agentPage.skills.title'),
          value: 'agent-skills',
          actionsPanel: false,
          namespace: `${this.namespace}/agentSkills`,
        },
      ];
    },
  },
  methods: {
    ...mapActions({
      loadAgent(dispatch, payload) {
        return dispatch(`${this.namespace}/LOAD_AGENT`, payload);
      },
    }),
    changeTab(tab) {
      this.$router.replace({ query: null }); // reset specific previous tab filters
      this.currentTab = tab;
    },
    async loadPage() {
      this.isLoading = true;
      try {
        const { id } = this.$route.params;
        await this.loadAgent(id);
      } catch {
      } finally {
        this.isLoading = false;
      }
    },

    setInitialTab() {
      if (this.tabs) this.changeTab(this.tabs[1]);
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

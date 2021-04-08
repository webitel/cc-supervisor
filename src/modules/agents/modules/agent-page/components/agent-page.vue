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
          v-model="currentTab"
          :tabs="tabs"
        ></wt-tabs>
        <component :is="currentTab.value" :namespace="currentTab.namespace"></component>
      </div>
    </template>
  </wt-page-wrapper>
</template>

<script>
import getNamespacedState from '@webitel/ui-sdk/src/store/helpers/getNamespacedState';
import { mapActions, mapState } from 'vuex';
import AgentPanel from './agent-panel/agent-panel.vue';
import AgentCalls from '../modules/agent-calls/components/agent-calls-tab.vue';
import AgentCallsFilters from '../modules/agent-calls/components/agent-calls-filters.vue';

export default {
  name: 'agent-page',
  components: {
    AgentPanel,
    AgentCalls,
    AgentCallsFilters,
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
      return [{
        text: this.$t('pages.agentPage.calls.title'),
        value: 'agent-calls',
        actionsPanel: true,
        namespace: `${this.namespace}/agentCalls`,
      }];
    },
  },
  methods: {
    ...mapActions({
      loadAgent(dispatch, payload) {
        return dispatch(`${this.namespace}/LOAD_AGENT`, payload);
      },
    }),

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
      // eslint-disable-next-line prefer-destructuring
      if (this.tabs) this.currentTab = this.tabs[0];
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

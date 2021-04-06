<template>
  <wt-page-wrapper class="agent-page">
    <template slot="header">
      <agent-panel :namespace="namespace"/>
    </template>
    <template slot="actions-panel">
      <agent-calls-filters></agent-calls-filters>
    </template>
    <template slot="main">
      <div class="agent-page__content">
        <wt-tabs
          v-model="currentTab"
          :tabs="tabs"
        ></wt-tabs>
        <component :is="currentTab.value"></component>
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
    currentTab: { value: 'agent-calls' },
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

    tabs() {
      return [{
        text: this.$t('pages.agentPage.calls.title'),
        value: 'agent-calls',
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

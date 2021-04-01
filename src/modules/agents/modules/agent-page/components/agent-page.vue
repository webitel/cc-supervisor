<template>
  <wt-page-wrapper class="agent-page">
    <template slot="header">
      <agent-panel :namespace="namespace" />
    </template>
    <template slot="actions-panel"></template>
    <template slot="main">
      <wt-loader v-show="isLoading"></wt-loader>
      <div class="agent-page__content" v-show="!isLoading">
        <section class="agent-page__main">
          <wt-tabs
            v-model="currentTab"
            :tabs="tabs"
          ></wt-tabs>
          <component :is="currentTab.value"></component>
        </section>
      </div>
    </template>
  </wt-page-wrapper>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import AgentPanel from './agent-panel/agent-panel.vue';
import AgentCalls from './agent-calls/agent-calls-tab.vue';

export default {
  name: 'agent-page',
  components: {
    AgentPanel,
    AgentCalls,
  },

  data: () => ({
    namespace: 'agents',
    isLoading: false,
    currentTab: { value: 'agent-calls' },
  }),

  created() {
    this.loadPage();
  },

  computed: {
    ...mapState('agents', {
      agent: (state) => state.agent,
    }),

    tabs() {
      return [{
        text: this.$t('pages.agentPage.calls.title'),
        value: 'agent-calls',
      }];
    },
  },
  methods: {
    ...mapActions('agents', {
      loadAgentPage: 'FETCH_ITEM',
    }),

    async loadPage() {
      this.isLoading = true;
      try {
        const { id } = this.$route.params;
        await this.loadAgentPage(id);
      } catch {
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../../../app/css/supervisor-workspace/the-supervisor-workspace";
</style>

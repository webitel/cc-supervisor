<template>
  <section class="agent-page page-wrapper">
    <wt-loader v-show="isLoading"></wt-loader>
    <div class="agent-page__content" v-show="!isLoading">
      <header class="agent-page__header page-wrapper__header">
        <wt-icon-btn
          icon="arrow-left"
          color="active"
          @click="$router.push('/supervisor/agents')"
        ></wt-icon-btn>

        <img src="../../../assets/img/default-avatar.svg" alt="Agent avatar">

        <div class="agent-page__header__agent-info">
          <strong class="agent-page__header__agent-name">{{ agent.name }}</strong>
          <span class="agent-page__header__agent-number">{{ agent.extension }}</span>
        </div>
        <wt-button
          color="success"
          @click="callAgent"
        >{{ $t('pages.agentPage.callAgent') }}
        </wt-button>
        <wt-status-select
          v-if="agent.status"
          :status="agent.status"
          :status-duration="agent.statusDuration"
          @change="changeAgentStatus"
        ></wt-status-select>
        <wt-indicator
          color="danger"
          :text="agent.offline"
        ></wt-indicator>
        <wt-indicator
          color="primary"
          :text="agent.pause"
        ></wt-indicator>
        <wt-indicator
          color="success"
          :text="agent.online"
        ></wt-indicator>

        <wt-select
          :value="agent.teams"
          :placeholder="$t('pages.agentPage.team')"
          :search="fetchTeams"
          :internal-search="false"
          :close-on-select="false"
          :clearable="false"
          multiple
          @reset="setTeam"
          @closed="setTeam"
        ></wt-select>
      </header>

      <section class="agent-page__main">
        <wt-tabs
          v-model="currentTab"
          :tabs="tabs"
        ></wt-tabs>
        <component :is="currentTab.value"></component>
      </section>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { fetchTeams } from '../../../api/filters/teamFilter';
import AgentCalls from './agent-calls/agent-calls-tab.vue';
// import theAgentsItemChats from './the-agents-item-chats.vue';
// import theAgentsHelpPopup from './the-agents-help-popup.vue';

export default {
  name: 'agent-page',
  components: {
    AgentCalls,
    // theAgentsItemChats,
    // theAgentsHelpPopup,
  },
  mixins: [],
  data: () => ({
    isLoading: false,
    autorefresh: null,
    currentTab: { value: 'agents-calls' },
  }),
  mounted() {
    this.load();
    if (this.autorefresh) clearInterval(this.autorefresh);
    this.autorefresh = setInterval(this.loadTick, this.timer);
  },
  destroyed() {
    clearInterval(this.autorefresh);
  },
  computed: {
    ...mapState('agents', {
      agent: (state) => state.agent,
    }),
    id: {
      get() { return `${this.$route.params.id}`; },
    },
    tabs() {
      return [{
        text: this.$t('pages.agentPage.calls.title'),
        value: 'agents-calls',
      },
      ];
    },
    timer: () => +localStorage.getItem('autorefresh'),
  },
  methods: {
    ...mapActions('agents', {
      loadItem: 'FETCH_ITEM',
      updateStatus: 'UPDATE_AGENT_STATUS',
    }),

    ...mapActions('call', {
      openWindow: 'OPEN_WINDOW',
      setCallInfo: 'SET_CALL_INFO',
    }),

    fetchTeams,

    setTeam() {},

    changeAgentStatus(value) {
      this.updateStatus({
        agentId: this.agent.agentId,
        status: value,
      });
    },

    callAgent() {
      this.setCallInfo({
        time: 0,
        agent: this.agent,
      });
      this.openWindow();
    },

    async load() {
      this.isLoading = true;
      await this.loadItem(+this.id);
      this.agentTeams = await fetchTeams();
      this.isLoading = false;
    },

    async loadTick() {
      await this.loadItem(+this.id);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../css/supervisor-workspace/page-wrapper";

.agent-page__header {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px 30px;

  & > * {
    margin-right: 20px;
  }

  .wt-status-select {
    max-width: 150px;
  }

  .wt-select {
    min-width: 170px;
    max-width: 250px;
  }
}

.agent-page__header__agent-info {
  display: flex;
  flex-direction: column;

  .agent-page__header__agent-name {
    @extend %typo-strong-lg;
    white-space: nowrap;
  }

  .agent-page__header__agent-number {
    @extend %typo-body-lg;
  }
}

.agent-page__main {
  @extend .page-wrapper__main;
  display: flex;
  flex-direction: column;
}
</style>

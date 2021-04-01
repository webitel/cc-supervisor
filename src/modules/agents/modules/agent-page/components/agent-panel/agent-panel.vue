<template>
  <wt-headline class="agent-panel">
    <wt-icon-btn
      icon="arrow-left"
      color="active"
      @click="$router.push('/agents')"
    ></wt-icon-btn>
    <agent-profile :name="agent.name"></agent-profile>
    <wt-button
      class="agent-panel__call-btn"
      color="success"
      @click="callAgent"
    >{{ $t('pages.agentPage.callAgent') }}
    </wt-button>
    <wt-status-select
      class="agent-panel__status-select"
      :status="agent.status"
      :status-duration="agent.statusDuration"
      @change="changeAgentStatus"
    ></wt-status-select>
    <agent-status-timers :status="agent"></agent-status-timers>
  </wt-headline>
</template>

<script>
import getNamespacedState from '@webitel/ui-sdk/src/store/helpers/getNamespacedState';
import { mapActions, mapState } from 'vuex';
import AgentProfile from './_internals/agent-profile.vue';
import AgentStatusTimers from './_internals/agent-status-timers.vue';

export default {
  name: 'agent-panel',
  components: { AgentProfile, AgentStatusTimers },
  props: {
    namespace: {
      type: String,
    },
  },
  computed: {
    ...mapState({
      agent(state) {
        return getNamespacedState(state, this.namespace).agent;
      },
    }),
  },
  methods: {
    ...mapActions({
      updateStatus(dispatch, payload) {
        return dispatch(`${this.namespace}/UPDATE_AGENT_STATUS`, payload);
      },
    }),
    ...mapActions('call', {
      openWindow: 'OPEN_WINDOW',
      setCallInfo: 'SET_CALL_INFO',
    }),
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
  },
};
</script>

<style lang="scss" scoped>
.wt-headline.agent-panel {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  & > * {
    margin-right: var(--component-spacing);
  }
}

.agent-panel__status-select {
  max-width: 200px;
}
</style>

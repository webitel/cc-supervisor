<template>
  <wt-headline class="agent-panel">
    <div class="profile-wrap">
      <wt-icon-btn
        icon="back"
        color="active"
        @click="$router.push('/agents')"
      ></wt-icon-btn>
      <agent-profile :name="agent.name"></agent-profile>
    </div>
    <div class="status-wrap">
      <agent-status-select :namespace="namespace" @changed="loadAgent"/>
      <agent-status-timers :status="agent"></agent-status-timers>
      <wt-button
        class="agent-panel__call-btn"
        color="success"
        @click="callAgent"
      >{{ $t('pages.card.callAgent') }}
      </wt-button>
    </div>
  </wt-headline>
</template>

<script>
import getNamespacedState from '@webitel/ui-sdk/src/store/helpers/getNamespacedState';
import { mapActions, mapState } from 'vuex';
import AgentProfile from './_internals/agent-profile.vue';
import AgentStatusTimers from './_internals/agent-status-timers.vue';
import AgentStatusSelect from '../../modules/agent-status-select/components/agent-status-select.vue';

export default {
  name: 'agent-panel',
  components: { AgentProfile, AgentStatusSelect, AgentStatusTimers },
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
      loadAgent(dispatch, payload) {
        return dispatch(`${this.namespace}/LOAD_AGENT`, payload);
      },
    }),
    ...mapActions('call', {
      call: 'CALL',
      openWindow: 'OPEN_WINDOW',
      setCallInfo: 'SET_CALL_INFO',
    }),
    callAgent() {
      this.setCallInfo({
        agent: this.agent,
      });
      this.call();
    },
  },
};
</script>

<style lang="scss" scoped>
.wt-headline.agent-panel {
  display: flex;
  //align-items: center;

  & > div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  //& > * {
  //  margin-right: var(--spacing-sm);
  //}

  &__call-btn {
    padding: var(--spacing-sm);
  }
}
</style>

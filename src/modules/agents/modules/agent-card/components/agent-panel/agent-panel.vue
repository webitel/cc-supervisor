<template>
  <wt-headline class="agent-panel">
    <div class="agent-panel-wrap">
      <wt-icon-btn
        icon="back"
        color="active"
        @click="$router.push('/agents')"
      ></wt-icon-btn>
      <agent-profile :name="agent.name"></agent-profile>
      <div class="agent-panel-rating">
        <wt-icon
          icon="total-score"
          size="md"
        ></wt-icon>
        <span class="agent-panel-rating__text">
          {{ $t('pages.card.score') }}: {{ scoreRequired }}
        </span>
      </div>
      <div class="agent-panel-rating">
        <wt-icon
          icon="rated-calls"
          size="md"
        ></wt-icon>
        <span class="agent-panel-rating__text">
          {{ $t('pages.card.ratedCalls') }}: {{ scoreCount }}
        </span>
      </div>
    </div>
    <div class="agent-panel-wrap">
      <agent-status-select
        :agent-id="agent.agentId"
        :status="agent.status"
        :status-duration="agent.statusDuration"
        @changed="loadAgent"
      ></agent-status-select>
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
import AgentStatusSelect from '@webitel/ui-sdk/src/modules/AgentStatusSelect/components/wt-cc-agent-status-select.vue';
import AgentProfile from './_internals/agent-profile.vue';
import AgentStatusTimers from './_internals/agent-status-timers.vue';

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
    scoreCount() {
      return this.agent.scoreCount || 0;
    },
    scoreRequired() {
      return (this.agent.scoreRequiredAvg || 0).toFixed(2);
    },
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

  .agent-panel-wrap {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  &__call-btn {
    padding: var(--spacing-sm);
  }

  .agent-panel-rating {
    display: flex;
    gap: var(--spacing-xs);
    margin-right: var(--spacing-sm);

    &__text {
      @extend %typo-body-1;
    }
  }

  .agent-status-timers {
    margin-left: var(--spacing-sm);
  }
}
</style>

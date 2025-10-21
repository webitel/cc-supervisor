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

    <div>
      <div class="agent-panel-wrap">
        <agent-status-select
          :agent-id="agent.agentId"
          :status="agent.status"
          :status-duration="agent.statusDuration"
          @changed="loadAgent"
        ></agent-status-select>
        <agent-status-timers :status="agent"></agent-status-timers>

        <wt-button
          v-if="agent.descTrack"
          icon="desk-track"
          rounded
          variant="outlined"
          color="secondary"
          size="md"
          @click="trackAgent"
        />

        <wt-button
          class="agent-panel__call-btn"
          color="success"
          @click="callAgent"
        >{{ $t('pages.card.callAgent') }}
        </wt-button>
      </div>

      <div v-for="s in cli?.spyScreenSessions" :key="`screen-${s.id}`">
        <wt-vidstack-player v-if="s.stream" :stream="s.stream" :session="s" autoplay mode="stream" />
      </div>
    </div>
  </wt-headline>
</template>

<script>
import AgentStatusSelect from '@webitel/ui-sdk/src/modules/AgentStatusSelect/components/wt-cc-agent-status-select.vue';
import getNamespacedState from '@webitel/ui-sdk/src/store/helpers/getNamespacedState';
import { mapActions, mapState } from 'vuex';
import { getCliInstance } from '../../../../../../app/api/callWSConnection';

import AgentProfile from './_internals/agent-profile.vue';
import AgentStatusTimers from './_internals/agent-status-timers.vue';

export default {
  name: 'AgentPanel',
  components: { AgentProfile, AgentStatusSelect, AgentStatusTimers },
  props: {
    namespace: {
      type: String,
    },
  },
  data: () => ({
    cli: null
  }),
  computed: {
    ...mapState({
      agent(state) {
        return getNamespacedState(state, this.namespace).agent;
      },
      score(state) {
        return getNamespacedState(state, this.namespace).score;
      },
    }),
    scoreCount() {
      return this.score.scoreCount || 0;
    },
    scoreRequired() {
      return (this.score.scoreRequiredAvg || 0).toFixed(2);
    },
  },
  async mounted() {
    this.cli = await getCliInstance()
    console.log(this.cli, ' this.cli');
    this.loadScoreData();
  },
  methods: {
    ...mapActions({
      loadAgent(dispatch, payload) {
        return dispatch(`${this.namespace}/LOAD_AGENT`, payload);
      },
      loadScoreData(dispatch) {
        return dispatch(`${this.namespace}/LOAD_SCORE_DATA`);
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
    async trackAgent() {
      console.log(this.agent, ' AGENT');
      await this.cli.spyScreen(Number(this.agent.user.id), {
        iceServers: [],
      }, async (ev) => {
        console.log(ev, ' SPY SCREEN EV');
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@use '@webitel/ui-sdk/src/css/main' as *;

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

.wt-vidstack-player {
  ::v-deep {
    .wt-button {
      margin: 0;
    }
  }
}
</style>

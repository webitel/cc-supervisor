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
      <agent-status-comment
        class="agent-panel__status-comment"
        v-if="agent.statusComment && agent.status === AgentStatus.Pause"
        :status-comment="agent.statusComment"
      />
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

<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import AgentStatusSelect from '@webitel/ui-sdk/src/modules/AgentStatusSelect/components/wt-cc-agent-status-select.vue';
import getNamespacedState from '@webitel/ui-sdk/src/store/helpers/getNamespacedState';

import { AgentStatus } from 'webitel-sdk';

import AgentProfile from './_internals/agent-profile.vue';
import AgentStatusTimers from './_internals/agent-status-timers.vue';
import AgentStatusComment from './_internals/agent-status-comment.vue';

const props = defineProps({
  namespace: {
    type: String,
  },
});

const store = useStore();
const router = useRouter();

const agent = computed(() => getNamespacedState(store.state, props.namespace).agent);

const score = computed(() => getNamespacedState(store.state, props.namespace).score);

const scoreCount = computed(() => score.value.scoreCount || 0);

const scoreRequired = computed(() => (score.value.scoreRequiredAvg || 0).toFixed(2));

const loadAgent = (payload) => store.dispatch(`${props.namespace}/LOAD_AGENT`, payload);

const loadScoreData = () => store.dispatch(`${props.namespace}/LOAD_SCORE_DATA`);

const call = () => store.dispatch('call/CALL');

const openWindow = () => store.dispatch('call/OPEN_WINDOW');

const setCallInfo = (payload) => store.dispatch('call/SET_CALL_INFO', payload);

const callAgent = () => {
  setCallInfo({
    agent: agent.value,
  });
  call();
};

onMounted(() => {
  loadScoreData();
});
</script>

<style lang="scss" scoped>
@use '@webitel/ui-sdk/src/css/main';

.wt-headline.agent-panel {
  display: flex;

  .agent-panel {

    &-wrap {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
    }

    &__status-comment {
      margin-right: var(--spacing-sm);
    }

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

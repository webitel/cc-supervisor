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
          v-if="agent.descTrack && isControlAgentScreenAllow"
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

      <div
        v-if="mediaStream"
      >
        <screen-sharing
          v-for="session in cli?.spyScreenSessions" :key="`screen-${session.id}`"
          :stream="mediaStream"
          :session="session"
          :screenshot-status="screenshotStatus"
          :screenshot-is-loading="screenshotIsLoading"
          :username="agent.user.name"
          :closable="false"
          @close-session="closeSession(session)"
          @make-screenshot="makeScreenshot(session)"
          @toggle-record="toggleRecordAction(session)"
        />
      </div>
    </div>
  </wt-headline>
</template>

<script setup>
import { computed, onMounted, onUnmounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import AgentStatusSelect from '@webitel/ui-sdk/src/modules/AgentStatusSelect/components/wt-cc-agent-status-select.vue';
import getNamespacedState from '@webitel/ui-sdk/src/store/helpers/getNamespacedState';
import { ScreenSharing } from '@webitel/ui-sdk/src/modules/CallSession/index';

import { AgentStatus } from 'webitel-sdk';
import { useScreenSharingSession } from '../../../../../_shared/composables/useScreenSharingSession';

import AgentProfile from './_internals/agent-profile.vue';
import AgentStatusTimers from './_internals/agent-status-timers.vue';
import AgentStatusComment from './_internals/agent-status-comment.vue';
import { getCliInstance } from '../../../../../../app/api/callWSConnection';

const props = defineProps({
  namespace: {
    type: String,
  },
});

const store = useStore();
const router = useRouter();
let cli

const {
  mediaStream,
  screenshotStatus,
  screenshotIsLoading,
  toggleRecordAction,
  makeScreenshot,
  closeSession,
} = useScreenSharingSession()

const agent = computed(() => getNamespacedState(store.state, props.namespace).agent);

const score = computed(() => getNamespacedState(store.state, props.namespace).score);

const scoreCount = computed(() => score.value.scoreCount || 0);

const scoreRequired = computed(() => (score.value.scoreRequiredAvg || 0).toFixed(2));

const loadAgent = async (payload) => {
  await store.dispatch(`${props.namespace}/LOAD_AGENT`, payload);
  await loadScoreData();
};

const loadScoreData = () => store.dispatch(`${props.namespace}/LOAD_SCORE_DATA`);

const call = () => store.dispatch('call/CALL');

const openWindow = () => store.dispatch('call/OPEN_WINDOW');

const setCallInfo = (payload) => store.dispatch('call/SET_CALL_INFO', payload);

const isControlAgentScreenAllow = computed(() => store.getters[`userinfo/IS_CONTROL_AGENT_SCREEN_ALLOW`])

const callAgent = () => {
  setCallInfo({
    agent: agent.value,
  });
  call();
};

const trackAgent = async () => {
  mediaStream.value = null
  cli?.spyScreenSessions.forEach((session) => session.close())

  await cli.spyScreen(Number(agent.value.user.id), {
    iceServers: [],
  }, async (stream) => {
    mediaStream.value = stream;
  });
}

onMounted(async () => {
  cli = await getCliInstance();
  await loadScoreData();
});

onUnmounted(() => {
  mediaStream.value = null;
  if (!cli) return;

  const activeSession = cli.spyScreenSessions.find((session) => session.toUserId === Number(agent.value?.user.id));
  if (activeSession) {
    closeSession(activeSession)
  }
})
</script>

<style lang="scss" scoped>
@use '@webitel/ui-sdk/src/css/main' as *;

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

.wt-vidstack-player {
  :deep(.wt-button) {
    margin: 0;
  }
}
</style>

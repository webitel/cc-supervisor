<template>
  <call-window-wrapper v-show="isVisible">
    <template #header="{ isExpanded }">
      <div class="call-window-conversation-header-before">
        <wt-rounded-action
          v-if="isRinging"
          icon="call-ringing"
          color="success"
          rounded
          @click="answerCall"
        ></wt-rounded-action>
        <img
          v-else-if="!isExpanded"
          class="call-window-conversation-header__sonar"
          :src="sonar"
          alt=""
        >
      </div>
      <wt-avatar
        size="lg"
      ></wt-avatar>
      <div>
        <wt-rounded-action
          v-if="isActive"
          icon="call-end"
          color="danger"
          rounded
          @click="leaveCall"
        ></wt-rounded-action>
      </div>
    </template>
    <template #title>
      {{ agent.name }}
    </template>
    <template #content>
      <div class="call-window-conversation-content">
        <div class="call-window-conversation-content__sonar-wrapper">
          <img
            :src="sonar"
            alt=""
          >
        </div>
        <p>{{ isRinging ? 'Ringing...' : startTime }}</p>
      </div>
    </template>
    <template
      v-if="!isRinging"
      #footer
    >
      <div class="call-window-conversation-footer">
        <wt-rounded-action
          :icon="isMuted ? 'mic-muted' : 'mic'"
          rounded
          @click="toggleMute"
        ></wt-rounded-action>
        <wt-rounded-action
          v-if="allowHold || isHold"
          icon="hold"
          :color="isHold ? 'hold' : 'secondary'"
          rounded
          @click="toggleHold"
        ></wt-rounded-action>
      </div>
    </template>
  </call-window-wrapper>
</template>

<script>
import { storeToRefs } from 'pinia'

import ringingSoundMixin from '../../../app/mixins/ringingSoundMixin/ringingSoundMixin'
import ActiveSonar from '../assets/call-sonars/active-sonar.svg'
import HoldSonar from '../assets/call-sonars/hold-sonar.svg'
import timerMixin from '../mixins/timerMixin/timerMixin'
import { useCallStore } from '../store/call.js';
import CallWindowWrapper from './call-window-wrapper.vue'

export default {
  name: 'CallWindowConversation',
  components: { CallWindowWrapper },
  mixins: [ringingSoundMixin, timerMixin],

  setup() {
    const callStore = useCallStore()
    const {
      call,
      agent,
      isVisible,
      isRinging,
    } = storeToRefs(callStore)

    const {
      subscribeCalls,
      openWindow,
      closeWindow,
      answerCall,
      makeCall,
      leaveCall,
      toggleMute,
      toggleHold,
    } = callStore

    return {
      call,
      agent,
      isVisible,
      isRinging,

      subscribeCalls,
      openWindow,
      closeWindow,
      answerCall,
      makeCall,
      leaveCall,
      toggleMute,
      toggleHold,
    }
  },

  computed: {
    sonar() {
      return this.isHold ? HoldSonar : ActiveSonar
    },
    isMuted() {
      return this.call?.muted
    },
    isHold() {
      return this.call?.isHold
    },
    isActive() {
      return this.call?.active
    },
    allowHold() {
      return this.call?.allowHold
    },
  },

  mounted() {
    this.subscribeCalls()
  },
}
</script>

<style lang="scss" scoped>
.call-window-conversation-header-before {
  display: flex;
  align-items: center;
  justify-content: center;
}
.call-window-conversation-header__sonar {
  width: 24px;
}

.call-window-conversation-content {
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  margin: auto;
}

.call-window-conversation-content__sonar-wrapper {
  width: 32px;
}

.call-window-conversation-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-xs);
}
</style>

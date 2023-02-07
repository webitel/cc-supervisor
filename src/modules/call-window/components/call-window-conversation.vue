<template>
  <call-window-wrapper v-show="isVisible">
    <template v-slot:header="{ isExpanded }">
      <div class="call-window-conversation-header-before">
        <wt-rounded-action
          v-if="isRinging"
          icon="call-ringing"
          color="success"
          rounded
          @click="answerCall"
        ></wt-rounded-action>
        <img
          class="call-window-conversation-header__sonar"
          v-else-if="!isExpanded"
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
    <template v-slot:title>
      {{ agent.name }}
    </template>
    <template v-slot:content>
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
    <template v-slot:footer>
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
import { mapActions, mapState } from 'vuex';
import { CallDirection } from 'webitel-sdk';
import ringingSoundMixin from '../../../app/mixins/ringingSoundMixin/ringingSoundMixin';
import CallWindowWrapper from './call-window-wrapper.vue';
import ActiveSonar from '../assets/call-sonars/active-sonar.svg';
import HoldSonar from '../assets/call-sonars/hold-sonar.svg';
import timerMixin from '../mixins/timerMixin/timerMixin';

export default {
  name: 'call-window-conversation',
  mixins: [
    ringingSoundMixin,
    timerMixin,
  ],
  components: { CallWindowWrapper },
  mounted() {
    this.subscribeCalls();
  },
  computed: {
    ...mapState('call', {
      isOpened: (state) => state.isOpened,
      isVisible: (state) => state.isVisible,
      agent: (state) => state.agent,
      clientName: (state) => state.clientName,
      call: (state) => state.call,
    }),
    sonar() {
      return this.isHold ? HoldSonar : ActiveSonar;
    },
    isMuted() {
      return this.call && this.call.muted;
    },
    isHold() {
      return this.call && this.call.isHold;
    },
    isActive() {
      return this.call && this.call.active;
    },
    allowHold() {
      return this.call && this.call.allowHold;
    },
    isAnswerAllowed() {
      return this.call && this.call.allowAnswer && this.call.direction === CallDirection.Inbound;
    },
  },
  methods: {
    ...mapActions('call', {
      subscribeCalls: 'SUBSCRIBE_CALLS',
      openWindow: 'OPEN_WINDOW',
      closeWindow: 'CLOSE_WINDOW',

      answerCall: 'ANSWER',
      makeCall: 'CALL',
      leaveCall: 'LEAVE_CALL',

      toggleMute: 'TOGGLE_MUTE',
      toggleHold: 'TOGGLE_HOLD',

    }),
    async initWorkspace() {
      await this.subscribeCalls();
    },
  },
};
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

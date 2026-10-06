<template>
  <call-window-wrapper v-show="callState.isVisible">
    <template #header="{ isExpanded }">
      <div class="call-window-conversation-header-before">
        <wt-button
          v-if="isRinging"
          icon="call--filled"
          color="success"
          rounded
          @click="answerCall"
        />
        <img
          v-else-if="!isExpanded"
          class="call-window-conversation-header__sonar"
          :src="sonar"
          alt=""
        >
      </div>
      <wt-avatar
        size="lg"
        :username="agent.name || call?.from?.name"
      ></wt-avatar>
      <div>
        <wt-button
          v-if="isActive"
          icon="call-end--filled"
          color="error"
          rounded
          @click="leaveCall"
        />
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
        <wt-button
          v-if="allowHold || isHold"
          icon="hold"
          :color="ButtonColor.SECONDARY"
          :variant="isHold ? ButtonVariant.ACTIVE : ButtonVariant.OUTLINED"
          rounded
          @click="toggleHold"
        />
        <wt-button
          :icon="isMuted ? 'mic-muted' : 'mic'"
          :color="ButtonColor.SECONDARY"
          :variant="isMuted ? ButtonVariant.ACTIVE : ButtonVariant.OUTLINED"
          rounded
          @click="toggleMute"
        />
      </div>
    </template>
  </call-window-wrapper>
</template>

<script setup lang="ts">
import { ButtonColor, ButtonVariant } from '@webitel/ui-sdk/enums';
import { storeToRefs } from 'pinia';
import { computed, onMounted } from 'vue';

import { useRingingSound } from '../../../app/composables/useRingingSound';
import ActiveSonar from '../assets/call-sonars/active-sonar.svg';
import HoldSonar from '../assets/call-sonars/hold-sonar.svg';
import RingingSonar from '../assets/call-sonars/ringing-sonar.svg';
import { useCallTimer } from '../composables/useCallTimer';
import { useCallStore } from '../store/callStore';
import CallWindowWrapper from './call-window-wrapper.vue';

const callStore = useCallStore();
const { agent, call } = storeToRefs(callStore);
const { callState } = callStore;
const { subscribeCalls, answerCall, leaveCall, toggleMute, toggleHold } =
	callStore;

const { isRinging } = useRingingSound(call);
const { startTime } = useCallTimer(call);

const isMuted = computed(() => call.value?.muted);
const isHold = computed(() => call.value?.isHold);
const isActive = computed(() => call.value?.active);
const allowHold = computed(() => call.value?.allowHold);

const sonar = computed(() => {
	if (isRinging.value) return RingingSonar;
	return isHold.value ? HoldSonar : ActiveSonar;
});

onMounted(() => {
	subscribeCalls();
});
</script>

<style lang="scss" scoped>
.call-window-conversation-header-before {
  min-width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.call-window-conversation-header__sonar {
  width: 32px;
  margin: var(--spacing-2xs);
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

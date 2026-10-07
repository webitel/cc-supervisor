<template>
  <call-window-wrapper v-if="eavesdrop.isOpened">
    <template #header="{ isExpanded }">
      <div class="call-window-eavesdrop-state-icon">
        <wt-icon
          v-show="!isExpanded"
          :icon="stateIcon"
          color="error"
          size="lg"
        ></wt-icon>
      </div>
      <wt-avatar size="lg" :username="agent.name"></wt-avatar>
      <wt-button
        icon="close"
        color="error"
        rounded
        @click="closeWindow"
      />
    </template>
    <template #title>
      <div>
        <div v-if="agent">
          {{ $t('callWindow.agent') }}: {{ agent.name }}
        </div>
      </div>
    </template>
    <template #content>
      <div class="call-window-eavesdrop-content">
        <wt-icon
          :icon="stateIcon"
          color="error"
          size="lg"
        ></wt-icon>
        <p class="call-window-eavesdrop-content__duration typo-body-2">
          {{ $t('callWindow.duration') }}: {{ startTime }}
        </p>
      </div>
    </template>
    <template #footer>
      <div class="call-window-eavesdrop-footer">
        <wt-button
          :icon="isMuted ? 'mic-muted' : 'mic'"
          :color="ButtonColor.SECONDARY"
          :variant="isMuted ? ButtonVariant.ACTIVE : ButtonVariant.OUTLINED"
          rounded
          @click="mute"
        />
        <wt-tooltip>
          <template #activator>
            <wt-button
              icon="prompter"
              :color="ButtonColor.SECONDARY"
              :variant="isPrompt ? ButtonVariant.ACTIVE : ButtonVariant.OUTLINED"
              rounded
              @click="prompter"
            />
          </template>
          {{ $t('callWindow.prompter') }}
        </wt-tooltip>
        <wt-tooltip>
          <template #activator>
            <wt-button
              icon="conference"
              :color="ButtonColor.SECONDARY"
              :variant="isConference ? ButtonVariant.ACTIVE : ButtonVariant.OUTLINED"
              rounded
              @click="conference"
            />
          </template>
          {{ $t('callWindow.conference') }}
        </wt-tooltip>
      </div>
    </template>
  </call-window-wrapper>
</template>

<script setup lang="ts">
import { ButtonColor, ButtonVariant } from '@webitel/ui-sdk/enums';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

import { useCallTimer } from '../composables/useCallTimer';
import { useCallStore } from '../store/callStore';
import CallWindowWrapper from './call-window-wrapper.vue';

const callStore = useCallStore();
const { agent, call } = storeToRefs(callStore);
const { eavesdrop } = callStore;
const {
	eavesdropCloseWindow: closeWindow,
	eavesdropMute: mute,
	eavesdropPrompt: prompter,
	eavesdropConference: conference,
} = callStore;

const { startTime } = useCallTimer(call);

const isPrompt = computed(() => call.value?.eavesdropIsPrompt);
const isConference = computed(() => call.value?.eavesdropIsConference);
const isMuted = computed(() => call.value?.eavesdropIsMuted);

const stateIcon = computed(() => {
	if (isPrompt.value) return 'prompter';
	if (isConference.value) return 'conference';
	return 'sv-ear';
});
</script>

<style scoped>
.call-window-eavesdrop-state-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.call-window-eavesdrop-title__subtitle {
  cursor: pointer;
}

.call-window-eavesdrop-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
}

.call-window-eavesdrop-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-xs);
}
</style>

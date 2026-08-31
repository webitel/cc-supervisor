<template>
  <call-window-wrapper v-if="isOpened">
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

<script>
import { ButtonColor, ButtonVariant } from '@webitel/ui-sdk/enums';
import copy from 'clipboard-copy';
import { mapActions, mapState } from 'vuex';
import { CallDirection, EavesdropState } from 'webitel-sdk';

import timerMixin from '../mixins/timerMixin/timerMixin';
import CallWindowWrapper from './call-window-wrapper.vue';

export default {
	name: 'CallWindowEavesdrop',
	components: {
		CallWindowWrapper,
	},
	mixins: [
		timerMixin,
	],
	data() {
		return {
			inbound: CallDirection.Inbound,
			isCopied: false,
			ButtonColor,
			ButtonVariant,
		};
	},
	computed: {
		...mapState('call', {
			isOpened: (state) => state.isEavesdropOpened,
			agent: (state) => state.agent,
			client: (state) => state.client,
			call: (state) => state.call,
		}),
		stateIcon() {
			if (this.isPrompt) return 'prompter';
			if (this.isConference) return 'conference';
			return 'sv-ear';
		},
		isMuted() {
			return this.call.eavesdropIsMuted;
		},
		isPrompt() {
			return this.call.eavesdropIsPrompt;
		},
		isConference() {
			return this.call.eavesdropIsConference;
		},
	},
	methods: {
		...mapActions('call', {
			closeWindow: 'EAVESDROP_CLOSE_WINDOW',
		}),
		mute() {
			this.call.changeEavesdropState(EavesdropState.Muted);
		},
		prompter() {
			this.call.changeEavesdropState(EavesdropState.Prompt);
		},
		conference() {
			this.call.changeEavesdropState(EavesdropState.Conference);
		},
		copyNumber(ev, toggleCb) {
			copy(this.client.number);
			this.isCopied = true;
			toggleCb(ev);
			setTimeout(() => {
				this.isCopied = false;
				toggleCb(ev);
			}, 1500);
		},
	},
};
</script>

<style
  lang="scss"
  scoped
>
@use '@webitel/ui-sdk/src/css/main';

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

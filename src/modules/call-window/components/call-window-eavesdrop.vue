<template>
  <call-window-wrapper v-if="isOpened">
    <template #header="{ isExpanded }">
      <div class="call-window-eavesdrop-state-icon">
        <wt-icon
          v-show="!isExpanded"
          :icon="stateIcon"
          color="error"
        ></wt-icon>
      </div>
      <wt-avatar size="lg"></wt-avatar>
      <wt-rounded-action
        icon="close"
        color="error"
        rounded
        @click="closeWindow"
      ></wt-rounded-action>
    </template>
    <template #title>
      <div>
        <div v-if="agent">
          {{ $t('callWindow.agent') }}: {{ agent.name }}
        </div>
        <div v-if="client">
          <wt-popover>
            <template #activator="{ toggle }">
              <div
                class="call-window-eavesdrop-title__subtitle typo-body-2"
                tabindex="0"
                @click="(ev) => copyNumber(ev, toggle)"
                @keydown.enter="(ev) => copyNumber(ev, toggle)"
              >
                {{ $t('callWindow.client') }}: {{ client.name }}
              </div>
            </template>

            <template #default>
              <div>
                {{ $t('callWindow.copied') }}
              </div>
            </template>
          </wt-popover>
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
        <wt-rounded-action
          :icon="isMuted ? 'mic-muted' : 'mic'"
          :active="isMuted"
          rounded
          @click="mute"
        ></wt-rounded-action>
        <wt-tooltip>
          <template #activator>
            <wt-rounded-action
              :active="isPrompt"
              icon="prompter"
              :color="isPrompt ? 'danger' : 'default'"
              rounded
              @click="prompter"
            ></wt-rounded-action>
          </template>
          {{ $t('callWindow.prompter') }}
        </wt-tooltip>
        <wt-tooltip>
          <template #activator>
            <wt-rounded-action
              :active="isConference"
              :color="isConference ? 'danger' : 'default'"
              icon="conference"
              rounded
              @click="conference"
            ></wt-rounded-action>
          </template>
          {{ $t('callWindow.conference') }}
        </wt-tooltip>
      </div>
    </template>
  </call-window-wrapper>
</template>

<script>
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

<template>
  <call-window-wrapper v-show="isVisible">
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

<script>
import { mapActions, mapState } from 'vuex';
import { ButtonColor, ButtonVariant } from '@webitel/ui-sdk/enums';

import ringingSoundMixin from '../../../app/mixins/ringingSoundMixin/ringingSoundMixin';
import ActiveSonar from '../assets/call-sonars/active-sonar.svg';
import HoldSonar from '../assets/call-sonars/hold-sonar.svg';
import RingingSonar from '../assets/call-sonars/ringing-sonar.svg';
import timerMixin from '../mixins/timerMixin/timerMixin';
import CallWindowWrapper from './call-window-wrapper.vue';

export default {
	name: 'CallWindowConversation',
	components: {
		CallWindowWrapper,
	},
	mixins: [
		ringingSoundMixin,
		timerMixin,
	],
	data() {
		return {
			ButtonColor,
			ButtonVariant,
		};
	},
	mounted() {
		this.subscribeCalls();
	},
	computed: {
		...mapState('call', {
			isVisible: (state) => state.isVisible,
			agent: (state) => state.agent,
			call: (state) => state.call,
		}),
		sonar() {
			return this.isRinging
				? RingingSonar
				: this.isHold
					? HoldSonar
					: ActiveSonar;
		},
		isMuted() {
			return this.call?.muted;
		},
		isHold() {
			return this.call?.isHold;
		},
		isActive() {
			return this.call?.active;
		},
		allowHold() {
			return this.call?.allowHold;
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
	},
};
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

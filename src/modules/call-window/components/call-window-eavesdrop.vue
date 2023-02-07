<template>
  <call-window-wrapper v-if="isOpened">
    <template v-slot:header="{ isExpanded }">
      <div class="call-window-eavesdrop-state-icon">
        <wt-icon
          v-show="!isExpanded"
          :icon="stateIcon"
          color="danger"
        ></wt-icon>
      </div>
      <wt-avatar
        size="lg"
      ></wt-avatar>
      <wt-rounded-action
        icon="close"
        color="danger"
        rounded
        @click="closeWindow"
      ></wt-rounded-action>
    </template>
    <template v-slot:title>
      <div>
        <div v-if="agent">
          {{ $t('callWindow.agent') }}: {{ agent.name }}
        </div>
        <div v-if="client">
          <wt-tooltip>
            <template v-slot:activator>
              <div
                class="call-window-eavesdrop-title__subtitle"
                tabindex="0"
                @click="copyNumber"
                @keydown.enter="copyNumber"
              >
                {{ $t('callWindow.client') }}: {{ client.name }}
              </div>
            </template>
            <div v-if="isCopied">
              {{ $t('callWindow.copied') }}
            </div>
          </wt-tooltip>
        </div>
      </div>
    </template>
    <template v-slot:content>
      <div class="call-window-eavesdrop-content">
        <wt-icon
          :icon="stateIcon"
          color="danger"
          size="lg"
        ></wt-icon>
        <p class="call-window-eavesdrop-content__duration">
          {{ $t('callWindow.duration') }}: {{ startTime }}
        </p>
      </div>
    </template>
    <template v-slot:footer>
      <div class="call-window-eavesdrop-footer">
        <wt-rounded-action
          :icon="isMuted ? 'mic-muted' : 'mic'"
          :active="isMuted"
          rounded
          @click="mute"
        ></wt-rounded-action>
        <wt-tooltip>
          <template v-slot:activator>
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
          <template v-slot:activator>
            <wt-rounded-action
              :active="isConference"
              :color="isPrompt ? 'danger' : 'default'"
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
import CallWindowWrapper from './call-window-wrapper.vue';
import timerMixin from '../mixins/timerMixin/timerMixin';

export default {
  name: 'call-window-eavesdrop',
  mixins: [timerMixin],
  components: {
    CallWindowWrapper,
  },
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
    copyNumber() {
      copy(this.client.number);
      this.isCopied = true;
      setTimeout(() => {
        this.isCopied = false;
      }, 1500);
    },
  },
};
</script>

<style lang="scss" scoped>
.call-window-eavesdrop-state-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.call-window-eavesdrop-title__subtitle {
  @extend %typo-body-2;
  cursor: pointer;
}

.call-window-eavesdrop-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
}

.call-window-eavesdrop-content__duration {
  @extend %typo-body-2;
}

.call-window-eavesdrop-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-xs);
}

</style>

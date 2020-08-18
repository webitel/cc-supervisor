<template>
  <div v-show="isVisible" class="call-window" :class="{'call-window__closed': !isOpened}">
    <button class="icon-btn close-button" @click.prevent="closeWindow">
      <icon>
        <svg class="icon icon-close_md md call-window-btn">
          <use xlink:href="#icon-close_md"></use>
        </svg>
      </icon>
    </button>
    <div class="call-window__agent-container">
      <button v-show="!call" class="icon-btn btn-call" @click.prevent="makeCall">
        <icon>
          <svg class="icon icon-call_processing_md lg call-btn">
            <use xlink:href="#icon-call_processing_md"></use>
          </svg>
        </icon>
      </button>
      <button v-show="isAnswerAllowed" class="icon-btn btn-call" @click.prevent="answerCall">
        <icon>
          <svg class="icon icon-call_processing_md lg call-btn">
            <use xlink:href="#icon-call_processing_md"></use>
          </svg>
        </icon>
      </button>
      <icon class="call-window__agent-img">
        <svg class="icon icon-agent_md xl white-color">
          <use xlink:href="#icon-agent_md"></use>
        </svg>
      </icon>
      <button
        v-show="isActive"
        class="icon-btn call-window__agent-btn-leave"
        @click.prevent="leaveCall"
      >
        <icon>
          <svg class="icon icon-call_disconnect_md lg disconnect-btn">
            <use xlink:href="#icon-call_disconnect_md"></use>
          </svg>
        </icon>
      </button>
    </div>
    <div class="call-window__agent-name-container">
      <span
        v-if="agent"
        class="call-window__agent-name"
      >
        {{ $t('callWindow.agent') }}: {{ agent.name }}</span>
    </div>
    <div v-show="isOpened">
      <div class="call-animation">
        <iframe
          v-if="animationUrl"
          :src="animationUrl"
        ></iframe>
      </div>
      <div class="call-window__time-container">
        <span class="call-window__time">{{ time }}</span>
      </div>
      <div class="call-window__action-container">
        <button class="icon-btn button-padding" @click.prevent="">
          <icon>
            <svg class="icon icon-send_message_md md call-window-btn">
              <use xlink:href="#icon-send_message_md"></use>
            </svg>
          </icon>
        </button>
        <button
          v-if="isMuted"
          class="icon-btn call-window__action-item"
          @click.prevent="toggleMute"
        >
          <icon>
            <svg class="icon icon-mic_off_md md call-window-rec-btn--off">
              <use xlink:href="#icon-mic_off_md"></use>
            </svg>
          </icon>
        </button>
        <button v-else class="icon-btn call-window__action-item" @click.prevent="toggleMute">
          <icon>
            <svg class="icon icon-mic_on_md md call-window-rec-btn">
              <use xlink:href="#icon-mic_on_md"></use>
            </svg>
          </icon>
        </button>
        <button v-if="isHold" class="icon-btn call-window__action-item" @click.prevent="toggleHold">
          <icon>
            <svg class="icon icon-play_md md call-window-btn--off">
              <use xlink:href="#icon-play_md"></use>
            </svg>
          </icon>
        </button>
        <button v-else class="icon-btn call-window__action-item" @click.prevent="toggleHold">
          <icon>
            <svg class="icon icon-pause_md md call-window-btn">
              <use xlink:href="#icon-pause_md"></use>
            </svg>
          </icon>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { CallDirection, CallActions } from 'webitel-sdk';
import convertDuration from '../../utils/convertDuration';
import ringingSoundMixin from '../../mixins/ringingSoundMixin';

export default {
  name: 'call-window',
  mixins: [
    ringingSoundMixin,
  ],
  mounted() {
    this.subscribeCalls();
  },
  computed: {
    ...mapState('call', {
      isOpened: (state) => state.isOpened,
      isVisible: (state) => state.isVisible,
      agent: (state) => state.agent,
      clientName: (state) => state.clientName,
      time: (state) => convertDuration(state.time),
      call: (state) => state.call,
    }),
    animationUrl() {
      const baseUrl = process.env.BASE_URL; // to resolve iframe equalizer path after build
      let animation = '';
      switch (this.call && this.call.state) {
        // case CallActions.Ringing:
        //     animation = 'ringing';
        //     break;
        case CallActions.Hold:
          animation = 'hold';
          break;
        case CallActions.Active:
          animation = 'active';
          break;
        default:
          break;
      }
      return animation
        ? `${baseUrl}animations/call-sonars/${animation}/${animation}.html`
        : false;
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
$modal-background-color: #171A2A;

.call-animation {
  width: 32px;
  height: 32px;
  margin-bottom: 10px;
  margin-top: 38px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
}

.call-window {
  width: 230px;
  height: 298px;
  background-color: $modal-background-color;
  border-radius: $border-radius;
  position: fixed;
  right: 5px;
  bottom: 5px;
  z-index: 100;

  &__closed {
    height: 142px;
  }
}

.call-window__agent-container {
  padding: 0px 40px;
  align-items: center;
  margin-top: 30px;
  display: flex;
}

.call-window__agent-btn-leave {
  margin-right: -20px;
}

.call-window__agent-img {
  margin: 0px 20px;
  margin-left: 50px;

  &__call {
    margin-left: 50px;
  }
}

.call-window__agent-name-container {
  margin-top: 10px;
  text-align: center;
}

.call-window__agent-name {
  @extend .typo-heading-md;
  color: $white-color;
}

.call-window__client-name-container {
  text-align: center;
}

.call-window__client-name {
  @extend .typo-body-md;
  color: $white-color;
}

.call-window__time-container {
  text-align: center;
  width: 100%;
  // position: absolute;
  // bottom: 94px;
}

.call-window__time {
  @extend .typo-body-md;
  color: $white-color;
}

.call-window__action-container {
  position: absolute;
  bottom: 30px;
  height: 24px;
  // margin: 0px 55px;
  text-align: center;
  width: 100%;
}

.button-padding {
  padding: 0px;
}

.call-window__action-item {
  @extend .button-padding;
  margin-left: 16px;
}

.close-button {
  position: absolute;
  right: 3px;
  top: 3px;
  width: 24px;
  height: 24px;
  padding: unset;
}

.white-color {
  fill: $white-color;
}

.btn-call {
  position: absolute;
}

// .disconnect-btn {
//     background-color: $false-color;
//     border-radius: 50%;
// }

// .connect-btn {
//     background-color: $true-color;
//     border-radius: 50%;
// }

</style>

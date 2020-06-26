<template>
    <div v-if="isOpened" class="call-window">
        <button class="icon-btn close-button" @click.prevent="closeWindow()">
            <icon>
                <svg class="icon icon-close_md md call-window-btn">
                <use xlink:href="#icon-close_md"></use>
                </svg>
            </icon>
        </button>
        <div class="call-window__agent-container">
            <icon class="call-window__agent-img">
                <svg class="icon icon-agent_md xl white-color">
                <use xlink:href="#icon-agent_md"></use>
                </svg>
            </icon>
            <button v-if="isAttachedToCall" class="icon-btn btn-height" @click.prevent="leaveCall()">
                <icon>
                    <svg class="icon icon-call_disconnect_md lg disconnect-btn">
                    <use xlink:href="#icon-call_disconnect_md"></use>
                    </svg>
                </icon>
            </button>
            <button v-else class="icon-btn btn-height" @click.prevent="call()">
                <icon>
                    <svg class="icon icon-call_processing_md lg call-btn">
                    <use xlink:href="#icon-call_processing_md"></use>
                    </svg>
                </icon>
            </button>
        </div>
        <!-- <iframe
            v-if="animationUrl"
            :src="animationUrl"
        ></iframe> -->
        <div class="call-window__agent-name-container">
            <span v-if="agent" class="call-window__agent-name">{{agent.name}}</span>
        </div>
        <div class="call-window__client-name-container">
            <span v-if="clientName" class="call-window__client-name">{{$t('callWindow.client')}}: {{clientName}}</span>
        </div>
        <div class="call-window__time-container">
            <span class="call-window__time">{{$t('callWindow.call')}}: {{time}}</span>
        </div>
        <div class="call-window__action-container">
            <button class="icon-btn button-padding" @click.prevent="">
                <icon>
                    <svg class="icon icon-send_message_md md call-window-btn">
                    <use xlink:href="#icon-send_message_md"></use>
                    </svg>
                </icon>
            </button>
            <button v-if="isMuted" class="icon-btn call-window__action-item" @click.prevent="unmuteMicro()">
                <icon>
                    <svg class="icon icon-mic_off_md md call-window-rec-btn--off">
                    <use xlink:href="#icon-mic_off_md"></use>
                    </svg>
                </icon>
            </button>
            <button v-else class="icon-btn call-window__action-item" @click.prevent="muteMicro()">
                <icon>
                    <svg class="icon icon-mic_on_md md call-window-rec-btn">
                    <use xlink:href="#icon-mic_on_md"></use>
                    </svg>
                </icon>
            </button>
             <button v-if="isHold" class="icon-btn call-window__action-item" @click.prevent="unholdCall()">
                <icon>
                    <svg class="icon icon-play_md md call-window-btn--off">
                    <use xlink:href="#icon-play_md"></use>
                    </svg>
                </icon>
            </button>
            <button v-else class="icon-btn call-window__action-item" @click.prevent="holdCall()">
                <icon>
                    <svg class="icon icon-pause_md md call-window-btn">
                    <use xlink:href="#icon-pause_md"></use>
                    </svg>
                </icon>
            </button>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    name: 'call-window',
    data() {
        return {
        };
    },
    computed: {
        ...mapState('call', {
            isOpened: (state) => state.isOpened,
            isMuted: (state) => state.isMuted,
            isHold: (state) => state.isHold,
            isAttachedToCall: (state) => state.isAttachedToCall,
            agent: (state) => state.agent,
            clientName: (state) => state.clientName,
            time: (state) => state.time,
        }),
    },
    methods: {
        ...mapActions('call', {
            openWindow: 'OPEN_WINDOW',
            closeWindow: 'CLOSE_WINDOW',
            call: 'CALL',
            leaveCall: 'LEAVE_CALL',
            muteMicro: 'MUTE_MICRO',
            unmuteMicro: 'UNMUTE_MICRO',
            holdCall: 'HOLD_CALL',
            unholdCall: 'UNHOLD_CALL',
        }),
        animationUrl() {
            const baseUrl = process.env.BASE_URL; // to resolve iframe equalizer path after build
            const animation = 'ringing';
            // switch (this.call.state) {
            // case CallActions.Ringing:
            //     animation = 'ringing';
            //     break;
            // case CallActions.Hold:
            //     animation = 'hold';
            //     break;
            // case CallActions.Active:
            //     animation = 'active';
            //     break;
            // default:
            //     break;
            // }
            return animation
            ? `${baseUrl}animations/call-sonars/${animation}/${animation}.html`
            : false;
        },
    },
};
</script>

<style lang="scss" scoped>
$modal-background-color: #171A2A;

.call-window {
    width: 230px;
    height: 298px;
    background-color: $modal-background-color;
    border-radius: 5px;
    position: fixed;
    right: 5px;
    bottom: 5px;
    z-index: 100;
}

.call-window__agent-container {
    margin-top: 30px;
    display: flex;
}

.call-window__agent-img {
    margin-left: 90px;
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
    position: absolute;
    bottom: 94px;
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

.btn-height {
    max-height: 24px;
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

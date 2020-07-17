<template>
    <div v-if="isOpened" class="call-window">
        <button class="icon-btn close-button" @click.prevent="closeWindow">
            <icon>
                <svg class="icon icon-close_md md call-window-btn">
                <use xlink:href="#icon-close_md"></use>
                </svg>
            </icon>
        </button>
        <div class="call-window__agent-container">
            <icon class="call-window__agent-img" >
                <svg class="icon icon-agent_md xl white-color">
                <use xlink:href="#icon-agent_md"></use>
                </svg>
            </icon>
        </div>
        <div class="call-window__agent-name-container">
            <span v-if="agent" class="call-window__agent-name">{{$t('callWindow.agent')}}: {{agent.name}}</span>
        </div>
        <div class="call-window__client-name-container">
            <span v-if="clientName" class="call-window__client-name">{{$t('callWindow.client')}}: {{clientName}}</span>
        </div>
         <div class="call-window__speaker-icon-container">
            <icon>
                <svg class="icon icon-speaker_on_md md call-window__speaker-icon">
                <use xlink:href="#icon-speaker_on_md"></use>
                </svg>
            </icon>
        </div>
        <div class="call-window__time-container">
            <span class="call-window__time">{{$t('callWindow.duration')}}: {{time}}</span>
        </div>
        <div class="call-window__action-container">
            <button class="icon-btn button-padding" @click.prevent="">
                <icon>
                    <svg class="icon icon-send_message_md md call-window-btn">
                    <use xlink:href="#icon-send_message_md"></use>
                    </svg>
                </icon>
            </button>
            <button v-if="lastDtmf == 0" class="icon-btn call-window__action-item" @click.prevent="">
                <icon>
                    <svg class="icon icon-mic_off_md md call-window-btn--off">
                    <use xlink:href="#icon-mic_off_md"></use>
                    </svg>
                </icon>
                <tooltip>{{$t('callWindow.mute')}}</tooltip>
            </button>
            <button v-else class="icon-btn call-window__action-item" @click.prevent="mute">
                <icon>
                    <svg class="icon icon-mic_on_md md call-window-btn">
                    <use xlink:href="#icon-mic_on_md"></use>
                    </svg>
                </icon>
                <tooltip>{{$t('callWindow.mute')}}</tooltip>
            </button>
            <button class="icon-btn call-window__action-item" @click.prevent="prompter">
                <icon>
                    <svg class="icon icon-prompter_md md call-window-btn" :class="{'call-window-btn--off': lastDtmf == 2}">
                    <use xlink:href="#icon-prompter_md"></use>
                    </svg>
                </icon>
                <tooltip>{{$t('callWindow.prompter')}}</tooltip>
            </button>
            <button class="icon-btn call-window__action-item" @click.prevent="conference">
                <icon>
                    <svg class="icon icon-agents_md md call-window-btn" :class="{'call-window-btn--off': lastDtmf == 3}">
                    <use xlink:href="#icon-agents_md"></use>
                    </svg>
                </icon>
                <tooltip>{{$t('callWindow.conference')}}</tooltip>
            </button>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { CallDirection } from 'webitel-sdk';
import getTimeFromDuration from '@/utils/getTimeFromDuration';
import Tooltip from './utils/tooltip.vue';

export default {
    name: 'call-window-eavesdrop',
    components: {
        Tooltip,
    },
    data() {
        return {
            inbound: CallDirection.Inbound,
        };
    },
    computed: {
        ...mapState('call', {
            isOpened: (state) => state.isEavesdropOpened,
            lastDtmf: (state) => state.eavesdropLastDTMF,
            agent: (state) => state.agent,
            clientName: (state) => state.clientName,
            time: (state) => getTimeFromDuration(state.time),
            call: (state) => state.call,
        }),
    },
    methods: {
        ...mapActions('call', {
            closeWindow: 'EAVESDROP_CLOSE_WINDOW',
            sendDtmf: 'SEND_DTMF',
        }),
        mute() {
            this.sendDtmf({ dtmf: '0' });
        },
        prompter() {
            this.sendDtmf({ dtmf: '2' });
        },
        conference() {
            this.sendDtmf({ dtmf: '3' });
        },
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

.tooltip {
    top: calc(100% - 60px); // icon height + 11px margin
    left: 50%;
    transform: translateX(-50%);
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

.call-window__speaker-icon-container {
    margin-top: 14px;
}

.call-window__speaker-icon {
    fill: $false-color;
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

    &:hover .tooltip {
        opacity: 1;
        pointer-events: auto;
    }
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

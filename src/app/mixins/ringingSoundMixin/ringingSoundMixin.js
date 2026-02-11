import { mapState } from 'vuex';
import { CallActions, CallDirection } from 'webitel-sdk';

// import isIncomingRinging from '../store/modules/call/scripts/isIncomingRinging';
import AUDIO_URL from './ringing.mp3';

export default {
	data: () => ({
		ringingAudio: new Audio(AUDIO_URL),
	}),

	created() {
		this.ringingAudio.loop = true;
	},

	watch: {
		isRinging(value) {
			if (value) {
				this.ringingAudio.play().catch();
			} else {
				this.ringingAudio.pause();
				this.ringingAudio.currentTime = 0;
			}
		},
	},

	computed: {
		...mapState('call', {
			call: (state) => state.call,
		}),

		isRinging() {
			return (
				this.call &&
				this.call.state === CallActions.Ringing &&
				this.call.direction === CallDirection.Inbound
			);
		},
	},
};

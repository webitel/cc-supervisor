import { computed, type Ref, watch } from 'vue';
import { CallActions, CallDirection } from 'webitel-sdk';

import AUDIO_URL from './assets/ringing.mp3';

export function useRingingSound(
	call: Ref<{
		state?: string;
		direction?: string;
	} | null>,
) {
	const ringingAudio = new Audio(AUDIO_URL);
	ringingAudio.loop = true;

	const isRinging = computed(
		() =>
			!!call.value &&
			call.value.state === CallActions.Ringing &&
			call.value.direction === CallDirection.Inbound,
	);

	watch(isRinging, (value) => {
		if (value) {
			ringingAudio.play().catch(() => {});
		} else {
			ringingAudio.pause();
			ringingAudio.currentTime = 0;
		}
	});

	return {
		isRinging,
	};
}

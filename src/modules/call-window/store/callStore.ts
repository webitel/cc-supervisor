import type { EngineAgent } from '@webitel/api-services/gen/models';
import { defineStore } from 'pinia';
import { reactive, ref, shallowRef } from 'vue';

import { createCallActions } from './internal/callActions';
import { createCallEventHandler } from './internal/callEventHandler';
import { createEavesdropActions } from './internal/eavesdropActions';

export const useCallStore = defineStore('call', () => {
	const timer = ref(null);

	const call = shallowRef(null);
	const agent = ref<Partial<EngineAgent>>({});
	const client = ref({});
	const time = ref(0);

	const callState = reactive({
		isOpened: false,
		isVisible: false,
		isRecording: false,
		isHold: false,
		isMuted: false,
		isAttachedToCall: false,
	});

	const eavesdrop = reactive({
		isEavesdrop: false,
		isOpened: false,
		lastDTMF: 0 as string | number,
	});

	const audioElement = shallowRef(null);

	const startTimer = () => {
		timer.value = setInterval(() => {
			time.value += 1;
		}, 1000);
	};

	const stopTimer = () => {
		clearInterval(timer.value);
		timer.value = null;
	};

	const stopAudioPlayback = () => {
		if (audioElement.value) {
			audioElement.value.pause();
			audioElement.value = null;
		}
	};

	const clearState = () => {
		timer.value = null;
		call.value = null;
		agent.value = {};
		client.value = {};
		time.value = 0;
		callState.isOpened = false;
		callState.isVisible = false;
		callState.isRecording = false;
		callState.isHold = false;
		callState.isMuted = false;
		callState.isAttachedToCall = false;

		eavesdrop.isEavesdrop = false;
		eavesdrop.isOpened = false;
		eavesdrop.lastDTMF = 0;
		audioElement.value = null;
	};

	const callHandler = createCallEventHandler({
		call,
		agent,
		client,
		time,
		callState,
		eavesdrop,
		audioElement,
		startTimer,
		stopTimer,
		stopAudioPlayback,
	});

	const {
		subscribeCalls: subscribeCallsWithHandler,
		openWindow,
		leaveCall,
		closeWindow,
		makeCall,
		answerCall,
		toggleMute,
		toggleHold,
		setCallInfo,
	} = createCallActions({
		call,
		agent,
		client,
		callState,
		stopTimer,
		stopAudioPlayback,
		clearState,
	});

	const subscribeCalls = () => subscribeCallsWithHandler(callHandler);

	const {
		eavesdropOpenWindow,
		eavesdropCloseWindow,
		eavesdropMute,
		eavesdropPrompt,
		eavesdropConference,
		attachToCall,
		sendDtmf,
	} = createEavesdropActions({
		call,
		eavesdrop,
		leaveCall,
		stopTimer,
		stopAudioPlayback,
		clearState,
	});

	return {
		timer,
		call,
		agent,
		client,
		time,
		callState,
		eavesdrop,
		audioElement,

		subscribeCalls,
		openWindow,
		closeWindow,
		eavesdropOpenWindow,
		eavesdropCloseWindow,
		makeCall,
		answerCall,
		leaveCall,
		toggleMute,
		toggleHold,
		eavesdropMute,
		eavesdropPrompt,
		eavesdropConference,
		setCallInfo,
		attachToCall,
		sendDtmf,
	};
});

import type { EngineAgent } from '@webitel/api-services/gen/models';
import { defineStore } from 'pinia';
import { reactive, ref, shallowRef } from 'vue';

import { createCallActions } from './internal/callActions';
import { createCallEventHandler } from './internal/callEventHandler';
import { createEavesdropActions } from './internal/eavesdropActions';

export const useCallStore = defineStore('call', () => {
	const call = shallowRef(null);
	const agent = ref<Partial<EngineAgent>>({});
	const client = ref({});

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

	const stopAudioPlayback = () => {
		if (audioElement.value) {
			audioElement.value.pause();
			audioElement.value = null;
		}
	};

	const clearState = () => {
		call.value = null;
		agent.value = {};
		client.value = {};
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
		callState,
		eavesdrop,
		audioElement,
		stopAudioPlayback,
	});

	const {
		subscribeCalls: subscribeCallsWithHandler,
		leaveCall,
		makeCall,
		answerCall,
		toggleMute,
		toggleHold,
		setCallInfo,
	} = createCallActions({
		call,
		agent,
		client,
	});

	const subscribeCalls = () => subscribeCallsWithHandler(callHandler);

	const {
		eavesdropOpenWindow,
		eavesdropCloseWindow,
		eavesdropMute,
		eavesdropPrompt,
		eavesdropConference,
		attachToCall,
	} = createEavesdropActions({
		call,
		eavesdrop,
		leaveCall,
		stopAudioPlayback,
		clearState,
	});

	return {
		call,
		agent,
		callState,
		eavesdrop,

		subscribeCalls,
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
	};
});

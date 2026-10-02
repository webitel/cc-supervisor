import type { EngineAgent } from '@webitel/api-services/gen/models';
import { defineStore } from 'pinia';
import { markRaw, ref, shallowRef, triggerRef } from 'vue';
import { CallActions, EavesdropState } from 'webitel-sdk';

import { getCliInstance } from '../../../app/api/callWSConnection';

const callParams = {
	disableStun: true,
};

export const useCallStore = defineStore('call', () => {
	const timer = ref(null);

	const call = shallowRef(null);
	const agent = ref<Partial<EngineAgent>>({});
	const client = ref({});
	const time = ref(0);
	const isOpened = ref(false);
	const isVisible = ref(false);
	const isRecording = ref(false);
	const isHold = ref(false);
	const isMuted = ref(false);
	const isAttachedToCall = ref(false);

	// EAVESDROP
	const isEavesdrop = ref(false);
	const isEavesdropOpened = ref(false);
	const eavesdropLastDTMF = ref<string | number>(0);
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
		isOpened.value = false;
		isVisible.value = false;
		isRecording.value = false;
		isHold.value = false;
		isMuted.value = false;
		isAttachedToCall.value = false;

		isEavesdrop.value = false;
		isEavesdropOpened.value = false;
		eavesdropLastDTMF.value = 0;
		audioElement.value = null;
	};

	const handleStreamAction = (streamCall) => {
		stopAudioPlayback();

		const audio = markRaw(new Audio());
		const stream = streamCall.peerStreams.slice(-1).pop();
		if (stream) {
			audio.srcObject = stream;
			audio.play();
			audioElement.value = audio;
		}
	};

	const callHandler = (action, rawIncomingCall) => {
		const incomingCall =
			rawIncomingCall && typeof rawIncomingCall === 'object'
				? markRaw(rawIncomingCall)
				: rawIncomingCall;
		switch (action) {
			case CallActions.Ringing:
				if (call.value) return;
				call.value = incomingCall;
				time.value = 0;
				agent.value = {
					name: incomingCall.displayName,
				};
				if (isEavesdrop.value) {
					client.value = {
						name:
							incomingCall.variables?.eavesdrop_name ||
							incomingCall.destination,
						number: incomingCall.destination,
					};
					isEavesdropOpened.value = true;
				} else {
					isVisible.value = true;
				}
				break;
			case CallActions.Active:
				if (isEavesdrop.value) {
					client.value = incomingCall.variables?.eavesdrop_name || '';
					isEavesdropOpened.value = true;
					isEavesdrop.value = false;
					agent.value = {
						name: incomingCall.displayName,
					};
				} else {
					isOpened.value = true;
				}

				triggerRef(call);
				startTimer();
				break;
			case CallActions.Bridge:
				stopTimer();
				call.value = incomingCall;
				time.value = 0;
				agent.value = {
					name: incomingCall.displayName,
				};
				startTimer();
				break;
			case CallActions.Hold:
				stopTimer();
				triggerRef(call);
				break;
			case CallActions.Hangup:
				stopTimer();
				call.value = null;
				time.value = 0;
				isVisible.value = false;
				isOpened.value = false;
				isEavesdropOpened.value = false;
				eavesdropLastDTMF.value = '0';
				break;
			case CallActions.PeerStream:
				handleStreamAction(incomingCall);
				break;
			case CallActions.Eavesdrop:
				triggerRef(call);
				break;
			default:
		}
	};

	const subscribeCalls = async () => {
		const cli = await getCliInstance();
		await cli.subscribeCall(callHandler, null);
	};

	const openWindow = async () => {
		isVisible.value = true;
	};

	const leaveCall = async () => {
		if (call.value?.allowHangup) {
			try {
				await call.value.hangup();
			} catch (err) {
				console.error(err);
			}
		}
	};

	const closeWindow = async () => {
		stopAudioPlayback();
		await leaveCall();
		stopTimer();
		isOpened.value = false;
		isVisible.value = false;
		clearState();
	};

	const eavesdropOpenWindow = async () => {
		isEavesdropOpened.value = true;
	};

	const eavesdropCloseWindow = async () => {
		stopAudioPlayback();
		await leaveCall();
		stopTimer();
		isEavesdropOpened.value = false;
		eavesdropLastDTMF.value = '0';
		clearState();
	};

	const makeCall = async () => {
		if (!agent.value) return;
		const destination = agent.value.extension;
		destination.replace(/[^0-9a-zA-Z+*#]/g, '');
		const cli = await getCliInstance();
		try {
			await cli.call({
				destination,
				params: callParams,
			});
		} catch (err) {
			console.error(err);
		}
	};

	const answerCall = async () => {
		if (call.value) {
			const params = {
				useAudio: true,
			};
			try {
				await call.value.answer(params);
				triggerRef(call);
			} catch (err) {
				console.error(err);
			}
		}
	};

	const toggleMute = async () => {
		if (!call.value) return;
		const muted = call.value.muted;
		await call.value.mute(!muted);
		triggerRef(call);
	};

	const toggleHold = async () => {
		if (!call.value) return;
		if (
			(!call.value.isHold && call.value.allowHold) ||
			(call.value.isHold && call.value.allowUnHold)
		) {
			try {
				await call.value.toggleHold();
				triggerRef(call);
			} catch (err) {
				console.error(err);
			}
		}
	};

	const changeEavesdropState = async (state, isAlreadyInState) => {
		if (!call.value || isAlreadyInState) return;
		try {
			await call.value.changeEavesdropState(state);
		} catch (err) {
			console.error(err);
		}
	};

	const eavesdropMute = () =>
		changeEavesdropState(EavesdropState.Muted, call.value?.eavesdropIsMuted);

	const eavesdropPrompt = () =>
		changeEavesdropState(EavesdropState.Prompt, call.value?.eavesdropIsPrompt);

	const eavesdropConference = () =>
		changeEavesdropState(
			EavesdropState.Conference,
			call.value?.eavesdropIsConference,
		);

	const setCallInfo = async ({ agent: newAgent, client: newClient }) => {
		agent.value = newAgent;
		client.value = newClient;
	};

	const attachToCall = async ({ id }) => {
		try {
			const cli = await getCliInstance();
			isEavesdrop.value = true;
			await cli.eavesdrop({
				id,
				control: true,
				listenA: true,
				listenB: true,
			});
		} catch (err) {
			console.error(err);
		}
	};

	const sendDtmf = async ({ dtmf }) => {
		if (!call.value || eavesdropLastDTMF.value === dtmf) return;
		try {
			if (!call.value.allowDtmf) return;
			await call.value.sendDTMF(dtmf);
			eavesdropLastDTMF.value = dtmf;
		} catch (err) {
			console.error(err);
		}
	};

	return {
		timer,
		call,
		agent,
		client,
		time,
		isOpened,
		isVisible,
		isRecording,
		isHold,
		isMuted,
		isAttachedToCall,

		isEavesdrop,
		isEavesdropOpened,
		eavesdropLastDTMF,
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

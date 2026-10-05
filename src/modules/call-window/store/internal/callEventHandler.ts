import type { EngineAgent } from '@webitel/api-services/gen/models';
import { markRaw, type Ref, type ShallowRef, triggerRef } from 'vue';
import { CallActions } from 'webitel-sdk';

interface CallState {
	isOpened: boolean;
	isVisible: boolean;
	isRecording: boolean;
	isHold: boolean;
	isMuted: boolean;
	isAttachedToCall: boolean;
}

interface Eavesdrop {
	isEavesdrop: boolean;
	isOpened: boolean;
	lastDTMF: string | number;
}

interface CallEventHandlerDeps {
	call: ShallowRef<unknown>;
	agent: Ref<Partial<EngineAgent>>;
	client: Ref<unknown>;
	time: Ref<number>;
	callState: CallState;
	eavesdrop: Eavesdrop;
	audioElement: ShallowRef<HTMLAudioElement | null>;
	startTimer: () => void;
	stopTimer: () => void;
	stopAudioPlayback: () => void;
}

export function createCallEventHandler({
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
}: CallEventHandlerDeps) {
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

	return (action, rawIncomingCall) => {
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
				if (eavesdrop.isEavesdrop) {
					client.value = {
						name:
							incomingCall.variables?.eavesdrop_name ||
							incomingCall.destination,
						number: incomingCall.destination,
					};
					eavesdrop.isOpened = true;
				} else {
					callState.isVisible = true;
				}
				break;
			case CallActions.Active:
				if (eavesdrop.isEavesdrop) {
					client.value = incomingCall.variables?.eavesdrop_name || '';
					eavesdrop.isOpened = true;
					eavesdrop.isEavesdrop = false;
					agent.value = {
						name: incomingCall.displayName,
					};
				} else {
					callState.isOpened = true;
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
				callState.isVisible = false;
				callState.isOpened = false;
				eavesdrop.isOpened = false;
				eavesdrop.lastDTMF = '0';
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
}

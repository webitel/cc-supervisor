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
	callState: CallState;
	eavesdrop: Eavesdrop;
	audioElement: ShallowRef<HTMLAudioElement | null>;
	stopAudioPlayback: () => void;
}

export function createCallEventHandler({
	call,
	agent,
	client,
	callState,
	eavesdrop,
	audioElement,
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
				break;
			case CallActions.Bridge:
				call.value = incomingCall;
				agent.value = {
					name: incomingCall.displayName,
				};
				break;
			case CallActions.Hold:
				triggerRef(call);
				break;
			case CallActions.Hangup:
				call.value = null;
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

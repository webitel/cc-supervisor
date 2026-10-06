import type { EngineAgent } from '@webitel/api-services/gen/models';
import type { Ref, ShallowRef } from 'vue';
import { triggerRef } from 'vue';

import { getCliInstance } from '../../../../app/api/callWSConnection';

const callParams = {
	disableStun: true,
};

type Call = {
	allowHangup?: boolean;
	allowHold?: boolean;
	allowUnHold?: boolean;
	isHold?: boolean;
	muted?: boolean;
	hangup: () => Promise<unknown>;
	answer: (params: { useAudio: boolean }) => Promise<unknown>;
	mute: (muted: boolean) => Promise<unknown>;
	toggleHold: () => Promise<unknown>;
} | null;

interface CallActionsDeps {
	call: ShallowRef<Call>;
	agent: Ref<Partial<EngineAgent>>;
	client: Ref<unknown>;
}

export function createCallActions({ call, agent, client }: CallActionsDeps) {
	const subscribeCalls = async (callHandler) => {
		const cli = await getCliInstance();
		await cli.subscribeCall(callHandler, null);
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

	const setCallInfo = async ({ agent: newAgent, client: newClient }) => {
		agent.value = newAgent;
		client.value = newClient;
	};

	return {
		subscribeCalls,
		leaveCall,
		makeCall,
		answerCall,
		toggleMute,
		toggleHold,
		setCallInfo,
	};
}

import type { ShallowRef } from 'vue';
import { EavesdropState } from 'webitel-sdk';

import { getCliInstance } from '../../../../app/api/callWSConnection';

type EavesdropCall = {
	eavesdropIsMuted?: boolean;
	eavesdropIsPrompt?: boolean;
	eavesdropIsConference?: boolean;
	changeEavesdropState: (state: EavesdropState) => Promise<unknown>;
} | null;

interface Eavesdrop {
	isEavesdrop: boolean;
	isOpened: boolean;
	lastDTMF: string | number;
}

interface EavesdropActionsDeps {
	call: ShallowRef<EavesdropCall>;
	eavesdrop: Eavesdrop;
	leaveCall: () => Promise<void>;
	stopAudioPlayback: () => void;
	clearState: () => void;
}

export function createEavesdropActions({
	call,
	eavesdrop,
	leaveCall,
	stopAudioPlayback,
	clearState,
}: EavesdropActionsDeps) {
	const eavesdropOpenWindow = async () => {
		eavesdrop.isOpened = true;
	};

	const eavesdropCloseWindow = async () => {
		stopAudioPlayback();
		await leaveCall();
		eavesdrop.isOpened = false;
		eavesdrop.lastDTMF = '0';
		clearState();
	};

	const changeEavesdropState = async (
		state: EavesdropState,
		isAlreadyInState?: boolean,
	) => {
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

	const attachToCall = async ({ id }) => {
		try {
			const cli = await getCliInstance();
			eavesdrop.isEavesdrop = true;
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

	return {
		eavesdropOpenWindow,
		eavesdropCloseWindow,
		eavesdropMute,
		eavesdropPrompt,
		eavesdropConference,
		attachToCall,
	};
}

import type { ShallowRef } from 'vue';
import { EavesdropState } from 'webitel-sdk';

import { getCliInstance } from '../../../../app/api/callWSConnection';

type EavesdropCall = {
	eavesdropIsMuted?: boolean;
	eavesdropIsPrompt?: boolean;
	eavesdropIsConference?: boolean;
	allowDtmf?: boolean;
	changeEavesdropState: (state: EavesdropState) => Promise<unknown>;
	sendDTMF: (dtmf: string) => Promise<unknown>;
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
	stopTimer: () => void;
	stopAudioPlayback: () => void;
	clearState: () => void;
}

export function createEavesdropActions({
	call,
	eavesdrop,
	leaveCall,
	stopTimer,
	stopAudioPlayback,
	clearState,
}: EavesdropActionsDeps) {
	const eavesdropOpenWindow = async () => {
		eavesdrop.isOpened = true;
	};

	const eavesdropCloseWindow = async () => {
		stopAudioPlayback();
		await leaveCall();
		stopTimer();
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

	const sendDtmf = async ({ dtmf }) => {
		if (!call.value || eavesdrop.lastDTMF === dtmf) return;
		try {
			if (!call.value.allowDtmf) return;
			await call.value.sendDTMF(dtmf);
			eavesdrop.lastDTMF = dtmf;
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
		sendDtmf,
	};
}

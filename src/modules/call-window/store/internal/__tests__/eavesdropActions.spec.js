import { reactive, shallowRef } from 'vue';
import { EavesdropState } from 'webitel-sdk';

import { createEavesdropActions } from '../eavesdropActions';

vi.mock('../../../../../app/api/callWSConnection', () => ({
	getCliInstance: vi.fn(() =>
		Promise.resolve({
			eavesdrop: vi.fn().mockResolvedValue(undefined),
		}),
	),
}));

describe('createEavesdropActions', () => {
	let deps;
	let actions;

	beforeEach(() => {
		deps = {
			call: shallowRef(null),
			eavesdrop: reactive({
				isEavesdrop: false,
				isOpened: false,
				lastDTMF: 0,
			}),
			leaveCall: vi.fn().mockResolvedValue(undefined),
			stopTimer: vi.fn(),
			stopAudioPlayback: vi.fn(),
			clearState: vi.fn(),
		};
		actions = createEavesdropActions(deps);
	});

	it('opens the eavesdrop window', async () => {
		await actions.eavesdropOpenWindow();

		expect(deps.eavesdrop.isOpened).toBe(true);
	});

	it('closes the eavesdrop window and tears down call state', async () => {
		deps.eavesdrop.isOpened = true;

		await actions.eavesdropCloseWindow();

		expect(deps.stopAudioPlayback).toHaveBeenCalled();
		expect(deps.leaveCall).toHaveBeenCalled();
		expect(deps.stopTimer).toHaveBeenCalled();
		expect(deps.eavesdrop.isOpened).toBe(false);
		expect(deps.clearState).toHaveBeenCalled();
	});

	it('requests mute when not already muted', async () => {
		const changeEavesdropState = vi.fn().mockResolvedValue(undefined);
		deps.call.value = {
			eavesdropIsMuted: false,
			changeEavesdropState,
		};

		await actions.eavesdropMute();

		expect(changeEavesdropState).toHaveBeenCalledWith(EavesdropState.Muted);
	});

	it('does not re-request a state the call is already in', async () => {
		const changeEavesdropState = vi.fn().mockResolvedValue(undefined);
		deps.call.value = {
			eavesdropIsPrompt: true,
			changeEavesdropState,
		};

		await actions.eavesdropPrompt();

		expect(changeEavesdropState).not.toHaveBeenCalled();
	});

	it('attaches to a call and marks eavesdrop active', async () => {
		await actions.attachToCall({
			id: '42',
		});

		expect(deps.eavesdrop.isEavesdrop).toBe(true);
	});

	it('sends dtmf once and remembers the last digit', async () => {
		const sendDTMF = vi.fn().mockResolvedValue(undefined);
		deps.call.value = {
			allowDtmf: true,
			sendDTMF,
		};

		await actions.sendDtmf({
			dtmf: '5',
		});

		expect(sendDTMF).toHaveBeenCalledWith('5');
		expect(deps.eavesdrop.lastDTMF).toBe('5');
	});

	it('ignores a repeated dtmf digit', async () => {
		const sendDTMF = vi.fn().mockResolvedValue(undefined);
		deps.eavesdrop.lastDTMF = '5';
		deps.call.value = {
			allowDtmf: true,
			sendDTMF,
		};

		await actions.sendDtmf({
			dtmf: '5',
		});

		expect(sendDTMF).not.toHaveBeenCalled();
	});
});

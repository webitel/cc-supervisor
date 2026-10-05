import { reactive, ref, shallowRef } from 'vue';

import { createCallActions } from '../callActions';

const subscribeCall = vi.fn().mockResolvedValue(undefined);
const makeCliCall = vi.fn().mockResolvedValue(undefined);

vi.mock('../../../../../app/api/callWSConnection', () => ({
	getCliInstance: vi.fn(() =>
		Promise.resolve({
			subscribeCall,
			call: makeCliCall,
		}),
	),
}));

describe('createCallActions', () => {
	let deps;
	let actions;

	beforeEach(() => {
		subscribeCall.mockClear();
		makeCliCall.mockClear();

		deps = {
			call: shallowRef(null),
			agent: ref({}),
			client: ref({}),
			callState: reactive({
				isOpened: false,
				isVisible: false,
				isRecording: false,
				isHold: false,
				isMuted: false,
				isAttachedToCall: false,
			}),
			stopTimer: vi.fn(),
			stopAudioPlayback: vi.fn(),
			clearState: vi.fn(),
		};
		actions = createCallActions(deps);
	});

	it('opens the call window', async () => {
		await actions.openWindow();

		expect(deps.callState.isVisible).toBe(true);
	});

	it('subscribes to call events with the given handler', async () => {
		const handler = vi.fn();

		await actions.subscribeCalls(handler);

		expect(subscribeCall).toHaveBeenCalledWith(handler, null);
	});

	it('hangs up only when the call allows it', async () => {
		const hangup = vi.fn().mockResolvedValue(undefined);
		deps.call.value = {
			allowHangup: false,
			hangup,
		};

		await actions.leaveCall();

		expect(hangup).not.toHaveBeenCalled();
	});

	it('hangs up when allowed', async () => {
		const hangup = vi.fn().mockResolvedValue(undefined);
		deps.call.value = {
			allowHangup: true,
			hangup,
		};

		await actions.leaveCall();

		expect(hangup).toHaveBeenCalled();
	});

	it('tears down call state on close', async () => {
		await actions.closeWindow();

		expect(deps.stopAudioPlayback).toHaveBeenCalled();
		expect(deps.stopTimer).toHaveBeenCalled();
		expect(deps.callState.isOpened).toBe(false);
		expect(deps.callState.isVisible).toBe(false);
		expect(deps.clearState).toHaveBeenCalled();
	});

	it('places a call to the current agent extension', async () => {
		deps.agent.value = {
			extension: '100',
		};

		await actions.makeCall();

		expect(makeCliCall).toHaveBeenCalledWith(
			expect.objectContaining({
				destination: '100',
			}),
		);
	});

	it('does nothing when there is no agent to call', async () => {
		deps.agent.value = null;

		await actions.makeCall();

		expect(makeCliCall).not.toHaveBeenCalled();
	});

	it('answers the call and forces a reactivity refresh', async () => {
		const answer = vi.fn().mockResolvedValue(undefined);
		deps.call.value = {
			answer,
		};

		await actions.answerCall();

		expect(answer).toHaveBeenCalledWith({
			useAudio: true,
		});
	});

	it('toggles mute to the opposite of the current state', async () => {
		const mute = vi.fn().mockResolvedValue(undefined);
		deps.call.value = {
			muted: false,
			mute,
		};

		await actions.toggleMute();

		expect(mute).toHaveBeenCalledWith(true);
	});

	it('holds when allowed and not already on hold', async () => {
		const toggleHold = vi.fn().mockResolvedValue(undefined);
		deps.call.value = {
			isHold: false,
			allowHold: true,
			toggleHold,
		};

		await actions.toggleHold();

		expect(toggleHold).toHaveBeenCalled();
	});

	it('does not toggle hold when not allowed', async () => {
		const toggleHold = vi.fn().mockResolvedValue(undefined);
		deps.call.value = {
			isHold: false,
			allowHold: false,
			toggleHold,
		};

		await actions.toggleHold();

		expect(toggleHold).not.toHaveBeenCalled();
	});

	it('updates agent and client info', async () => {
		const agent = {
			name: 'Vi',
		};
		const client = {
			number: '100',
		};

		await actions.setCallInfo({
			agent,
			client,
		});

		expect(deps.agent.value).toEqual(agent);
		expect(deps.client.value).toEqual(client);
	});
});

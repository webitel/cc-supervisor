import { reactive, ref, shallowRef } from 'vue';
import { CallActions } from 'webitel-sdk';

import { createCallEventHandler } from '../callEventHandler';

describe('createCallEventHandler', () => {
	let deps;
	let handler;

	beforeEach(() => {
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
			eavesdrop: reactive({
				isEavesdrop: false,
				isOpened: false,
				lastDTMF: 0,
			}),
			audioElement: shallowRef(null),
			stopAudioPlayback: vi.fn(),
		};
		handler = createCallEventHandler(deps);
	});

	it('shows the call window on ringing', () => {
		handler(CallActions.Ringing, {
			displayName: 'Vi',
		});

		expect(deps.call.value).not.toBeNull();
		expect(deps.agent.value).toEqual({
			name: 'Vi',
		});
		expect(deps.callState.isVisible).toBe(true);
	});

	it('ignores a second ringing event for the same call', () => {
		handler(CallActions.Ringing, {
			displayName: 'Vi',
		});
		const first = deps.call.value;

		handler(CallActions.Ringing, {
			displayName: 'Someone else',
		});

		expect(deps.call.value).toBe(first);
	});

	it('opens the eavesdrop window instead of the call window while eavesdropping', () => {
		deps.eavesdrop.isEavesdrop = true;

		handler(CallActions.Ringing, {
			displayName: 'Vi',
			destination: '100',
		});

		expect(deps.eavesdrop.isOpened).toBe(true);
		expect(deps.callState.isVisible).toBe(false);
		expect(deps.client.value).toEqual({
			name: '100',
			number: '100',
		});
	});

	it('opens the call on active', () => {
		handler(CallActions.Active, {
			displayName: 'Vi',
		});

		expect(deps.callState.isOpened).toBe(true);
	});

	it('clears call state on hangup', () => {
		handler(CallActions.Ringing, {
			displayName: 'Vi',
		});

		handler(CallActions.Hangup, {});

		expect(deps.call.value).toBeNull();
		expect(deps.callState.isVisible).toBe(false);
		expect(deps.callState.isOpened).toBe(false);
	});

	it('does nothing for an unknown action', () => {
		expect(() => handler('unknown-action', {})).not.toThrow();
	});
});

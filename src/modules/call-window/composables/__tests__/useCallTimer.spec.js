import { createTestingPinia } from '@pinia/testing';
import { setActivePinia } from 'pinia';
import { ref } from 'vue';

import { useCallTimer } from '../useCallTimer';

describe('useCallTimer', () => {
	beforeEach(() => {
		setActivePinia(
			createTestingPinia({
				createSpy: vi.fn,
				initialState: {
					now: {
						now: 1000 * 60 * 2, // 2 minutes in
					},
				},
				stubActions: false,
			}),
		);
	});

	it('counts from answeredAt when present', () => {
		const call = ref({
			answeredAt: 1000 * 15, // 15s before "now"
			createdAt: 1000 * 90, // ignored: answeredAt takes priority
		});

		const { startTime } = useCallTimer(call);

		expect(startTime.value).toBe('00:01:45');
	});

	it('falls back to createdAt when not yet answered', () => {
		const call = ref({
			createdAt: 1000 * 30, // 30s before "now"
		});

		const { startTime } = useCallTimer(call);

		expect(startTime.value).toBe('00:01:30');
	});

	it('clamps a negative duration to zero (answer landing after "now" ticked)', () => {
		const call = ref({
			answeredAt: 1000 * 60 * 5,
		});

		const { startTime } = useCallTimer(call);

		expect(startTime.value).toBe('00:00:00');
	});

	it('treats a missing call as zero elapsed', () => {
		const call = ref(null);

		const { startTime } = useCallTimer(call);

		expect(startTime.value).toBe('00:00:00');
	});
});

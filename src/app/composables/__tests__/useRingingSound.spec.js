import { ref } from 'vue';

import { useRingingSound } from '../useRingingSound';

describe('useRingingSound', () => {
	it('is ringing for an inbound call in the ringing state', () => {
		const call = ref({
			direction: 'inbound',
			state: 'ringing',
		});

		const { isRinging } = useRingingSound(call);

		expect(isRinging.value).toBe(true);
	});

	it('is not ringing once the call is answered', () => {
		const call = ref({
			direction: 'inbound',
			state: 'ringing',
		});

		const { isRinging } = useRingingSound(call);

		call.value = {
			direction: 'inbound',
			state: 'active',
		};

		expect(isRinging.value).toBe(false);
	});

	it('is not ringing for an outbound call', () => {
		const call = ref({
			direction: 'outbound',
			state: 'ringing',
		});

		const { isRinging } = useRingingSound(call);

		expect(isRinging.value).toBe(false);
	});

	it('is not ringing when there is no call', () => {
		const call = ref(null);

		const { isRinging } = useRingingSound(call);

		expect(isRinging.value).toBe(false);
	});
});

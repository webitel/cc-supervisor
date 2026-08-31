import { ActiveCallsAPI as SharedActiveCallsAPI } from '@webitel/api-services/api';
import { FormatDateMode } from '@webitel/ui-sdk/enums';
import convertDuration from '@webitel/ui-sdk/src/scripts/convertDuration';
import { formatDate } from '@webitel/ui-sdk/utils';

import ActiveCallsAPI from '../active-calls';

vi.mock('@webitel/api-services/api');

const time = 123;

// This module owns the display formatting: createdAt as a full DATETIME and
// duration through the ui-sdk convertDuration helper.
const expectResponse = {
	items: [
		{
			createdAt: formatDate(+time, FormatDateMode.DATETIME),
			duration: convertDuration(0),
		},
	],
	next: false,
};

describe('Active Calls API', () => {
	it('getList: formats the shared client response', async () => {
		SharedActiveCallsAPI.getList = vi.fn(() =>
			Promise.resolve({
				items: [
					{
						createdAt: time,
					},
				],
				next: false,
			}),
		);
		const response = await ActiveCallsAPI.getList({});
		expect(SharedActiveCallsAPI.getList).toHaveBeenCalled();
		expect(response).toEqual(expectResponse);
	});
});

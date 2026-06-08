import { FormatDateMode } from '@webitel/ui-sdk/enums';
import convertDuration from '@webitel/ui-sdk/src/scripts/convertDuration';
import { formatDate } from '@webitel/ui-sdk/utils';

import instance from '../../../../../../../../app/api/instance';
import AgentStatusHistoryAPI from '../agent-status-history';

const time = 123;
const items = [
	{
		state: 'vi',
		joinedAt: time,
	},
];

// Expected output mirrors the source `listHandler`: `from` is the joinedAt date
// formatted as DATETIME (was time-only), `to` is null with no duration, and
// duration is run through the ui-sdk convertDuration helper.
const expectItems = [
	{
		state: 'vi',
		joinedAt: time,
		from: formatDate(+time, FormatDateMode.DATETIME),
		to: null,
		duration: convertDuration(undefined),
	},
];

/* The AgentServiceApiFactory is built with the local axios instance, so the
   request is intercepted by spying on `instance.request`. */
vi.spyOn(instance, 'request');

describe('Agent Status History API', () => {
	it('getList: correctly processes response', async () => {
		const getMock = instance.request.mockImplementationOnce(() =>
			Promise.resolve({
				data: {
					items,
				},
			}),
		);
		const response = await AgentStatusHistoryAPI.getList({});
		expect(getMock).toHaveBeenCalled();
		expect(response).toEqual({
			next: false,
			items: expectItems,
		});
	});
});

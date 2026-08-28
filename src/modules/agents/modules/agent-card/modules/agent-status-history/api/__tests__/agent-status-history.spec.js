import { AgentsAPI } from '@webitel/api-services/api';
import { FormatDateMode } from '@webitel/ui-sdk/enums';
import convertDuration from '@webitel/ui-sdk/src/scripts/convertDuration';
import { formatDate } from '@webitel/ui-sdk/utils';

import AgentStatusHistoryAPI from '../agent-status-history';

vi.mock('@webitel/api-services/api');

const time = 123;
const items = [
	{
		state: 'vi',
		joinedAt: time,
	},
];

// This module owns the display formatting: `from` is joinedAt as DATETIME,
// `to` is null with no duration, and duration goes through convertDuration.
const expectItems = [
	{
		state: 'vi',
		joinedAt: time,
		from: formatDate(+time, FormatDateMode.DATETIME),
		to: null,
		duration: convertDuration(undefined),
	},
];

describe('Agent Status History API', () => {
	it('getList: correctly processes response', async () => {
		AgentsAPI.getAgentHistory = vi.fn(() =>
			Promise.resolve({
				items,
				next: false,
			}),
		);
		const response = await AgentStatusHistoryAPI.getList({});
		expect(AgentsAPI.getAgentHistory).toHaveBeenCalled();
		expect(response).toEqual({
			next: false,
			items: expectItems,
		});
	});
});

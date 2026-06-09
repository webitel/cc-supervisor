import { FormatDateMode } from '@webitel/ui-sdk/enums';
import convertDuration from '@webitel/ui-sdk/src/scripts/convertDuration';
import { formatDate } from '@webitel/ui-sdk/utils';

import AgentCallsAPI from '../agent-calls';

const time = 123;

// The API now goes through `@webitel/api-services` `getCallService()` rather than
// the local axios instance, so we mock that service. `vi.hoisted` is required
// because `vi.mock` is hoisted above imports.
const { searchMock, items } = vi.hoisted(() => {
	const items = [
		{
			createdAt: 123,
			joinedAt: 123,
			duration: 60,
		},
	];
	return {
		items,
		searchMock: vi.fn(() =>
			Promise.resolve({
				data: {
					items,
				},
			}),
		),
	};
});

vi.mock('@webitel/api-services/gen', () => ({
	getCallService: () => ({
		searchHistoryCallPost: searchMock,
	}),
}));

// Expected output mirrors the source `listHandler`: createdAt -> DATETIME,
// joinedAt -> TIME, durations via convertDuration, every other field null,
// files grouped into an (empty) object.
const expectItems = [
	{
		createdAt: formatDate(+time, FormatDateMode.DATETIME),
		joinedAt: formatDate(+time, FormatDateMode.TIME),
		duration: convertDuration(60),
		answeredAt: null,
		bridgedAt: null,
		queueBridgedAt: null,
		leavingAt: null,
		hangupAt: null,
		reportingAt: null,
		holdSec: null,
		waitSec: null,
		billSec: null,
		talkSec: null,
		reportingSec: null,
		queueWaitSec: null,
		queueDurationSec: null,
		scoreRequired: null,
		files: {},
	},
];

describe('Agent calls API', () => {
	it('getList: correctly processes response', async () => {
		const response = await AgentCallsAPI.getList({});
		expect(searchMock).toHaveBeenCalled();
		expect(response).toEqual({
			next: false,
			items: expectItems,
		});
	});
});

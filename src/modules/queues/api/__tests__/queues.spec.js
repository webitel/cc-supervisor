import { QueuesAPI as SharedQueuesAPI } from '@webitel/api-services/api';

import QueuesAPI from '../queues';

vi.mock('@webitel/api-services/api');

const items = [
	{
		processed: 1,
		count: 1,
		sumBillSec: 60,
		avgWrapSec: 60,
		avgAsaSec: 60,
		avgAwtSec: 60,
	},
];

const expectResponse = {
	aggs: {
		online: 0,
		offline: 0,
		free: 0,
		pause: 0,
		total: 0,
	},
	items: [
		{
			_isSelected: false,
			abandoned: 0,
			agentStatus: {
				free: 0,
				offline: 0,
				online: 0,
				pause: 0,
				total: 0,
			},
			avgAhtSec: 0,
			avgAsaSec: 60,
			avgAwtSec: 60,
			avgWrapSec: 60,
			bridged: 0,
			count: 1,
			members: {
				processing: 1,
				waiting: 0,
			},
			processed: 1,
			sumBillSec: 60,
			transferred: 0,
			sl20: 0,
			sl30: 0,
		},
	],
	next: false,
};

describe('Queues API', () => {
	it('getList: formats the shared client response', async () => {
		SharedQueuesAPI.getReportGeneral = vi.fn(() =>
			Promise.resolve({
				items,
				next: false,
			}),
		);
		const response = await QueuesAPI.getList({});
		expect(SharedQueuesAPI.getReportGeneral).toHaveBeenCalled();
		expect(response).toEqual(expectResponse);
	});
});

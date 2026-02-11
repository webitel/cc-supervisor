import instance from '../../../../app/api/instance';
import QueuesAPI from '../queues';

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

/* mock SDK method api response with instance mock
vi.spyOn(instance) used instead of vi.mock('@/app/api/instance) because WebStorm
doesn't watch path changes in vi.mock()
*/
const getMock = vi.fn(() => ({
	items,
}));
vi.spyOn(instance, 'request').mockImplementation(getMock);

describe('Queues API', () => {
	it('getList: correctly processes response', async () => {
		const listMock = instance.request.mockImplementationOnce(() =>
			Promise.resolve({
				data: {
					items,
				},
			}),
		);
		const response = await QueuesAPI.getList({});
		expect(listMock).toHaveBeenCalled();
		expect(response).toEqual(expectResponse);
	});
});

import instance from '../../../../app/api/instance';
import AgentsAPI from '../agents';

const items = [
	{},
];
const expectResponse = {
	items: [
		{
			_isSelected: false,
			missed: 0,
			transferred: 0,
			statusDuration: '00:00:00',
			utilization: '0.00%',
			online: '00:00:00',
			offline: '00:00:00',
			pause: '00:00:00',
			callTime: '00:00:00',
			chatTime: '00:00:00',
			occupancy: '0.00%',
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

describe('Agents API', () => {
	it('getList: correctly processes response', async () => {
		const listMock = instance.request.mockImplementationOnce(() =>
			Promise.resolve({
				data: {
					items,
				},
			}),
		);
		const response = await AgentsAPI.getList({});
		expect(listMock).toHaveBeenCalled();
		expect(response).toEqual(expectResponse);
	});
});

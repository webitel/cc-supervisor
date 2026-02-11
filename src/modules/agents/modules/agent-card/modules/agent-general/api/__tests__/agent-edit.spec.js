import instance from '../../../../../../../../app/api/instance';
import AgentAPI from '../agent-edit';

/* mock SDK method api response with instance mock
 vi.spyOn(instance) used instead of vi.mock('@/app/api/instance) because WebStorm
  doesn't watch path changes in vi.mock()
 */
vi.spyOn(instance, 'request');
describe('Agent Edit API', () => {
	it('get: correctly processes response', async () => {
		const item = {
			name: 'vi',
		};
		const expectedResponse = {
			_dirty: false,
			chatCount: 0,
			name: 'vi',
			progressiveCount: 0,
		};
		const getMock = instance.request.mockImplementationOnce(() =>
			Promise.resolve({
				data: item,
			}),
		);
		const response = await AgentAPI.get({
			itemId: 1,
		});
		expect(getMock).toHaveBeenCalled();
		expect(response).toEqual(expectedResponse);
	});
	it('patch: correctly sends changes', async () => {
		const payload = {
			id: 1,
			changes: {
				_dirty: true,
				team: {
					name: 'vi',
				},
			},
		};
		const expectedData = {
			changes: {
				_dirty: true,
				team: {
					name: 'vi',
				},
			},
			id: 1,
		};
		const patchMock = instance.request.mockImplementationOnce(() =>
			Promise.resolve({
				data: payload,
			}),
		);
		const response = await AgentAPI.patch(payload);
		expect(patchMock).toHaveBeenCalled();
		expect(response).toEqual(expectedData);
	});
});

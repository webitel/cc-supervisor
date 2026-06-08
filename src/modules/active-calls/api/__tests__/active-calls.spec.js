import { FormatDateMode } from '@webitel/ui-sdk/enums';
import convertDuration from '@webitel/ui-sdk/src/scripts/convertDuration';
import { formatDate } from '@webitel/ui-sdk/utils';

import instance from '../../../../app/api/instance';
import ActiveCallsAPI from '../active-calls';

const time = 123;
const items = [
	{
		createdAt: time,
	},
];
// Expected output mirrors the source transform: createdAt is now formatted as a
// full DATETIME (was time-only), duration via the ui-sdk convertDuration helper.
const expectResponse = {
	items: [
		{
			createdAt: formatDate(+time, FormatDateMode.DATETIME),
			duration: convertDuration(0),
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

describe('Active Calls API', () => {
	it('getList: correctly processes response', async () => {
		const listMock = instance.request.mockImplementationOnce(() =>
			Promise.resolve({
				data: {
					items,
				},
			}),
		);
		const response = await ActiveCallsAPI.getList({});
		expect(listMock).toHaveBeenCalled();
		expect(response).toEqual(expectResponse);
	});
});

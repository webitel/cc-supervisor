import instance from '../../../../../../../../app/api/instance';
import AgentStatusHistoryAPI from '../agent-status-history';

const time = 123;
const items = [{ state: 'vi', joinedAt: time }];
const expectItems = [{
  joinedAt: time,
  duration: '00:00:00',
  from: new Date(time).toLocaleString(),
  to: null,
  state: 'vi',
}];

/* mock SDK method api response with instance mock
 vi.spyOn(instance) used instead of vi.mock('@/app/api/instance) because WebStorm
  doesn't watch path changes in vi.mock()
 */
vi.fn(() => ({ items }));
vi.spyOn(instance, 'request');

describe('Agent Status History API', () => {
  it('getList: correctly processes response', async () => {
    const getMock = instance.request.mockImplementationOnce(() => Promise.resolve({
      data: {
        items,
      },
    }));
    const response = await AgentStatusHistoryAPI.getList({});
    expect(getMock).toHaveBeenCalled();
    expect(response).toEqual({ next: false, items: expectItems });
  });
});

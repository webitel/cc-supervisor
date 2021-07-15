import instance from '../../../../../../../../app/api/instance';
import AgentStatusHistoryAPI from '../agent-status-history';

const time = 123;
const items = [{ state: 'jest', joinedAt: time }];
const expectItems = [{
  joinedAt: time,
  duration: '00:00:00',
  from: new Date(time).toLocaleString(),
  to: null,
  state: 'jest',
}];

/* mock SDK method api response with instance mock
 jest.spyOn(instance) used instead of jest.mock('@/app/api/instance) because WebStorm
  doesn't watch path changes in jest.mock()
 */
const getMock = jest.fn(() => ({ items }));
jest.spyOn(instance, 'request')
  .mockImplementation(getMock);

describe('Agent Status History API', () => {
  it('getList: correctly processes response', async () => {
    const response = await AgentStatusHistoryAPI.getList({});
    expect(getMock)
      .toHaveBeenCalled();
    expect(response)
      .toEqual({ next: false, items: expectItems });
  });
});

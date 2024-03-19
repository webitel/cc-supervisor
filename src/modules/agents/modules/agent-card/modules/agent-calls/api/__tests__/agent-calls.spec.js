import instance from '../../../../../../../../app/api/instance';
import AgentCallsAPI from '../agent-calls';

const time = 123;
const items = [{ createdAt: time, joinedAt: time, duration: 60 }];
const expectItems = [{
  createdAt: new Date(time).toLocaleString(),
  answeredAt: null,
  billSec: null,
  bridgedAt: null,
  joinedAt: new Date(time).toLocaleTimeString(),
  hangupAt: null,
  leavingAt: null,
  reportingAt: null,
  queueBridgedAt: null,
  duration: '00:01:00',
  queueDurationSec: null,
  queueWaitSec: null,
  holdSec: null,
  waitSec: null,
  reportingSec: null,
  scoreRequired: null,
}];

/* mock SDK method api response with instance mock
 vi.spyOn(instance) used instead of vi.mock('@/app/api/instance) because WebStorm
  doesn't watch path changes in vi.mock()
 */
const getMock = vi.fn(() => ({ items }));
vi.spyOn(instance, 'request')
  .mockImplementation(getMock);

describe('Agent calls API', () => {
  it('getList: correctly processes response', async () => {
    const listMock = instance.request.mockImplementationOnce(() => Promise.resolve({
      data: {
        items,
      },
    }));
    const response = await AgentCallsAPI.getList({});
    expect(listMock)
    .toHaveBeenCalled();
    expect(response)
    .toEqual({ next: false, items: expectItems });
  });
});

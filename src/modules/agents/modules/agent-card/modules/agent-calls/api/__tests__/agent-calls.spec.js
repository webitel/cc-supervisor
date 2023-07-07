import instance from '../../../../../../../../app/api/old/instance';
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
 jest.spyOn(instance) used instead of jest.mock('@/app/api/instance) because WebStorm
  doesn't watch path changes in jest.mock()
 */
const getMock = jest.fn(() => ({ items }));
jest.spyOn(instance, 'request')
  .mockImplementation(getMock);

describe('Agent calls API', () => {
  it('getList: correctly processes response', async () => {
    const response = await AgentCallsAPI.getList({});
    expect(getMock)
      .toHaveBeenCalled();
    expect(response)
      .toEqual({ next: false, items: expectItems });
  });
});

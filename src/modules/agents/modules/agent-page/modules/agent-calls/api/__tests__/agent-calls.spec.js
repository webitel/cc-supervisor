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
}];
const getMock = jest.fn(() => ({ items }));
jest.spyOn(instance, 'request')
  .mockImplementation(getMock);

describe('Agent calls API', () => {
  beforeEach(() => {
  });

  it('renders a component', async () => {
    const response = await AgentCallsAPI.getList({});
    expect(getMock)
      .toHaveBeenCalled();
    expect(response)
      .toEqual({ next: false, items: expectItems });
  });
});

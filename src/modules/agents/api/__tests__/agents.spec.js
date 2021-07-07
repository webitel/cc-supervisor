import instance from '../../../../app/api/instance';
import AgentsAPI from '../agents';

const items = [{
}];
const expectResponse = {
  items: [{
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
  }],
  next: false,
};


/* mock SDK method api response with instance mock
jest.spyOn(instance) used instead of jest.mock('@/app/api/instance) because WebStorm
doesn't watch path changes in jest.mock()
*/
const getMock = jest.fn(() => ({ items }));
jest.spyOn(instance, 'request')
.mockImplementation(getMock);

describe('Agents API', () => {
  it('getList: correctly processes response', async () => {
    const response = await AgentsAPI.getList({});
    expect(getMock)
    .toHaveBeenCalled();
    expect(response)
    .toEqual(expectResponse);
  });
});

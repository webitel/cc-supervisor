import instance from '../../../../../../app/api/old/instance';
import AgentAPI from '../agent-card';

/* mock SDK method api response with instance mock
 jest.spyOn(instance) used instead of jest.mock('@/app/api/instance) because WebStorm
  doesn't watch path changes in jest.mock()
 */

describe('Agent Page API', () => {
  it('get: correctly processes response', async () => {
    const response = { name: 'jest' };
    const getMock = jest.fn(() => response);
    jest.spyOn(instance, 'request')
    .mockImplementation(getMock);
    const expectedResponse = {
      name: 'jest',
      offline: '00:00:00',
      online: '00:00:00',
      pause: '00:00:00',
      statusDuration: '00:00:00',
    };
    const getResponse = await AgentAPI.get({ itemId: 1 });
    expect(getMock).toHaveBeenCalled();
    expect(getResponse).toEqual(expectedResponse);
  });
});

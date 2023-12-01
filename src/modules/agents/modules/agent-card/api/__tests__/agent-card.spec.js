import instance from '../../../../../../app/api/instance';
import AgentAPI from '../agent-card';

/* mock SDK method api response with instance mock
 jest.spyOn(instance) used instead of jest.mock('@/app/api/instance) because WebStorm
  doesn't watch path changes in jest.mock()
 */

jest.spyOn(instance, 'request');

const item = { name: 'jest' };
const expectedResponse = {
  name: 'jest',
  offline: '00:00:00',
  online: '00:00:00',
  pause: '00:00:00',
  statusDuration: '00:00:00',
};

describe('Agent Page API', () => {
  it('get: correctly processes response', async () => {
    const getMock = instance.request.mockImplementationOnce((() => Promise.resolve({
      data: item,
    })));
    const response = await AgentAPI.get({ itemId: 1 });
    expect(getMock).toHaveBeenCalled();
    expect(response).toEqual(expectedResponse);
  });
});

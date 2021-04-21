import instance from '../../../../../../app/api/instance';
import AgentAPI from '../agent-page';

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
      _dirty: false,
      chatCount: 0,
      name: 'jest',
      offline: '00:00:00',
      online: '00:00:00',
      pause: '00:00:00',
      progressiveCount: 0,
      statusDuration: '00:00:00',
    };
    const getResponse = await AgentAPI.get({ itemId: 1 });
    expect(getMock).toHaveBeenCalled();
    expect(getResponse).toEqual(expectedResponse);
  });
  it('patch: correctly sends changes', async () => {
    const patchMock = jest.fn();
    jest.spyOn(instance, 'request')
    .mockImplementation(patchMock);
    const payload = { id: 1, changes: { _dirty: true, team: { name: 'jest' } } };
    const expectedData = { team: { name: 'jest' } };
    await AgentAPI.patch(payload);
    expect(patchMock).toHaveBeenCalled();
    const reqData = JSON.parse(patchMock.mock.calls[0][0].data);
    expect(reqData).toEqual(expectedData);
  });
});

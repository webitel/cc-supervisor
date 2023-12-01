import instance from '../../../../../../../../app/api/instance';
import AgentAPI from '../agent-edit';

/* mock SDK method api response with instance mock
 jest.spyOn(instance) used instead of jest.mock('@/app/api/instance) because WebStorm
  doesn't watch path changes in jest.mock()
 */
jest.spyOn(instance, 'request');
describe('Agent Edit API', () => {
  it('get: correctly processes response', async () => {
    const item = { name: 'jest' };
    const expectedResponse = {
      _dirty: false,
      chatCount: 0,
      name: 'jest',
      progressiveCount: 0,
    };
    const getMock = instance.request.mockImplementationOnce((() => Promise.resolve({
      data: item,
    })));
    const response = await AgentAPI.get({ itemId: 1 });
    expect(getMock).toHaveBeenCalled();
    expect(response).toEqual(expectedResponse);
  });
  it('patch: correctly sends changes', async () => {
    const payload = { id: 1, changes: { _dirty: true, team: { name: 'jest' } } };
    const expectedData = { team: { name: 'jest' } };
    const patchMock = instance.request.mockImplementationOnce((() => Promise.resolve({
      data: payload,
    })));
    const resp = await AgentAPI.patch(payload);
    expect(patchMock).toHaveBeenCalled();
    // const reqData = JSON.parse(patchMock.mock.calls[0][0].data);
    expect(resp).toEqual(expectedData);
  });
});

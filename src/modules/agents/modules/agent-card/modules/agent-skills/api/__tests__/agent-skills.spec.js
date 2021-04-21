import instance from '../../../../../../../../app/api/instance';
import AgentSkillsAPI from '../agent-skills';

/* mock SDK method api response with instance mock
jest.spyOn(instance) used instead of jest.mock('@/app/api/instance) because WebStorm
doesn't watch path changes in jest.mock()
*/
jest.spyOn(instance, 'request');

const parentId = '1';
const id = '2';

const items = [{
  skill: { name: 'skill' },
  id: 2,
}];
const expectResponse = {
  items: [{
    skill: { name: 'skill' },
    id: 2,
    enabled: false,
    capacity: 0,
  }],
  next: false,
};

const itemInstance = { skill: { name: 'jest' }, agentId: parentId };

describe('Agent Skills API', () => {
  it('getList: correctly processes response', async () => {
    const getMock = jest.fn(() => ({ items }));
    instance.request.mockImplementationOnce(getMock);
    const response = await AgentSkillsAPI.getList({ parentId });
    expect(getMock).toHaveBeenCalled();
    expect(response).toEqual(expectResponse);
  });
  it('get: correctly processes response', async () => {
    const getMock = jest.fn(() => items[0]);
    instance.request.mockImplementationOnce(getMock);
    const response = await AgentSkillsAPI.get({ parentId, itemId: id });
    expect(getMock).toHaveBeenCalled();
    expect(response).toEqual(expectResponse.items[0]);
  });
  it('add: correctly passes item to axios', async () => {
    const addMock = jest.fn();
    instance.request.mockImplementationOnce(addMock);
    await AgentSkillsAPI.add({ parentId, itemInstance });
    expect(addMock.mock.calls[0][0].data).toBe(JSON.stringify(itemInstance));
  });
  it('update: correctly passes item to axios', async () => {
    const updateMock = jest.fn();
    instance.request.mockImplementationOnce(updateMock);
    await AgentSkillsAPI.update({ parentId, itemId: id, itemInstance });
    expect(updateMock.mock.calls[0][0].data).toBe(JSON.stringify(itemInstance));
  });
  it('patch: correctly passes item to axios', async () => {
    const patchMock = jest.fn();
    instance.request.mockImplementationOnce(patchMock);
    await AgentSkillsAPI.patch({ parentId, id, changes: itemInstance });
    expect(patchMock.mock.calls[0][0].data).toBe(JSON.stringify(itemInstance));
  });
  it('delete: correctly calls axios delete', async () => {
    const deleteMock = jest.fn();
    instance.request.mockImplementationOnce(deleteMock);
    await AgentSkillsAPI.delete({ parentId, id });
    expect(deleteMock).toHaveBeenCalled();
  });
});

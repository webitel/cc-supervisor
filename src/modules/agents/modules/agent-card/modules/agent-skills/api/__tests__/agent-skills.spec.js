import instance from '../../../../../../../../app/api/instance';
import AgentSkillsAPI from '../agent-skills';

/* mock SDK method api response with instance mock
vi.spyOn(instance) used instead of vi.mock('@/app/api/instance) because WebStorm
doesn't watch path changes in vi.mock()
*/
vi.spyOn(instance, 'request');

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

const itemInstance = { skill: { name: 'vi' } };
const expectItemInstance = { skill: { name: 'vi' }, agentId: parentId };

describe('Agent Skills API', () => {
  it('getList: correctly processes response', async () => {
    const getMock = instance.request.mockImplementationOnce(() => Promise.resolve({
      data: {
        items,
      },
    }));
    const response = await AgentSkillsAPI.getList({ parentId });
    expect(getMock).toHaveBeenCalled();
    expect(response).toEqual(expectResponse);
  });
  it('get: correctly processes response', async () => {
    const getMock = instance.request.mockImplementationOnce(() => Promise.resolve({
      data: items[0],
    }));
    const response = await AgentSkillsAPI.get({ parentId, itemId: id });
    expect(getMock).toHaveBeenCalled();
    expect(response).toEqual(expectResponse.items[0]);
  });
  it('add: correctly passes item to axios', async () => {
    instance.request.mockImplementationOnce(() => Promise.resolve({
     data: {
       ...itemInstance,
       agentId: parentId,
     },
    }));
    const response = await AgentSkillsAPI.add({ parentId, itemInstance });
    expect(response).toStrictEqual(expectItemInstance);
  });
  it('update: correctly passes item to axios', async () => {
    instance.request.mockImplementationOnce(() => Promise.resolve({
      data: {
        ...itemInstance,
        agentId: parentId,
      },
    }));
    const response = await AgentSkillsAPI.update({ parentId, itemId: id, itemInstance });
    expect(response).toStrictEqual(expectItemInstance);
  });
  it('patch: correctly passes item to axios', async () => {
    instance.request.mockImplementationOnce(() => Promise.resolve({
      data: {
        ...itemInstance,
        agentId: parentId,
      },
    }));
    const response = await AgentSkillsAPI.patch({ parentId, id, changes: itemInstance });
    expect(response).toStrictEqual(expectItemInstance);
  });
  it('delete: correctly calls axios delete', async () => {
    const deleteMock = instance.request.mockImplementationOnce(() => Promise.resolve({}));
    await AgentSkillsAPI.delete({ parentId, id });
    expect(deleteMock).toHaveBeenCalled();
  });
});

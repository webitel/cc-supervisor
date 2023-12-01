import instance from '../../../../../../../../app/api/instance';
import SkillsAPI from '../skills';

const items = [{
  name: 'skill',
  id: 2,
}];
const expectResponse = {
  items: [{
    name: 'skill',
    id: 2,
  }],
  next: false,
};

/* mock SDK method api response with instance mock
jest.spyOn(instance) used instead of jest.mock('@/app/api/instance) because WebStorm
doesn't watch path changes in jest.mock()
*/

jest.spyOn(instance, 'request');

describe('Skills API', () => {
  it('getList: correctly processes response', async () => {
    const listMock = instance.request.mockImplementationOnce(() => Promise.resolve({
      data: {
        items,
      },
    }));
    const response = await SkillsAPI.getList({});
    expect(listMock)
    .toHaveBeenCalled();
    expect(response)
    .toEqual(expectResponse);
  });
});

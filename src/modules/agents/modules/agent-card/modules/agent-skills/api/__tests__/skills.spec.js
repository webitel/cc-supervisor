import instance from '../../../../../../../../app/api/old/instance';
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
const getMock = jest.fn(() => ({ items }));
jest.spyOn(instance, 'request')
.mockImplementation(getMock);

describe('Skills API', () => {
  it('getList: correctly processes response', async () => {
    const response = await SkillsAPI.getList({});
    expect(getMock)
    .toHaveBeenCalled();
    expect(response)
    .toEqual(expectResponse);
  });
});

import instance from '../../../../app/api/instance';
import ActiveCallsAPI from '../active-calls';

const time = 123;
const items = [{
  createdAt: time,
}];
const expectResponse = {
  items: [{
    createdAt: new Date(time).toLocaleTimeString(),
    duration: '00:00:00',
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

describe('Active Calls API', () => {
  it('getList: correctly processes response', async () => {
    const listMock = instance.request.mockImplementationOnce(() => Promise.resolve({
      data: {
        items,
      },
    }));
    const response = await ActiveCallsAPI.getList({});
    expect(listMock)
    .toHaveBeenCalled();
    expect(response)
    .toEqual(expectResponse);
  });
});

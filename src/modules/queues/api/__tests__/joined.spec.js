import joined from '../_internals/joined';

describe('"joined" queues api script', () => {
  it('joined: default is today', () => {
    const end = new Date();
    const result = {
      joinedAtTo: end.getTime(),
      joinedAtFrom: new Date(end).setHours(0, 0, 0, 0),
    };
    expect(joined()).toEqual(result);
  });
  it('joined: 3hour', () => {
    const end = new Date();
    const result = {
      joinedAtTo: end.getTime(),
      joinedAtFrom: new Date(end.setHours(end.getHours() - 3)).getTime(),
    };
    expect(joined('3hour')).toEqual(result);
  });
});

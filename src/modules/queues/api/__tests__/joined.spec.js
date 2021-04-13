import joined from '../_internals/joined';

describe('"joined" queues api script', () => {
  it('joined: default is today', () => {
    const end = new Date();
    const result = {
      joinedAtTo: end.getTime(),
      joinedAtFrom: new Date(end).setHours(0, 0, 0, 0),
    };
    const { joinedAtTo, joinedAtFrom } = joined();
    // checking approx equality cause new Date() time may not be sync
    expect(`${joinedAtFrom}`.slice(0, -3)).toEqual(`${result.joinedAtFrom}`.slice(0, -3));
    expect(`${joinedAtTo}`.slice(0, -3)).toEqual(`${result.joinedAtTo}`.slice(0, -3));
  });
  it('joined: 3hour', () => {
    const end = new Date();
    const result = {
      joinedAtTo: end.getTime(),
      joinedAtFrom: new Date(end.setHours(end.getHours() - 3)).getTime(),
    };
    const { joinedAtTo, joinedAtFrom } = joined('3hour');
    // checking approx equality cause new Date() time may not be sync
    expect(`${joinedAtFrom}`.slice(0, -3)).toEqual(`${result.joinedAtFrom}`.slice(0, -3));
    expect(`${joinedAtTo}`.slice(0, -3)).toEqual(`${result.joinedAtTo}`.slice(0, -3));
  });
});

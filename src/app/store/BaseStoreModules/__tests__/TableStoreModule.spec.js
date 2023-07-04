import TableStoreModule from '../TableStoreModule';
import getContextMock from '../../../../../tests/unit/mocks/store/contextMock';

const headers = [
  { value: 'h1', show: true, field: 'shown_field' },
  { value: 'h2', show: true, field: 'shown_field' },
  { value: 'h3', show: true, field: 'shown_field2' },
  { value: 'h4', show: false, field: 'hidden' },
];

describe('Table Store Module: getters', () => {
  const module = new TableStoreModule();
  it('GET_LIST_PARAMS correctly collects params from both state and passed query', () => {
    const state = {};
    const query = { from: 0, agent: [1, 2] };
    const getters = {
      DATA_FIELDS: ['jest'],
    };
    const expectedParams = { fields: ['jest', 'id'], from: 0, agent: [1, 2] };
    expect(module.getters.GET_LIST_PARAMS(state, getters)(query))
      .toEqual(expectedParams);
  });
  it('GET_DATA_FIELDS_BY_VALUE correctly collects passed headers values', () => {
    const state = { headers };
    const headerValues = ['h1', 'h3'];
    const expectedFields = ['shown_field', 'shown_field2'];
    expect(module.getters.GET_DATA_FIELDS_BY_VALUE(state)(headerValues))
      .toEqual(expectedFields);
  });
  it('DATA_FIELDS correctly computes shown headers values', () => {
    const state = { headers };
    const expectedFields = ['shown_field', 'shown_field2'];
    expect(module.getters.DATA_FIELDS(state))
      .toEqual(expectedFields);
  });
});

describe('Table Store Module: actions', () => {
  let context;
  const module = new TableStoreModule();
  beforeEach(() => {
    context = getContextMock(jest);
    context.getters.GET_LIST_PARAMS = () => ({});
  });
  it('LOAD_DATA_LIST dispatches GET_LIST', async () => {
    context.dispatch = jest.fn(() => ({}));
    await module.actions.LOAD_DATA_LIST(context);
    expect(context.dispatch).toHaveBeenCalledWith('GET_LIST', {});
  });
  it('LOAD_DATA_LIST commits SET_LIST with "items", get from GET_LIST', async () => {
    const items = [{ jest: 'jest' }];
    context.dispatch = jest.fn(() => ({ items }));
    await module.actions.LOAD_DATA_LIST(context);
    expect(context.commit).toHaveBeenNthCalledWith(2, 'SET_LIST', items);
  });
  it('LOAD_DATA_LIST commits SET_NEXT with "next", get from GET_LIST', async () => {
    const next = true;
    context.dispatch = jest.fn(() => ({ next }));
    await module.actions.LOAD_DATA_LIST(context);
    expect(context.commit).toHaveBeenNthCalledWith(3, 'SET_NEXT', next);
  });
  it('LOAD_DATA_LIST commits SET_AGGS with "aggs", get from GET_LIST', async () => {
    const aggs = { jest: 'jest' };
    context.dispatch = jest.fn(() => ({ aggs }));
    await module.actions.LOAD_DATA_LIST(context);
    expect(context.commit).toHaveBeenNthCalledWith(4, 'SET_AGGS', aggs);
  });
  it('SET_HEADERS commits SET_HEADERS with passed value', () => {
    module.actions.SET_HEADERS(context, headers);
    expect(context.commit).toHaveBeenCalledWith('SET_HEADERS', headers);
  });
});

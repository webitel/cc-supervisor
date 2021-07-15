import getContextMock from '../../../../../../../../../tests/unit/mocks/store/contextMock';
import agentEdit from '../agent-edit';
import AgentAPI from '../../api/agent-edit';

const agentId = 123;
const agent = { agentId, name: 'jest' };

describe('Agent Edit store actions', () => {
  const _getAgent = jest.fn(() => agent);
  const _patchAgent = jest.fn(() => agent);
  jest.spyOn(AgentAPI, 'get').mockImplementation(_getAgent);
  jest.spyOn(AgentAPI, 'patch').mockImplementation(_patchAgent);

  let context;
  beforeEach(() => {
    context = getContextMock(jest);
    context.state.agent = agent;
    context.getters.AGENT_ID = agentId;
  });

  it('LOAD_AGENT calls AgentAPI', () => {
    agentEdit.actions.LOAD_AGENT(context);
    expect(_getAgent).toHaveBeenCalledWith({ itemId: agentId });
  });
  it('LOAD_AGENT commits SET_AGENT with agent, received from API', async () => {
    await agentEdit.actions.LOAD_AGENT(context);
    expect(context.commit).toHaveBeenCalledWith('SET_AGENT', agent);
  });
  it('UPDATE_AGENT calls AgentAPI patch with agent object and id', () => {
    const expectedPatchParams = { id: agentId, changes: agent };
    agentEdit.actions.UPDATE_AGENT(context);
    expect(_patchAgent).toHaveBeenCalledWith(expectedPatchParams);
  });
});

describe('Agent Edit store mutations', () => {
  let state;
  beforeEach(() => {
    state = {};
  });
  it('SET_AGENT sets received agent to state', () => {
    agentEdit.mutations.SET_AGENT(state, agent);
    expect(state.agent).toEqual(agent);
  });
});

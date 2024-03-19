import getContextMock from '../../../../../../../tests/unit/mocks/store/contextMock';
import card from '../agent-card';
import AgentAPI from '../../api/agent-card';

const agentId = 123;
const agent = { agentId, name: 'vi' };

describe('Agent Card store actions', () => {
  const _getAgent = vi.fn(() => agent);
  vi.spyOn(AgentAPI, 'get').mockImplementation(_getAgent);

  let context;
  beforeEach(() => {
    context = getContextMock(vi);
    context.state = { agent, agentId };
  });

  it('SET_AGENT_ID commits SET_AGENT_ID with passed param', () => {
    const id = 123;
    card.actions.SET_AGENT_ID(context, id);
    expect(context.commit).toHaveBeenCalledWith('SET_AGENT_ID', id);
  });
  it('LOAD_AGENT calls AgentAPI', () => {
    card.actions.LOAD_AGENT(context);
    expect(_getAgent).toHaveBeenCalledWith({ itemId: agentId });
  });
  it('LOAD_AGENT commits SET_AGENT with agent, received from API', async () => {
    await card.actions.LOAD_AGENT(context);
    expect(context.commit).toHaveBeenCalledWith('SET_AGENT', agent);
  });
});

describe('Agent Card store mutations', () => {
  let state;
  beforeEach(() => {
    state = {};
  });

  it('SET_AGENT_ID sets received id to state', () => {
    card.mutations.SET_AGENT_ID(state, agentId);
    expect(state.agentId).toBe(agentId);
  });
  it('SET_AGENT sets received agent to state', () => {
    card.mutations.SET_AGENT(state, agent);
    expect(state.agent).toEqual(agent);
  });
});

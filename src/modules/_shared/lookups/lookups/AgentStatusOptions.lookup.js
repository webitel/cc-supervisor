import { AgentStatus } from 'webitel-sdk';

/**
 * Status to filter
 * @enum
 * @readonly
 */
const AgentStatusOptions = Object.freeze([
    {
      name: 'Online',
      value: AgentStatus.Online,
    },
    {
      name: 'Offline',
      value: AgentStatus.Offline,
    },
    {
      name: 'Pause',
      value: AgentStatus.Pause,
    },
    {
      name: 'Break Out',
      value: AgentStatus.BreakOut,
    },
  ]);

  export default AgentStatusOptions;

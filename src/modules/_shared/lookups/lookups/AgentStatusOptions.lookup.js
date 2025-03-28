import { snakeToCamel } from '@webitel/ui-sdk/src/scripts/caseConverters';
import { AgentStatus } from 'webitel-sdk';

/**
 * Status to filter
 * @enum
 * @readonly
 */
const AgentStatusOptions = Object.freeze([
    {
      value: AgentStatus.Online,
      locale: `objects.agent.status.${AgentStatus.Online}`,
    },
    {
      value: AgentStatus.Offline,
      locale: `objects.agent.status.${AgentStatus.Offline}`,
    },
    {
      value: AgentStatus.Pause,
      locale: `objects.agent.status.${AgentStatus.Pause}`,
    },
    {
      value: AgentStatus.BreakOut,
      locale: `objects.agent.status.${snakeToCamel(AgentStatus.BreakOut)}`,
    },
  ]);

  export default AgentStatusOptions;

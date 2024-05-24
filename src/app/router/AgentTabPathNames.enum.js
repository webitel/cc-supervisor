import SupervisorSections
  from '@webitel/ui-sdk/src/enums/WebitelApplications/SupervisorSections.enum';

const AgentTabPathNames = Object.freeze({
  GENERAL: `${SupervisorSections.AGENTS}-card-general`,
  CALLS: `${SupervisorSections.AGENTS}-card-calls`,
  STATUSES: `${SupervisorSections.AGENTS}-card-statuses`,
  SKILLS: `${SupervisorSections.AGENTS}-card-skills`
});

export default AgentTabPathNames;
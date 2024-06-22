import { mapGetters } from 'vuex';
import SupervisorSections
  from '@webitel/ui-sdk/src/enums/WebitelApplications/SupervisorSections.enum';
import WebitelApplications
  from '@webitel/ui-sdk/src/enums/WebitelApplications/WebitelApplications.enum';

export default {
  computed: {
    ...mapGetters('userinfo', {
      checkAgentsAccess: 'ALLOW_AGENTS_ACCESS',
      checkQueuesAccess: 'ALLOW_QUEUES_ACCESS',
      checkCallsAccess: 'ALLOW_CALLS_ACCESS',
    }),
    nav() {
      return [{
        value: SupervisorSections.QUEUES,
        name: this.$t(`WebitelApplications.${WebitelApplications.SUPERVISOR}.sections.${SupervisorSections.QUEUES}`),
        route: '/queues',
        access: this.checkQueuesAccess,
      }, {
        value: SupervisorSections.AGENTS,
        name: this.$t(`WebitelApplications.${WebitelApplications.SUPERVISOR}.sections.${SupervisorSections.AGENTS}`),
        route: '/agents',
        access: this.checkAgentsAccess,
      }, {
        value: SupervisorSections.ACTIVE_CALLS,
        name: this.$t(`WebitelApplications.${WebitelApplications.SUPERVISOR}.sections.${SupervisorSections.ACTIVE_CALLS}`),
        route: '/active-calls',
        access: this.checkCallsAccess,
      }];
    },
  },
};

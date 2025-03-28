import SupervisorSections
  from '@webitel/ui-sdk/src/enums/WebitelApplications/SupervisorSections.enum';
import WebitelApplications
  from '@webitel/ui-sdk/src/enums/WebitelApplications/WebitelApplications.enum';
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('userinfo', {
      checkNavAccess: 'ALLOW_SECTION_ACCESS',
    }),
    nav() {
      return [{
        value: SupervisorSections.QUEUES,
        name: this.$t(`WebitelApplications.${WebitelApplications.SUPERVISOR}.sections.${SupervisorSections.QUEUES}`),
        route: '/queues',
        class: 'cc_queue',
      }, {
        value: SupervisorSections.AGENTS,
        name: this.$t(`WebitelApplications.${WebitelApplications.SUPERVISOR}.sections.${SupervisorSections.AGENTS}`),
        route: '/agents',
        class: 'cc_agent',
      }, {
        value: SupervisorSections.ACTIVE_CALLS,
        name: this.$t(`WebitelApplications.${WebitelApplications.SUPERVISOR}.sections.${SupervisorSections.ACTIVE_CALLS}`),
        route: '/active-calls',
        class: 'calls',
      }];
    },
  },
};

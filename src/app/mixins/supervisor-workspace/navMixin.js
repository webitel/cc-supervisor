import { mapGetters } from 'vuex';
import SupervisorSections
  from '@webitel/ui-sdk/src/enums/WebitelApplications/SupervisorSections.enum';
import WebitelApplications
  from '@webitel/ui-sdk/src/enums/WebitelApplications/WebitelApplications.enum';

export default {
  computed: {
    ...mapGetters('userinfo', {
      checkNavAccess: 'CHECK_OBJECT_ACCESS',
    }),
    nav() {
      return [{
        value: SupervisorSections.QUEUES,
        name: this.$t(`WebitelApplications.${WebitelApplications.SUPERVISOR}.sections.${SupervisorSections.QUEUES}`),
        route: '/queues',
      }, {
        value: SupervisorSections.AGENTS,
        name: this.$t(`WebitelApplications.${WebitelApplications.SUPERVISOR}.sections.${SupervisorSections.AGENTS}`),
        route: '/agents',
      }, {
        value: SupervisorSections.ACTIVE_CALLS,
        name: this.$t(`WebitelApplications.${WebitelApplications.SUPERVISOR}.sections.${SupervisorSections.ACTIVE_CALLS}`),
        route: '/active-calls',
      }];
    },
  },
};

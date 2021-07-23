<template>
  <wt-app-header>
    <wt-navigation-bar :current-app="currentApp" :nav="nav"></wt-navigation-bar>
    <wt-app-navigator :current-app="currentApp" :apps="apps"></wt-app-navigator>
    <wt-header-actions
      :user="user"
      :build-info="buildInfo"
      @settings="settings"
      @logout="logoutUser"
    />
  </wt-app-header>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import WebitelApplications from '@webitel/ui-sdk/src/enums/WebitelApplications/WebitelApplications.enum';
import SupervisorSections from '@webitel/ui-sdk/src/enums/WebitelApplications/SupervisorSections.enum';
import authAPI from '@webitel/ui-sdk/src/modules/Userinfo/api/auth';

export default {
  name: 'app-header',

  data: () => ({
    buildInfo: {
      release: process.env.VUE_APP_PACKAGE_VERSION,
      build: process.env.VUE_APP_BUILD_NUMBER,
    },
  }),
  computed: {
    ...mapState('userinfo', {
      user: (state) => state,
      currentApp: (state) => state.thisApp,
    }),
    ...mapGetters('userinfo', {
      checkAppAccess: 'CHECK_APP_ACCESS',
      checkNavAccess: 'CHECK_OBJECT_ACCESS',
    }),
    apps() {
      const agent = {
        name: WebitelApplications.AGENT,
        href: process.env.VUE_APP_AGENT_URL,
      };
      const supervisor = {
        name: WebitelApplications.SUPERVISOR,
        href: process.env.VUE_APP_SUPERVISOR_URL,
      };
      const history = {
        name: WebitelApplications.HISTORY,
        href: process.env.VUE_APP_HISTORY_URL,
      };
      const audit = {
        name: WebitelApplications.AUDIT,
        href: process.env.VUE_APP_AUDIT_URL,
      };
      const admin = {
        name: WebitelApplications.ADMIN,
        href: process.env.VUE_APP_ADMIN_URL,
      };
      const grafana = {
        name: WebitelApplications.ANALYTICS,
        href: process.env.VUE_APP_GRAFANA_URL,
      };
      const apps = [admin, supervisor, agent, history, audit];
      if (this.$config?.ON_SITE) apps.push(grafana);
      return apps.filter(({ name }) => this.checkAppAccess(name));
    },

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
      }].filter((nav) => true || this.checkNavAccess(nav));
    },
  },

  methods: {
    settings() {
      const settingsUrl = process.env.VUE_APP_SETTINGS_URL;
      window.open(settingsUrl);
    },

    async logoutUser() {
      try {
        await authAPI.logout();
        await this.$router.replace('/auth');
      } catch {
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.wt-navigation-bar {
  margin-right: auto;
}
</style>

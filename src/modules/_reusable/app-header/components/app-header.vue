<template>
  <wt-app-header>
    <wt-navigation-bar
      :current-app="currentApp"
      :nav="navAccess"
      :dark-mode="darkMode"
      :logo-route="RoutePaths.StartPage"
    />
    <wt-logo
      :dark-mode="darkMode"
      :logo-href="startPageHref"
     />
    <wt-dark-mode-switcher />
    <wt-app-navigator
      :current-app="currentApp"
      :apps="apps"
      :dark-mode="darkMode"
    />
    <wt-header-actions
      :user="user"
      :build-info="buildInfo"
      @settings="settings"
      @logout="logoutUser"
    />
  </wt-app-header>
</template>

<script>
import WebitelApplications from '@webitel/ui-sdk/src/enums/WebitelApplications/WebitelApplications.enum';
import WtDarkModeSwitcher from '@webitel/ui-sdk/src/modules/Appearance/components/wt-dark-mode-switcher.vue';
import { mapActions,mapGetters, mapState } from 'vuex';

import navAccessMixin from '../../../../app/mixins/supervisor-workspace/navMixin';
import RoutePaths from '../../../../app/router/_internals/RoutePaths.enum';

export default {
  name: 'AppHeader',
  components: {
    WtDarkModeSwitcher,
  },
  mixins: [navAccessMixin],
  inject: ['$config'],
  data: () => ({
    RoutePaths,
    buildInfo: {
      release: process.env.npm_package_version,
      build: import.meta.env.VITE_BUILD_NUMBER,
    },
  }),
  computed: {
    ...mapState('userinfo', {
      user: (state) => state,
      currentApp: (state) => state.thisApp,
    }),
    ...mapGetters('userinfo', {
      checkAppAccess: 'CHECK_APP_ACCESS',
    }),
    ...mapGetters('appearance', {
      darkMode: 'DARK_MODE',
    }),
    startPageHref() {
      return import.meta.env.VITE_START_PAGE_URL;
    },
    apps() {
      const agent = {
        name: WebitelApplications.AGENT,
        href: import.meta.env.VITE_AGENT_URL,
      };
      const supervisor = {
        name: WebitelApplications.SUPERVISOR,
        href: import.meta.env.VITE_SUPERVISOR_URL,
      };
      const history = {
        name: WebitelApplications.HISTORY,
        href: import.meta.env.VITE_HISTORY_URL,
      };
      const audit = {
        name: WebitelApplications.AUDIT,
        href: import.meta.env.VITE_AUDIT_URL,
      };
      const admin = {
        name: WebitelApplications.ADMIN,
        href: import.meta.env.VITE_ADMIN_URL,
      };
      const grafana = {
        name: WebitelApplications.ANALYTICS,
        href: import.meta.env.VITE_GRAFANA_URL,
      };
      const crm = {
        name: WebitelApplications.CRM,
        href: import.meta.env.VITE_CRM_URL,
      };
      const apps = [admin, supervisor, agent, history, audit, crm];
      if (this.$config?.ON_SITE) apps.push(grafana);
      return apps.filter(({ name }) => this.checkAppAccess(name));
    },
    navAccess() {
      return this.nav.filter((nav) => this.checkNavAccess({ name: nav.value, scopeClass: nav.class }));
    },
  },

  methods: {
    ...mapActions('userinfo', {
      logout: 'LOGOUT',
    }),
    settings() {
      const settingsUrl = import.meta.env.VITE_SETTINGS_URL;
      window.open(settingsUrl);
    },

    async logoutUser() {
     return this.logout();
    },
  },
};
</script>

<style lang="scss" scoped>
.wt-dark-mode-switcher {
  margin-right: auto;
}
</style>

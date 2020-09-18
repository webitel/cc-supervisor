<template>
  <wt-app-header>
    <wt-navigation-bar :current-app="currentApp" :nav="nav"></wt-navigation-bar>
    <wt-app-navigator :current-app="currentApp" :apps="apps"></wt-app-navigator>
    <wt-header-actions :user="user" @settings="settings" @logout="logoutUser"/>
  </wt-app-header>
</template>

<script>
import { mapState } from 'vuex';
import { logout } from '../../../../api/auth/auth';

export default {
  name: 'app-header',

  data: () => ({
    currentApp: 'supervisor',
    apps: {
      agent: { href: process.env.VUE_APP_AGENT_URL },
      supervisor: { href: process.env.VUE_APP_SUPERVISOR_URL },
      history: { href: process.env.VUE_APP_HISTORY_URL },
      audit: { href: process.env.VUE_APP_AUDIT_URL },
      admin: { href: process.env.VUE_APP_ADMIN_URL },
      grafana: { href: process.env.VUE_APP_GRAFANA_URL },
    },
  }),
  computed: {
    ...mapState('userinfo', {
      user: (state) => state,
    }),

    nav() {
      return [{
        value: 'queues',
        name: this.$t('nav.queue'),
        route: 'queues',
      }, {
        value: 'agents',
        name: this.$t('nav.agents'),
        route: 'agents',
      }, {
        value: 'active-calls',
        name: this.$t('nav.activeCalls'),
        route: 'active-calls',
      },
      ];
    },
  },

  methods: {
    settings() {
      window.open('https://dev.webitel.com/settings');
    },

    async logoutUser() {
      try {
        await logout();
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

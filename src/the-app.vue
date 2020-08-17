<template>
  <router-view/>
</template>

<script>
import { mapActions } from 'vuex';
import { getSession } from './api/auth/auth';

export default {
  name: 'the-app',

  created() {
    this.setAutoRefresh();
    this.restoreSession();
    this.setLanguage();
  },

  methods: {
    ...mapActions('userinfo', {
      setSession: 'SET_SESSION',
    }),

    async restoreSession() {
      // ROUTER REDIRECTS EMPTY TOKEN PATHS TO /AUTH, SO THERE'S NO NEED TO CATCH IT
      try {
        const userinfo = await getSession();
        this.setSession(userinfo);
      } catch {
        await this.$router.replace('/auth');
      }
    },

    setLanguage() {
      const lang = localStorage.getItem('lang');
      if (lang) this.$i18n.locale = lang;
    },

    setAutoRefresh() {
      const autoRefresh = localStorage.getItem('auto-refresh');
      if (!autoRefresh) localStorage.setItem('auto-refresh', '10000');
    },
  },
};
</script>

<style lang="scss">
</style>

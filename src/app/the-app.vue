<template>
  <router-view/>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'the-app',
  created() {
    this.setAutoRefresh();
    this.openSession();
    this.setLanguage();
  },
  destroyed() {
    this.closeSession();
  },
  methods: {
    ...mapActions({
      openSession: 'OPEN_SESSION',
      closeSession: 'CLOSE_SESSION',
    }),

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

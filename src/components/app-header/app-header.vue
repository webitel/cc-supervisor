<template>
  <wt-app-header>
    <app-navigator/>
    <wt-header-actions :user="user" @settings="settings" @logout="logoutUser"/>
  </wt-app-header>
</template>

<script>
import { mapState } from 'vuex';
import { logout } from '../../api/auth/auth';
import AppNavigator from './the-app-navigator.vue';

export default {
  name: 'app-header',
  components: {
    AppNavigator,
  },

  data: () => ({}),
  computed: {
    ...mapState('userinfo', {
      user: (state) => state,
    }),
  },

  methods: {
    settings() {
      this.$router.push('/supervisor/the-settings');
    },

    async logoutUser() {
      try {
        await logout();
        await this.$router.replace('/auth');
      } catch {
      } finally {
        this.close();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

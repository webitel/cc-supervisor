<template>
  <main v-if="hasAccess" class="the-supervisor-workspace">
    <call-window/>
    <call-window-eavesdrop/>
    <wt-notifications-bar/>
    <app-header/>
    <div class="the-supervisor-workspace__content">
      <router-view/>
    </div>
  </main>
  <wt-error-page v-else type="403" @back="goToApplicationHub"></wt-error-page>
</template>

<script>
import { mapGetters } from 'vuex';
import WebitelApplications from '@webitel/ui-sdk/src/enums/WebitelApplications/WebitelApplications.enum';
import AppHeader from '../../modules/_reusable/app-header/components/app-header.vue';
import CallWindowEavesdrop from '../../modules/call-window/components/call-window-eavesdrop.vue';
import CallWindow from '../../modules/call-window/components/call-window-conversation.vue';

export default {
  name: 'the-supervisor-workspace',
  components: {
    AppHeader,
    CallWindow,
    CallWindowEavesdrop,
  },
  computed: {
    ...mapGetters('userinfo', {
      checkAppAccess: 'CHECK_APP_ACCESS',
    }),
    hasAccess() {
      return this.checkAppAccess(WebitelApplications.SUPERVISOR);
    },
  },
  methods: {
    goToApplicationHub() {
      const adminUrl = import.meta.env.VITE_APPLICATION_HUB_URL;
      window.location.href = adminUrl;
    },
  },
};
</script>

<style lang="scss" scoped>
@use '../css/supervisor-workspace/the-supervisor-workspace';

.the-supervisor-workspace {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  max-height: 200vh;
}

.the-supervisor-workspace__content {
  flex-grow: 1;
  max-height: 100%;
  min-height: 0;
}
</style>

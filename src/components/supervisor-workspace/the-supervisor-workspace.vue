<template>
  <div class="the-supervisor-workspace">
    <app-nav/>
    <main class="the-supervisor-workspace__wrapper">
      <call-window/>
      <call-window-eavesdrop/>
      <wt-notifications-bar/>
      <app-header/>
      <div class="the-supervisor-workspace__content">
        <router-view/>
      </div>
    </main>
  </div>
</template>

<script>
import AppHeader from '../app-header/app-header.vue';
import AppNav from '../the-navbar/the-navbar.vue';
import CallWindow from '../call-window/call-window.vue';
import CallWindowEavesdrop from '../call-window/call-window-eavesdrop.vue';

export default {
  name: 'the-supervisor-workspace',
  components: {
    AppHeader,
    AppNav,
    CallWindow,
    CallWindowEavesdrop,
  },
};
</script>

<style lang="scss" scoped>
.the-supervisor-workspace {
  display: flex;
  width: 100%;
}

// main content itself, without nav but with main header
.the-supervisor-workspace__wrapper {
  flex: 1 0 auto;
  width: 1px;
}

.the-nav__wrap {
  flex: 0 0 272px;
}
</style>

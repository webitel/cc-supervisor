<template>
  <main class="the-supervisor-workspace">
    <div class="the-supervisor-workspace__wrapper">
      <call-window/>
      <call-window-eavesdrop/>
      <wt-notifications-bar/>
      <app-header/>
      <div class="the-supervisor-workspace__content">
        <router-view/>
      </div>
    </div>
  </main>
</template>

<script>
import AppHeader from '../../modules/_reusable/app-header/components/app-header.vue';
import CallWindow from '../../modules/call-window/components/call-window.vue';
import CallWindowEavesdrop from '../../modules/call-window/components/call-window-eavesdrop.vue';

export default {
  name: 'the-supervisor-workspace',
  components: {
    AppHeader,
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

.the-nav__wrap {
  flex: 0 0 272px;
  height: 100%;
}

// main content itself, without nav but with main header
.the-supervisor-workspace__wrapper {
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  width: 1px;
}

.the-supervisor-workspace__content {
  flex-grow: 1;
}
</style>

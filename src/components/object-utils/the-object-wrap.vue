<template>
    <div class="object-wrap">
        <app-nav @re-renderNav="updateNav" :key="reloadNavKey"></app-nav>
        <main class="object">
            <call-window></call-window>
            <notification></notification>
            <app-header></app-header>
           <div class="object-content-wrap">
               <router-view></router-view>
           </div>
        </main>
    </div>
</template>

<script>
import ccheader from '../cc-header/cc-header.vue';
import theNavbar from '../the-navbar.vue';
import notification from '../utils/notification.vue';
import callWindow from '../utils/call-window.vue';

export default {
  name: 'module-wrap',
  components: {
    'app-header': ccheader,
    'app-nav': theNavbar,
    notification,
    callWindow,
  },
  data() {
    return {
      reloadNavKey: 0,
    };
  },
  methods: {
    updateNav() {
      this.reloadNavKey++;
    },
  },
};
</script>

<style lang="scss" scoped>
    $bg-color: #F9F9F9;

    .object {
        background: $bg-color;
    }

    .object-content-wrap {
        padding: 28px 58px;
    }
</style>

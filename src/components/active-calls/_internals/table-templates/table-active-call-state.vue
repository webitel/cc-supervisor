<template>
  <div>
    {{ item.state }}
    <wt-icon-btn
      v-if="isActive"
      icon="speaker-off"
    ></wt-icon-btn>
  </div>
</template>

<script>
import { CallActions } from 'webitel-sdk';

export default {
  name: 'table-active-call-state',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isActive() {
      return this.item.state !== CallActions.Hangup
        && this.item.state !== CallActions.Ringing;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

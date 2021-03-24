<template>
  <div class="table-active-call-state">
    {{ item.state }}
    <wt-icon-btn
      v-if="isActive"
      icon="sound-on"
      color="true"
      @click="$emit('attach-call', item.id)">
    </wt-icon-btn>
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
.table-active-call-state {
  display: flex;
  align-items: center;

  .wt-icon-btn {
    margin-left: 10px;
  }
}
</style>

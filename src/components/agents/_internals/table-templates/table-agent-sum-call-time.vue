<template>
  <div class="call" v-if="item.callTime">
    <span>{{ item.callTime }}</span>
    <wt-icon-btn
      v-if="item.activeCallId"
      icon="sound-on"
      color="danger"
      @click.prevent="$emit('attach-call', item.activeCallId)">
    </wt-icon-btn>
  </div>
</template>

<script>
export default {
  name: 'table-agent-status',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.table-agents {
  display: flex;

  .table-status {
    width: 40px;

    &:last-child {
      margin-left: 16px;
    }
  }
}
</style>

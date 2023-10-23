<template>
  <div class="table-agent-sum-call-time" v-if="item.callTime">
    {{ item.callTime }}
    <wt-icon-btn
      v-if="item.activeCallId"
      icon="sound-on"
      @click="$emit('attach-call', item.activeCallId)">
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
.table-agent-sum-call-time {
  display: flex;
  align-items: center;

  .wt-icon-btn {
    margin-left: 10px;
  }
}
</style>

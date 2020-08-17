<template>
  <div class="call" v-if="item.callTime">
    <span>{{ item.callTime }}</span>
    <button
      v-if="item.activeCallId"
      class="icon-btn"
      @click.prevent="attachCall(item.activeCallId)">
      <icon>
        <svg class="icon icon-speaker_off_md grid">
          <use xlink:href="#icon-speaker_off_md"></use>
        </svg>
      </icon>
    </button>
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

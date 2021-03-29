<template>
  <div class="table-agents">
    <wt-indicator
      color="success"
      :text="online"
    ></wt-indicator>
    <wt-indicator
      color="primary"
      :text="pause"
    ></wt-indicator>
    <wt-indicator
      color="danger"
      :text="offline"
    ></wt-indicator>
  </div>
</template>

<script>
export default {
  name: 'table-agents',
  props: {
    status: {
      type: Object,
      required: true,
    },
  },
  computed: {
    online() {
      return this.status.online || 0;
    },
    pause() {
      return this.status.pause || 0;
    },
    offline() {
      return this.status.offline || 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.table-agents {
  display: flex;

  .wt-indicator:not(:last-child) {
    min-width: 54px;
    margin-right: 10px;
  }
}
</style>

<template>
  <div class="table-agents">
    <span class="table-agents__total">
      {{ total }}
    </span>
    <wt-indicator
      color="success"
      :text="online"
    ></wt-indicator>
    <wt-indicator
      color="primary"
      :text="pause"
    ></wt-indicator>
    <wt-indicator
      color="disabled"
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
    total() {
      return this.status.total || 0;
    },
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
  align-items: center;

  .table-agents__total   {
    @extend %typo-strong-lg;
    min-width: 30px;
  }

  .wt-indicator {
    min-width: 54px;
    margin-left: 10px;
  }
}
</style>

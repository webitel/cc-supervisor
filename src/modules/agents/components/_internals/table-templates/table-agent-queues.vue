<template>
  <div v-if="item.queues">
    <wt-badge
      v-for="(queue, key) of item.queues"
      :key="key"
    >{{ queue.name }}
    </wt-badge>
  </div>
</template>

<script>
export default {
  name: 'table-agent-queues',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .wt-badge:not(:last-child) {
    margin-right: var(--component-spacing);
  }
</style>

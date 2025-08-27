<template>
  <div v-if="item.queues">
    <wt-chip
      v-for="(queue, key) of item.queues"
      :key="key"
    >{{ queue.name }}
    </wt-chip>
  </div>
</template>

<script>
export default {
  name: 'TableAgentQueues',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .wt-chip:not(:last-child) {
    white-space: break-spaces;
    margin-right: var(--spacing-sm);
    margin-bottom: 5px;
  }
</style>

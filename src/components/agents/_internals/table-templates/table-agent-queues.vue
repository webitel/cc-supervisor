<template>
  <div v-if="item.queues">
    {{ item.queues[0].name }}
    <span
      v-if="item.queues.length > 1"
      class="table-badge"
    >+ {{ item.queues.length - 1 }}</span>
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
</style>

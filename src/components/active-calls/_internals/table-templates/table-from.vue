<template>
  <div v-if="item.from">
    {{ item.from.number }}
  </div>
</template>

<script>
export default {
  name: 'table-from',
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

<template>
  <div v-if="item.from">
    {{ item.from.name }}
  </div>
</template>

<script>
export default {
  name: 'table-call-client',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>

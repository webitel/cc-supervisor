<template>
  <div>
    {{ item.notes }}
  </div>
</template>

<script>
export default {
  name: 'table-call-notes',
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

<template>
  <div v-if="item.queue">
    {{item.queue.name}}
  </div>
</template>

<script>
  export default {
    name: 'TableQueue',
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

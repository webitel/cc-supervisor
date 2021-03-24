<template>
  <div v-if="item.from">
    {{ item.from.number }}
  </div>
</template>

<script>
  export default {
    name: 'table-call-number',
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

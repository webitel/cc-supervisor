<template>
  <wt-tooltip placement="bottom">
    <template #activator>
      <wt-icon
        icon="comment"
        color="info"
      />
    </template>
    {{ statusComment }}
  </wt-tooltip>
</template>
<script setup lang="ts">

defineProps({
  statusComment: {
    type: String,
    default: ''
  }
})

</script>

<style scoped lang="scss">

</style>

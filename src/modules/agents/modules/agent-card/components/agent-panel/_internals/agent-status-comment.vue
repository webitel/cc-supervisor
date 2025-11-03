<template>
  <wt-tooltip placement="bottom">
    <template #activator>
      <wt-icon
        icon="comment"
        color="info"
      />
    </template>
    <p class="agent-panel__comment">
    {{ statusComment }}
    </p>
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
.agent-panel__comment {
  word-break: break-word;
  // TODO: Remove this once the issue in wt-tooltip is fixed (https://webitel.atlassian.net/browse/WTEL-7672)
  // width restriction so that it doesn't stretch across the page view
  max-width: 280px;
}
</style>

<template>
  <div v-if="item.callTime || item.activeCallId" class="table-agent-sum-call-time">
    {{ item.callTime }}
    <wt-icon-btn
      v-if="item.activeCallId"
      icon="sound-on"
      @click="emit('attach-call', item.activeCallId)">
    </wt-icon-btn>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
	item: {
		callTime?: string;
		activeCallId?: string;
	};
}>();

const emit = defineEmits<{
	'attach-call': [
		callId: string,
	];
}>();
</script>

<style lang="scss" scoped>
.table-agent-sum-call-time {
  display: flex;
  align-items: center;

  .wt-icon-btn {
    margin-left: 10px;
  }
}
</style>

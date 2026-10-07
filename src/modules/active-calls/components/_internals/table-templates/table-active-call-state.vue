<template>
  <div class="table-active-call-state">
    {{ item.state }}
    <wt-icon-btn
      v-if="isActive"
      icon="sound-on"
      @click="emit('attach-call', item.id)">
    </wt-icon-btn>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { CallActions } from 'webitel-sdk';

const props = defineProps<{
	item: {
		id?: string;
		state?: string;
	};
}>();

const emit = defineEmits<{
	'attach-call': [
		callId: string,
	];
}>();

const isActive = computed(
	() =>
		props.item.state !== CallActions.Hangup &&
		props.item.state !== CallActions.Ringing,
);
</script>

<style lang="scss" scoped>
.table-active-call-state {
  display: flex;
  align-items: center;

  .wt-icon-btn {
    margin-left: 10px;
  }
}
</style>

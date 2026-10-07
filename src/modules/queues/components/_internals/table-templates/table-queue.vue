<template>
  <div v-if="item.queue">
    {{item.queue.name}}
  </div>
</template>

<script lang="ts" setup>
defineProps<{
	item: {
		queue?: {
			name?: string;
		};
	};
}>();
</script>

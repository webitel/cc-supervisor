<template>
  <div v-if="item.team">
    {{item.team.name}}
  </div>
</template>

<script lang="ts" setup>
defineProps<{
	item: {
		team?: {
			name?: string;
		};
	};
}>();
</script>

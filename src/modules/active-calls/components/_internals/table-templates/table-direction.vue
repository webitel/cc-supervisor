<template>
  <wt-icon
    :icon="directionIcon"
    :color="directionIconColor"
  ></wt-icon>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { CallDirection } from 'webitel-sdk';

const props = defineProps<{
	item: {
		direction?: string;
	};
}>();

const isOutbound = computed(
	() => props.item.direction === CallDirection.Outbound,
);

const directionIcon = computed(() =>
	isOutbound.value ? 'call-outbound' : 'call-inbound',
);

const directionIconColor = computed(() =>
	isOutbound.value ? 'success' : 'primary',
);
</script>

<style lang="scss" scoped>
</style>

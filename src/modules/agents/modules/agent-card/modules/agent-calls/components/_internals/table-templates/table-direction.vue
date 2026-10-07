<template>
  <div>
    <wt-icon :icon="direction.icon" :color="direction.color"></wt-icon>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { CallDirection } from 'webitel-sdk';

interface DirectionView {
	icon: string;
	color: string;
}

const props = defineProps<{
	item: {
		direction?: string;
	};
}>();

const directionViews: Partial<Record<CallDirection, DirectionView>> = {
	[CallDirection.Inbound]: {
		icon: 'call-inbound',
		color: 'primary',
	},
	[CallDirection.Outbound]: {
		icon: 'call-outbound',
		color: 'success',
	},
};

const direction = computed<DirectionView>(
	() =>
		directionViews[props.item.direction as CallDirection] ?? {
			icon: '',
			color: '',
		},
);
</script>

<style lang="scss" scoped>
</style>

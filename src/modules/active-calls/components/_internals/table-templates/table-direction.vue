<template>
  <wt-icon
    :icon="direction.icon"
    :color="direction.color"
  ></wt-icon>
</template>

<script lang="ts" setup>
import { IconColor } from '@webitel/ui-sdk/enums';
import { computed } from 'vue';
import { CallDirection } from 'webitel-sdk';

interface DirectionView {
	icon: string;
	color: IconColor;
}

const props = defineProps<{
	item: {
		direction?: string;
	};
}>();

const directionViews: Partial<Record<CallDirection, DirectionView>> = {
	[CallDirection.Inbound]: {
		icon: 'call-inbound',
		color: IconColor.PRIMARY,
	},
	[CallDirection.Outbound]: {
		icon: 'call-outbound',
		color: IconColor.SUCCESS,
	},
};

const direction = computed<DirectionView>(
	() =>
		directionViews[props.item.direction as CallDirection] ??
		directionViews[CallDirection.Inbound],
);
</script>

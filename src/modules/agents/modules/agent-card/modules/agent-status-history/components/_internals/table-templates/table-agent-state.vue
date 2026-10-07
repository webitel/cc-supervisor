<template>
  <div>
    {{ statusText }}
  </div>
</template>

<script lang="ts" setup>
import { snakeToCamel } from '@webitel/ui-sdk/scripts';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const props = defineProps<{
	item: {
		state?: string;
		payload?: string;
		pauseCause?: string;
	};
}>();

const { t } = useI18n();

const statusText = computed(
	() =>
		props.item.payload ||
		props.item.pauseCause ||
		t(`pages.card.statusHistory.states.${snakeToCamel(props.item.state)}`),
);
</script>

<template>
  <wt-indicator
    :color="statusColor"
    :text="statusText"
  ></wt-indicator>
</template>

<script lang="ts" setup>
import { snakeToCamel } from '@webitel/ui-sdk/scripts';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { AgentStatus } from 'webitel-sdk';

const props = defineProps<{
	item: {
		status?: string;
		pauseCause?: string;
	};
}>();

const { t } = useI18n();

const statusColor = computed(() => {
	switch (props.item.status) {
		case AgentStatus.Online:
			return 'success';
		case AgentStatus.Offline:
			return 'disabled';
		case AgentStatus.BreakOut:
			return 'break-out';
		default:
			return 'primary';
	}
});

// Translate offline pause cause
const translatePauseCause = (statusComment: string) => {
	const reasonParts = statusComment.replace('system/', '').split('/');
	const translatedParts = reasonParts.map((part) =>
		t(`packages.pauseCauses.${part}`),
	);
	const prefix = t('packages.pauseCauses.combinationPrefix');

	return prefix + translatedParts.join('/');
};

const statusText = computed(() => {
	const { status, pauseCause } = props.item;

	// Show raw pause cause for paused agents
	if (status === AgentStatus.Pause && pauseCause) {
		return pauseCause;
	}

	// Show translated pause cause for offline agents
	if (status === AgentStatus.Offline && pauseCause) {
		return translatePauseCause(pauseCause);
	}

	return t(`packages.agentStatus.${snakeToCamel(status)}`);
});
</script>

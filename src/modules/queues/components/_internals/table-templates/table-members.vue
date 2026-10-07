<template>
  <div class="table-members">
    {{ item.members.processing }} /
    <strong
      class="table-members__waiting-count"
      :class="membersLoadRatioClass"
    >{{ item.members.waiting }}</strong>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
	item: {
		members: {
			processing?: number | string;
			waiting?: number | string;
		};
	};
}>();

const membersLoadRatioClass = computed(() => {
	const { processing, waiting } = props.item.members;
	return !waiting || Number(processing) / Number(waiting) > 0.5
		? 'low'
		: 'high';
});
</script>

<style lang="scss" scoped>
.table-members__waiting-count {
  font-weight: normal;

  &.high {
    color: var(--error-color);
  }

  &.low {
    color: var(--success-color);
  }
}
</style>

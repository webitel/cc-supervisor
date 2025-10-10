<template>
  <div class="screen-sharing-controls">
    <div class="screen-sharing-controls__actions">
      <wt-icon-btn
        icon="screenshot"
        @click="props.stream.screenshot"
      />

      <wt-icon-btn
        :icon="recordIcon"
        @click="toggleRecordAction"
      />

      <wt-icon-btn
        icon="sharing-end"
        @click="props.stream.close"
      />
    </div>

    <div class="screen-sharing-controls__indicator">
      <wt-indicator color="danger" text="00:00:14" />
    </div>
  </div>

</template>

<script setup lang="ts">
import {computed, ref} from 'vue';

interface Props {
  stream: {
    close: () => void
    screenshot: () => void
    stopRecord: () => void
    startRecord: () => void
    recordings: boolean
  }
}

const props = defineProps<Props>();

const recordIcon = computed(() => (props.stream.recordings ? 'stop-record' : 'start-record'));

const toggleRecordAction = () => {
  if (props.stream.recordings) {
    props.stream.stopRecord();
  } else {
    props.stream.startRecord();
  }
};


const timer = ref()
</script>

<style scoped lang="scss">
.screen-sharing-controls {
  height: var(--media-player-wrapper-head-height);
  border-bottom: 1px solid var(--wt-color-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-xs);
  box-sizing: border-box;
  -webkit-user-select: none;
  user-select: none;
  transition: background-color var(--transition) ease;

  &:hover {
    background: var(--p-overlay-player-wrapper-head-hover-background-color);
    backdrop-filter: blur(10px);
  }

  &__title {
    min-width: 0; // allow text to ellipsis if needed
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: var(--spacing-2xs);
  }

  &__action {
    appearance: none;
    border: none;
    background: transparent;
    color: var(--p-text-color);
    padding: var(--spacing-2xs);
    line-height: 1;
    border-radius: var(--p-border-radius-sm);
    cursor: pointer;

    &:hover {
      background: var(--p-hover-background);
    }
  }

  .wt-icon-btn {
    fill: var(--p-white);
  }
}
</style>



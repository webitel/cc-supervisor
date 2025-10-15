<template>
  <div class="screen-sharing-controls" :class="{[`screen-sharing-controls--${props.windowSize}`]: true}">
    <div class="screen-sharing-controls__actions" :class="{[`screen-sharing-controls--${props.windowSize}__actions`]: true}">
      <wt-button
        rounded
        contains-icon
        variant="outlined"
        color="secondary"
        size="sm"
        :icon="screenShotIcon"
        @click="makeScreenshot"
      />

      <wt-button
        rounded
        contains-icon
        variant="outlined"
        color="secondary"
        size="sm"
        :icon="recordIcon"
        @click="toggleRecordAction"
      />

      <wt-button
        icon="sharing-end"
        class="screen-sharing-controls__sharing-end"
        color="error"
        variant="outlined"
        size="sm"
        rounded
        contains-icon
        @click="emit('close')"
      />
    </div>

    <div
      v-if="isRecording" class="screen-sharing-controls__indicator"
    >
      <wt-indicator
        color="error"
        size="md"
      />

      <span class="screen-sharing-controls__time">{{ convertDuration(secondsElapsed) }}</span>
    </div>
  </div>

</template>

<script setup lang="ts">
import convertDuration from '@webitel/ui-sdk/src/scripts/convertDuration';
import {computed, onUnmounted, ref, watch} from 'vue';

interface Session {
  close: () => void
  screenshot: () => void
  stopRecord: () => void
  startRecord: () => void
  recordings: boolean
}

interface Props {
  windowSize: 'sm' | 'md' | 'lg'
  screenshotStatus: 'done' | 'false'
  session: Session
}

const props = defineProps<Props>();

interface Emits {
  (e: 'close'): void
}

const emit = defineEmits<Emits>()

const recordIcon = computed(() => (props.session.recordings ? 'record-stop' : 'record-start'));
const getScreenshotIcon = (status?: string) => {
  switch (status) {
    case 'done':
      return 'screenshot-done';
    case 'false':
      return 'screenshot-false';
    default:
      return 'screenshot';
  }
}

const screenShotIcon = computed(() => getScreenshotIcon(props.screenshotStatus));
const isRecording = computed(() => props.session.recordings);

const secondsElapsed = ref(0);
const timerId = ref<number | null>(null);

function startTimer() {
  secondsElapsed.value = 0;
  stopTimer();
  timerId.value = window.setInterval(() => {
    secondsElapsed.value++;
  }, 1000);
}

function stopTimer() {
  if (timerId.value !== null) {
    clearInterval(timerId.value);
    timerId.value = null;
  }
}

const toggleRecordAction = () => {
  console.log(props.session, ' props.session')
  if (isRecording.value) {
    props.session.stopRecord();
  } else {
    props.session.startRecord();
  }
};
const makeScreenshot = () => {
  console.log(props.session, ' props.session')
  props.session.screenshot()
};

onUnmounted(() => {
  stopTimer();
});

watch(isRecording, (newVal) => {
  if (newVal) {
    startTimer();
  } else {
    stopTimer();
  }
});
</script>

<style scoped lang="scss">
@use '@webitel/ui-sdk/src/css/main' as *;

.screen-sharing-controls {
  position: relative;

  &--sm {
    &__actions {
      border-top-left-radius: 0 !important;
      border-top-right-radius: 0 !important;
    }
  }

  &--md {
    &__actions {
      width: 184px;
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-2xs);
    background: var(--p-player-control-bar-background);
    box-shadow: var(--elevation-10);
  }

  &__action {
    appearance: none;
    border: none;
    background: transparent;
    color: var(--p-text-color);
    padding: var(--spacing-2xs);
    border-radius: var(--p-border-radius-sm);
    cursor: pointer;

    &:hover {
      background: var(--p-hover-background);
    }
  }

  &__indicator {
    background: var(--content-wrapper-color);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--p-player-counter-gap);
    padding: var(--p-player-counter-padding);
    border-radius: var(--p-player-counter-border-radius);
    box-shadow: var(--elevation-10);
    position: absolute;
    right: 7px;
    bottom: calc(100% + 8px);
    width: 100px;
  }

  &__time {
    @extend %typo-body-1;
  }
}
</style>



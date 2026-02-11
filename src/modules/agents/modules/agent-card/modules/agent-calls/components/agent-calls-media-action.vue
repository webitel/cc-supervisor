<template>
  <wt-context-menu
    class="table-media-action"
    :options="call.files[EngineCallFileType.FileTypeAudio]"
    max-width="400px"
    @click="handleFilesSelect"
  >
    <template #activator="{ toggle }">
      <wt-icon-btn
        :icon="callMediaIcon"
        @click="toggle"
      />
    </template>
    <template #option="{ name, id }">
      <div class="table-media-action__option">
        <wt-icon
          :icon="changeFileMediaIcon(id)"
        />
        {{ name }}
      </div>
    </template>
  </wt-context-menu>
</template>

<script setup lang="ts">
import { EngineCallFileType } from '@webitel/api-services/gen/models';
import { computed, ref } from 'vue';
import { EngineHistoryCall } from 'webitel-sdk';

interface Props {
	playingCallId?: string;
	// need to know, because sometimes we can have same media fails in different calls
	call: EngineHistoryCall;
}

const props = defineProps<Props>();
const emit = defineEmits<{
	play: [
		payload: {
			fileId: string;
			callId: string;
		},
	];
	stop: [];
}>();

const playingFileId = ref('');

const isCallsFilePlaying = computed(() => {
	return props.playingCallId === props.call.id;
	// define the file of this call is playing,
	// because we can have same files with same id in different calls (because of calls transfer)
});

const callMediaIcon = computed(() => {
	return isCallsFilePlaying.value ? 'stop' : 'play';
});

const handleFilesSelect = ({
	option,
}: {
	option: {
		id: string;
		name: string;
	};
}) => {
	if (option.id === playingFileId.value && isCallsFilePlaying.value) {
		playingFileId.value = '';
		emit('stop');
	} else {
		playingFileId.value = option.id;
		emit('play', {
			fileId: option.id,
			callId: props.call.id,
		});
	}
};

const changeFileMediaIcon = (id: string) => {
	return id === playingFileId.value && isCallsFilePlaying.value
		? 'stop'
		: 'play';
};
</script>

<style lang="scss" scoped>
.table-media-action__option {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}
</style>

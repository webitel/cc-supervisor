<template>
  <wt-context-menu
    class="table-media-action"
    :options="call.files"
    max-width="400px"
    @click="handleFilesSelect"
  >
    <template #activator>
      <wt-icon-btn
        :icon="callMediaIcon"
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

<script>

export default {
  name: 'AgentCallsMediaAction',
  props: {
    playingCallId: {
      type: String,
    },
    // need to know, because sometimes we can have same media fails in different calls
    call: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    playingFileId: '',
  }),
  computed: {
    isCallsFilePlaying() {
      return this.playingCallId === this.call.id;
      // define the file of this call is playing,
      // because we can have same files with same id in different calls (because of calls transfer)
    },
    callMediaIcon() {
      return this.isCallsFilePlaying ? 'stop': 'play';
    },
  },
  methods: {
    handleFilesSelect({ option }) {
      if (option.id === this.playingFileId  && this.isCallsFilePlaying) {
        this.playingFileId = '';
        this.$emit('stop');
      } else {
        this.playingFileId = option.id;
        this.$emit('play', {
          fileId: option.id,
          callId: this.call.id,
        });
      }
    },
    changeFileMediaIcon(id) {
      return id === this.playingFileId && this.isCallsFilePlaying ? 'stop' : 'play';
    },
  },
};
</script>

<style lang="scss" scoped>
.table-media-action__option {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}
</style>

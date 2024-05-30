<template>
  <wt-context-menu
    class="table-media-action"
    :options="files"
    max-width="400px"
    @click="handleFilesSelect"
  >
    <template v-slot:activator>
      <wt-icon-btn
        :icon="callMediaIcon"
      />
    </template>
    <template v-slot:option="{ text, id }">
      <div class="table-media-action__option">
        <wt-icon
          :icon="changeFileMediaIcon(id)"
        />
        {{ text }}
      </div>
    </template>
  </wt-context-menu>
</template>

<script>

export default {
  name: 'agent-calls-media-action',
  props: {
    playingCallId: {
      type: String,
    },
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
    files() {
      return this.call.files.map(({ name, id }) => ({ text: name, id }));
    },
    callMediaIcon() {
      return this.isCallsFilePlaying ? 'stop': 'play';
    },
  },
  methods: {
    handleFilesSelect({ option }) {
      if (this.playingFileId === option.id && this.isCallsFilePlaying) {
        this.playingFileId = '';
        this.$emit('stop');
      } else {
        this.playingFileId = option.id;
        this.$emit('play', option.id, this.call.id);
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

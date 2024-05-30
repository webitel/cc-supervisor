<template>
  <wt-context-menu
    class="table-media-action"
    :options="files"
    max-width="400px"
    @click="handleFilesSelect"
  >
    <template v-slot:activator>
      <wt-icon-btn
        :icon="isItemsFilePlayingNow ? 'stop': 'play'"
      />
    </template>
    <template v-slot:option="{ text, id }">
      <div class="table-media-action__option">
        <wt-icon
          :icon="id === currentlyPlayingFileId && isItemsFilePlayingNow ? 'stop' : 'play'"
        />
        {{ text }}
      </div>
    </template>
  </wt-context-menu>
</template>

<script>

export default {
  name: 'table-media-action',
  props: {
    currentlyPlayingItemId: {
      type: String,
    },
    item: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    currentlyPlayingFileId: '',
  }),
  computed: {
    isItemsFilePlayingNow() {
      return this.currentlyPlayingItemId === this.item.id;
    },
    files() {
      return this.item.files.map(({ name, id }) => ({ text: name, id }));
    },
  },
  methods: {
    handleFilesSelect({ option }) {
      // if (this.currentlyPlayingOptionId !== option.id || !this.isCallPlayingNow) {
      //   this.currentlyPlayingOptionId = option.id;
      //   this.$emit('play', option.id, this.call.id);
      // }
      if (this.currentlyPlayingFileId === option.id && this.isItemsFilePlayingNow) {
        this.currentlyPlayingFileId = '';
        this.$emit('stop');
      } else {
        this.currentlyPlayingFileId = option.id;
        this.$emit('play', option.id, this.item.id);
      }
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

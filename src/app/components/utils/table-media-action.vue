<!--<template>-->
<!--  <wt-icon-btn-->
<!--    :icon="isAnyFilesPlaying ? 'pause': 'play'"-->
<!--    @click="$emit(isAnyFilesPlaying ? 'stop' : 'play', $event)"-->
<!--  >-->
<!--  </wt-icon-btn>-->
<!--</template>-->

<!--<script>-->

<!--export default {-->
<!--  name: 'table-media-action',-->
<!--  props: {-->
<!--    isAnyFilesPlaying: {-->
<!--      type: Boolean,-->
<!--      default: false,-->
<!--    },-->
<!--  },-->
<!--};-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->

<template>
  <wt-context-menu
    class="table-media-action"
    :options="contextOptions"
    max-width="400px"
    @click="handleOptionSelect"
  >
    <template v-slot:activator>
      {{ callsPlayingId }}
      <wt-icon-btn
        :icon="isAnyPlayingNow ? 'stop': 'play'"
      />
    </template>
    <template v-slot:option="{ text, id }">
      <div class="table-media-action__option">
        <wt-icon
          :icon="id === currentlyPlaying ? 'stop' : 'play'"
        />
        {{ text }}
      </div>
    </template>
  </wt-context-menu>
</template>

<script>

import playMediaMixin from "../../mixins/media/playMediaMixin";

export default {
  name: 'table-media-action',
  mixins: [playMediaMixin],
  props: {
    call: {
      type: Array,
      required: true,
    },
    // callsPlayingId: {
    //   type: String,
    // },
  },
  data: () => ({
    currentlyPlaying: '', //id
  }),
  computed: {
    isAnyPlayingNow() {
      console.log('isAnyPlayingNow: this.callsPlayingId:', this.callsPlayingId)
      return this.callsPlayingId === this.call.id;
      // return this.call.files.some((file) => file.id === this.currentlyPlaying);
    },
    contextOptions() {
      console.log('this.files.length:', this.call.files.length);
      return this.call.files.map(({ name, id }) => ({ text: name, id }));
    },
  },
  methods: {
    handleOptionSelect({ option }) {
      // console.log('index:', index);
      if (this.currentlyPlaying === option.id) {
        this.currentlyPlaying = '';
        // this.isPlayingNow = false;
        // this.$emit('stop');
      } else {
        this.currentlyPlaying = option.id;
        // this.isPlayingNow = true;
        this.$emit('play', option.id, this.call.id);
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

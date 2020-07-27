<template>
  <icon-btn
    v-if="!isAnyFilesPlaying"
    class=""
    :icon="'play'"
  ></icon-btn>
  <icon-btn
    v-else
    class=""
    :icon="'pause'"
  ></icon-btn>
</template>

<script>
  import IconBtn from './icon-btn.vue';

  export default {
    name: 'grid-media-action',
    components: {
      IconBtn,
    },
    props: {
      isAnyFilesPlaying: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>

<style scoped>

</style>

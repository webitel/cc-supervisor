import MediaSelect from '../../components/utils/media-select.vue';

export default {
  components: {
    MediaSelect,
  },
  data: () => ({
    openedMediaIndex: null,
  }),

  computed: {
    isMediaSelectOpened() {
      console.log('this.openedMediaIndex:', this.openedMediaIndex);
      console.log(Number.isInteger(this.openedMediaIndex))
      return Number.isInteger(this.openedMediaIndex);
    },

    mediaFiles() {
      if (this.isMediaSelectOpened) {
        console.log('this.isMediaSelectOpened:', this.isMediaSelectOpened)
        return this.dataList[this.openedMediaIndex]
        .files.filter((file) => file.mimeType.includes('audio')
          || file.mimeType.includes('video'));
      }
      return [];
    },
  },

  methods: {
    isAnyFilesPlaying(files) {
      return files.some((file) => file.id === this.currentlyPlaying);
    },

    closeMedia() {
      console.log('closeMedia:');
      this.openedMediaIndex = null;
    },

    openMedia(index, event) {
      console.log('event:', event, 'this.openedMediaIndex:', this.openedMediaIndex);
      if (this.openedMediaIndex === index) {
        this.openedMediaIndex = null;
      } else {
        this.openedMediaIndex = index;
        this.moveMediaSelect(event);
      }
    },

    moveMediaSelect(event) {
      const mediaSelect = this.$refs['media-select'];
      const table = this.$refs['wt-table'];
      const tableOffset = table.$el.getBoundingClientRect().top;
      const btnOffset = event.target.getBoundingClientRect().top;
      mediaSelect.$el.style.top = `${btnOffset - tableOffset}px`;
    },
  },
};


// import generateMediaURL from './scripts/generateMediaURL';
//
// export default {
//   data: () => ({
//     audioURL: '',
//     currentlyPlaying: '',
//     isPlayingNow: false,
//   }),
//
//   methods: {
//     play(fileId) {
//       console.log('play fileId:', fileId);
//       if (fileId) {
//         this.currentlyPlaying = fileId;
//         this.audioURL = generateMediaURL(fileId);
//       } else {
//         this.closePlayer();
//       }
//     },
//
//     closePlayer() {
//       this.audioURL = '';
//       this.isPlayingNow = false;
//       this.currentlyPlaying = '';
//     },
//   },
// };

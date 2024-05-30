import generateMediaURL from './scripts/generateMediaURL';

export default {
  data: () => ({
    audioURL: '',
    currentlyPlayingCallId: '',
  }),

  methods: {
    play(fileId, callId) {
      if (fileId) {
        console.log('play callId:', callId);
        this.audioURL = generateMediaURL(fileId);
        this.currentlyPlayingCallId = callId;
      } else {
        this.closePlayer();
      }
    },

    closePlayer() {
      this.audioURL = '';
      this.currentlyPlayingCallId = '';
    },
  },
};

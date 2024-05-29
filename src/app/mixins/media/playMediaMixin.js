import generateMediaURL from './scripts/generateMediaURL';

export default {
  data: () => ({
    audioURL: '',
    callsPlayingId: '', // id of call which record (file) is playing now
  }),

  methods: {
    play(fileId, callId) {
      if (fileId) {
        console.log('play callId:', callId);
        this.audioURL = generateMediaURL(fileId);
        this.callsPlayingId = callId;
        // console.log('this.isPlayngNow:', this.isPlayingNow);
      } else {
        this.closePlayer();
      }
    },

    closePlayer() {
      this.audioURL = '';
      this.callsPlayingId = '';
    },
  },
};

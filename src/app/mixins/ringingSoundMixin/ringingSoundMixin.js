import { storeToRefs } from 'pinia'
import { CallActions, CallDirection } from 'webitel-sdk'
import { useCallStore } from '../../../modules/call-window/store/call.js';
import AUDIO_URL from './ringing.mp3'

export default {
  data: () => ({
    ringingAudio: new Audio(AUDIO_URL),
  }),

  created() {
    this.ringingAudio.loop = true

    const callStore = useCallStore()
    const { call } = storeToRefs(callStore)
    this.call = call
  },

  computed: {
    isRinging() {
      return (
        this.call?.value &&
        this.call.value.state === CallActions.Ringing &&
        this.call.value.direction === CallDirection.Inbound
      )
    },
  },

  watch: {
    isRinging(value) {
      if (value) {
        this.ringingAudio.play().catch(() => {})
      } else {
        this.ringingAudio.pause()
        this.ringingAudio.currentTime = 0
      }
    },
  },
}

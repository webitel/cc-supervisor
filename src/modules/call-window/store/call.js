// stores/callStore.js
import { defineStore } from 'pinia'
import { CallActions } from 'webitel-sdk'
import { getCliInstance } from '../../../app/api/callWSConnection';

const callParams = { disableStun: true }

function defaultState() {
  return {
    timer: null,
    call: null,
    agent: {},
    client: {},
    time: 0,
    isOpened: false,
    isVisible: false,
    isRecording: false,
    isHold: false,
    isMuted: false,
    isAttachedToCall: false,

    // EAVESDROP
    isEavesdrop: false,
    isEavesdropOpened: false,
    eavesdropLastDTMF: 0,
  }
}

export const useCallStore = defineStore('call', {
  state: () => defaultState(),

  actions: {
    clearState() {
      Object.assign(this, defaultState())
    },

    setCall(call) {
      this.call = call
    },
    setTime(time) {
      this.time = time
    },
    setAgent(agent) {
      this.agent = agent
    },
    setClient(client) {
      this.client = client
    },
    setVisibility(val) {
      this.isVisible = val
    },
    setIsOpened(val) {
      this.isOpened = val
    },
    setIsEavesdrop(val) {
      this.isEavesdrop = val
    },
    setEavesdropOpened(val) {
      this.isEavesdropOpened = val
    },
    setEavesdropLastDTMF(val) {
      this.eavesdropLastDTMF = val
    },

    startTimer() {
      this.stopTimer()
      this.timer = setInterval(() => {
        this.time += 1
      }, 1000)
    },
    stopTimer() {
      if (this.timer) clearInterval(this.timer)
      this.timer = null
    },

    async subscribeCalls() {
      const client = await getCliInstance()
      await client.subscribeCall(this.callHandler(), null)
    },

    callHandler() {
      return (action, call) => {
        switch (action) {
          case CallActions.Ringing:
            if (this.call) return
            this.setCall(call)
            this.setTime(0)
            this.setAgent({ name: call.displayName })
            if (this.isEavesdrop) {
              const client = {
                name: call.variables?.eavesdrop_name || call.destination,
                number: call.destination,
              }
              this.setEavesdropOpened(true)
              this.setClient(client)
            } else {
              this.setVisibility(true)
            }
            break
          case CallActions.Active:
            if (this.isEavesdrop) {
              const client = call.variables?.eavesdrop_name || ''
              this.setEavesdropOpened(true)
              this.setIsEavesdrop(false)
              this.setClient(client)
            } else {
              this.setIsOpened(true)
            }
            this.startTimer()
            break
          case CallActions.Bridge:
            this.stopTimer()
            this.setCall(call)
            this.setTime(0)
            this.setAgent({ name: call.displayName })
            this.startTimer()
            break
          case CallActions.Hold:
            this.stopTimer()
            break
          case CallActions.Hangup:
            this.stopTimer()
            this.setCall(null)
            this.setTime(0)
            this.setVisibility(false)
            this.setIsOpened(false)
            this.setEavesdropOpened(false)
            this.setEavesdropLastDTMF(0)
            this.clearState()
            break
          case CallActions.PeerStream:
            this.handleStreamAction(call)
            break
        }
      }
    },

    async openWindow() {
      this.setVisibility(true)
    },
    async closeWindow() {
      await this.leaveCall()
      this.stopTimer()
      this.setIsOpened(false)
      this.setVisibility(false)
      this.clearState()
    },

    async call() {
      if (!this.agent) return
      const destination = this.agent.extension?.replace(/[^0-9a-zA-z\+\*#]/g, '')
      const client = await getCliInstance()
      try {
        await client.call({ destination, params: callParams })
      } catch (err) {
        console.error(err)
      }
    },

    async answer() {
      if (!this.call) return
      try {
        await this.call.answer({ useAudio: true })
        this.setCall(this.call)
      } catch (err) {
        console.error(err)
      }
    },

    async leaveCall() {
      if (this.call && this.call.allowHangup) {
        try {
          await this.call.hangup()
        } catch (err) {
          console.error(err)
        }
      }
    },

    async toggleMute() {
      if (!this.call) return
      await this.call.mute(!this.call.muted)
    },

    async toggleHold() {
      if (!this.call) return
      if ((!this.call.isHold && this.call.allowHold) || (this.call.isHold && this.call.allowUnHold)) {
        try {
          await this.call.toggleHold()
        } catch (err) {
          console.error(err)
        }
      }
    },

    async setCallInfo({ agent, client }) {
      this.setAgent(agent)
      this.setClient(client)
    },

    async attachToCall({ id }) {
      const client = await getCliInstance()
      try {
        this.setIsEavesdrop(true)
        await client.eavesdrop({
          id,
          control: true,
          listenA: true,
          listenB: true,
        })
      } catch (err) {
        console.error(err)
      }
    },

    async sendDTMF({ dtmf }) {
      if (!this.call || this.eavesdropLastDTMF === dtmf) return
      try {
        if (!this.call.allowDtmf) return
        await this.call.sendDTMF(dtmf)
        this.setEavesdropLastDTMF(dtmf)
      } catch (err) {
        console.error(err)
      }
    },

    handleStreamAction(call) {
      const audio = new Audio()
      const stream = call.peerStreams.slice(-1).pop()
      if (stream) {
        audio.srcObject = stream
        audio.play()
      }
    },
  },
})

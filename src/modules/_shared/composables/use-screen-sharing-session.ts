import {ref} from "vue";

export function useScreenSharingSession() {
  const selectedAgentToSpyScreen = ref(null);
  const mediaStream = ref(null);
  const screenshotStatus = ref(null);

  const toggleRecordAction = (session) => {
    if (session.recordings) {
      session.stopRecord();
    } else {
      session.startRecord();
    }
  };

  const makeScreenshot = async (session) => {
    try {
      await session.screenshot()
      changeScreenshotStatus('done')
    } catch {
      changeScreenshotStatus('error')
    }
  };

  const changeScreenshotStatus = (status) => {
    screenshotStatus.value = status;
    setTimeout(() => {
      screenshotStatus.value = null;
    }, 300);
  }

  const closeSession = (session) => {
    if (session.recordings) {
      session.stopRecord();
    }
    session.close()
    mediaStream.value = null;
    selectedAgentToSpyScreen.value = null;
  };

  return {
    selectedAgentToSpyScreen,
    mediaStream,
    screenshotStatus,
    toggleRecordAction,
    makeScreenshot,
    closeSession,
  }
}

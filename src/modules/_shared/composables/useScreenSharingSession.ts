import { ref } from 'vue';

import websocketErrorEventHandler from '../websocket/websocketErrorEventHandler';

export function useScreenSharingSession() {
	const selectedAgentToSpyScreen = ref(null);
	const mediaStream = ref(null);
	const screenshotStatus = ref(null);
	const screenshotIsLoading = ref(false);
	const recordIsLoading = ref(false);

	const toggleRecordAction = async (session) => {
		recordIsLoading.value = true;
		try {
			if (session.recordings) {
				await session.stopRecord();
			} else {
				await session.startRecord();
			}
		} catch (err) {
			websocketErrorEventHandler(err);
		} finally {
			recordIsLoading.value = false;
		}
	};

	const makeScreenshot = async (session) => {
		try {
			screenshotIsLoading.value = true;
			await session.screenshot();
			changeScreenshotStatus('done');
		} catch (err) {
			changeScreenshotStatus('error');
			websocketErrorEventHandler(err);
		} finally {
			screenshotIsLoading.value = false;
		}
	};

	const changeScreenshotStatus = (status) => {
		screenshotStatus.value = status;
		setTimeout(() => {
			screenshotStatus.value = null;
			// because end of loading timeout is set to 1000 ms in wt-button component
			// https://webitel.atlassian.net/browse/WTEL-7992?focusedCommentId=704810 and comment why added 1s
		}, 2000);
	};

	const closeSession = (session) => {
		if (session.recordings) {
			session.stopRecord();
		}
		session.close();
		mediaStream.value = null;
		selectedAgentToSpyScreen.value = null;
	};

	return {
		selectedAgentToSpyScreen,
		mediaStream,
		screenshotStatus,
		screenshotIsLoading,
		recordIsLoading,
		toggleRecordAction,
		makeScreenshot,
		closeSession,
	};
}

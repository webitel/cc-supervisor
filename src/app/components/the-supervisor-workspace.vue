<template>
	<main
		class="the-supervisor-workspace"
	>
		<app-header />
		<call-window />
		<call-window-eavesdrop />
		<wt-notifications-bar />
		<div class="the-supervisor-workspace__content">
			<router-view />
		</div>
	</main>
</template>

<script setup>
import { WtApplication } from "@webitel/ui-sdk/enums";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import AppHeader from "../../modules/_reusable/app-header/components/app-header.vue";

import CallWindow from "../../modules/call-window/components/call-window-conversation.vue";
import CallWindowEavesdrop from "../../modules/call-window/components/call-window-eavesdrop.vue";

</script>

<style
	scoped
>
.the-supervisor-workspace {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
}

.the-supervisor-workspace__content {
	flex-grow: 1;
	min-height: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
}
</style>

<template>
  <section class="table-section">
    <header class="table-title">
      <h3 class="table-title__title">
        {{ t('pages.card.calls.logs') }}
      </h3>
      <wt-action-bar
        :include="[
          IconAction.FILTERS,
          IconAction.REFRESH,
          IconAction.COLUMNS
        ]"
        @click:refresh="loadDataList"
      >
        <template #columns>
          <wt-table-column-select
            :headers="headers"
            @change="updateShownHeaders"
          />
        </template>
        <template #filters>
          <wt-badge :hidden="!hasFilters">
            <wt-icon-action
              action="filters"
              @click="emit('toggle-filter')"
            />
          </wt-badge>
        </template>
      </wt-action-bar>
    </header>

    <wt-empty
      v-if="showEmpty"
      :image="imageEmpty"
      :text="textEmpty"
    />
    <wt-loader v-show="isLoading" />

    <div
      v-if="!showEmpty && dataList?.length"
      v-show="!isLoading"
      class="table-section__table-wrapper"
    >
      <wt-table
        :headers="headers"
        :data="dataList"
        :selectable="false"
        :grid-actions="false"
        sortable
        resizable-columns
        reorderable-columns
        @sort="updateSort"
        @column-resize="columnResize"
        @column-reorder="columnReorder"
      >
        <template #direction="{ item }">
          <table-direction :item="item" />
        </template>
        <template #user="{ item }">
          <div v-if="item.user">
            {{ item.user.name }}
          </div>
        </template>
        <template #from="{ item }">
          <div v-if="item.from">
            {{ item.from.name }}
          </div>
        </template>
        <template #to="{ item }">
          <div v-if="item.to">
            {{ item.to.name }}
          </div>
        </template>
        <template #team="{ item }">
          <div v-if="item.team">
            {{ item.team.name }}
          </div>
        </template>
        <template #queue="{ item }">
          <div v-if="item.queue">
            {{ item.queue.name }}
          </div>
        </template>
        <template #gateway="{ item }">
          <div v-if="item.gateway">
            {{ item.gateway.name }}
          </div>
        </template>
        <template #ratedBy="{ item }">
          <div v-if="item.ratedBy">
            {{ item.ratedBy.name }}
          </div>
        </template>
        <template #member="{ item }">
          <div v-if="item.member">
            {{ item.member.name }}
          </div>
        </template>
        <template #screencast="{ item }">
          <wt-screen-recordings-action
            :files="item.files"
            @set-video="setScreenRecording"
          />
        </template>
        <template #actions="{ item }">
          <wt-call-media-action
            :files="item.files"
            :playing-file-id="playingFileId"
            @play="play"
            @stop="closePlayer"
          />
          <wt-icon-btn
            v-tooltip="t('reusable.openInHistory')"
            icon="link"
            @click="openInHistory(item)"
          />
        </template>
      </wt-table>

      <wt-pagination
        :next="next"
        :prev="page > 1"
        :size="size"
        debounce
        @change="updateSize"
        @next="updatePage(page + 1)"
        @prev="updatePage(page - 1)"
      />

      <wt-player
        v-if="audioSrc"
        :src="audioSrc"
        @close="closePlayer"
      />
    </div>

    <wt-vidstack-player
      v-if="videoSrc"
      closable
      :size="ComponentSize.MD"
      :src="videoSrc"
      :title="videoSrc.name"
      @close="closePlayer"
    />

    <wt-vidstack-player
      v-if="currentScreenRecording"
      closable
      :size="ComponentSize.MD"
      :src="currentScreenRecording.video"
      :title="currentScreenRecording.text"
      @close="closeScreenRecording"
    />
  </section>
</template>

<script lang="ts" setup>
import { getCallMediaUrl, getMediaUrl } from '@webitel/api-services/api';
import { EngineCallFileType } from '@webitel/api-services/gen/models';
import { FilterOption } from '@webitel/ui-datalist/filters';
import {
	WtCallMediaAction,
	WtEmpty,
	WtPlayer,
	WtScreenRecordingsAction,
	WtVidstackPlayer,
} from '@webitel/ui-sdk/components';
import { ComponentSize, IconAction } from '@webitel/ui-sdk/enums';
import { getEndOfDay, getStartOfDay } from '@webitel/ui-sdk/scripts';
import { useTableEmpty } from '@webitel/ui-sdk/src/modules/TableComponentModule/composables/useTableEmpty';
import { storeToRefs } from 'pinia';
import { computed, onUnmounted, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';

import {
	agentCallsUserId,
	useAgentCallsTableStore,
} from '../stores/datalist/agent-calls';
import TableDirection from './_internals/table-templates/table-direction.vue';

const emit = defineEmits<{
	'toggle-filter': [];
}>();

const { t } = useI18n();
const store = useStore();

const audioSrc = ref(null);
const videoSrc = ref(null);
const playingFileId = ref('');
const currentScreenRecording = ref(null);

const tableStore = useAgentCallsTableStore();

const {
	dataList,
	error,
	isLoading,
	page,
	size,
	next,
	headers,
	filtersManager,
} = storeToRefs(tableStore);

const hasFilters = computed(
	() => filtersManager.value.getFiltersList()?.length,
);

const {
	initialize,
	loadDataList,
	updatePage,
	updateSize,
	updateSort,
	updateShownHeaders,
	columnResize,
	columnReorder,
	hasFilter,
	addFilter,
} = tableStore;

// The list endpoint 400s unless created_at (or q) is present, so from/to need
// a default the first time the table loads — same as the legacy from/to
// filters, which always defaulted to today.
const initializeDefaultFilters = () => {
	if (!hasFilter(FilterOption.CreatedAtFrom)) {
		addFilter({
			name: FilterOption.CreatedAtFrom,
			value: getStartOfDay(),
		});
	}
	if (!hasFilter(FilterOption.CreatedAtTo)) {
		addFilter({
			name: FilterOption.CreatedAtTo,
			value: getEndOfDay(),
		});
	}
};

const {
	showEmpty,
	image: imageEmpty,
	text: textEmpty,
} = useTableEmpty({
	dataList,
	error,
	filters: computed(() => filtersManager.value.getAllValues()),
	isLoading,
});

const userId = computed(() => store.state.agents.card.agent.user?.id);

let unwatchUserId: (() => void) | undefined;
unwatchUserId = watch(
	userId,
	(newUserId) => {
		if (!newUserId) return;
		agentCallsUserId.value = newUserId;
		initializeDefaultFilters();
		initialize();
		unwatchUserId?.();
	},
	{
		immediate: true,
	},
);

const openInHistory = (item) => {
	const historyIdLink = `${import.meta.env.VITE_HISTORY_URL}/view/call_view/${item.id}`;
	window.open(historyIdLink, '_blank');
};

const play = (file) => {
	if (!file.id) return closePlayer();
	playingFileId.value = file.id;
	if (file.type === EngineCallFileType.FileTypeAudio) {
		videoSrc.value = null;
		audioSrc.value = {
			src: getCallMediaUrl(file.id),
			type: file.mimeType,
		};
	} else {
		audioSrc.value = null;
		videoSrc.value = {
			src: getCallMediaUrl(file.id),
			name: file.text,
			type: file.mimeType,
		};
	}
};

const closePlayer = () => {
	audioSrc.value = null;
	videoSrc.value = null;
	playingFileId.value = '';
};

const setScreenRecording = (data) => {
	currentScreenRecording.value = {
		...data,
		video: getMediaUrl(data.id),
	};
	closePlayer();
};

const closeScreenRecording = () => {
	currentScreenRecording.value = null;
};

onUnmounted(() => {
	agentCallsUserId.value = null;
});
</script>

<style
  lang="scss"
  scoped
>
.wt-action-bar {
  margin-left: auto;
}

.wt-player {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 45px; /* above pagination, na oko */
}
</style>

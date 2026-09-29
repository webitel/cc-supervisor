<template>
  <section class="table-section">
    <skill-popup @saved="loadDataList" />

    <header class="agent-skills-tab__title table-title">
      <h3 class="table-title__title">
        {{ t('pages.card.skills.title') }}
      </h3>
      <wt-action-bar
        :include="[
          IconAction.ADD,
          IconAction.REFRESH,
          IconAction.COLUMNS
        ]"
        :disabled:add="disableUserInput || !hasSkillReadAccess"
        @click:add="setSkillId('new')"
        @click:refresh="loadDataList"
      >
        <template #columns>
          <wt-table-column-select
            :headers="headers"
            @change="updateShownHeaders"
          />
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
        sortable
        resizable-columns
        reorderable-columns
        @sort="updateSort"
        @column-resize="columnResize"
        @column-reorder="columnReorder"
      >
        <template #skill="{ item }">
          <div v-if="item.skill">
            {{ item.skill.name }}
          </div>
        </template>
        <template #enabled="{ item, index }">
          <wt-switcher
            :disabled="disableUserInput"
            :model-value="item.enabled"
            @update:model-value="patchItemProperty({ index, path: 'enabled', value: $event })"
          />
        </template>
        <template #actions="{ item, index }">
          <wt-icon-action
            action="edit"
            :disabled="disableUserInput || !hasSkillReadAccess"
            @click="setSkillId(item.id)"
          />
          <wt-icon-action
            action="delete"
            :disabled="disableUserInput"
            @click="deleteEls([dataList[index]])"
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
    </div>
  </section>
</template>

<script lang="ts" setup>
import { IconAction, WtObject } from '@webitel/ui-sdk/enums';
import { useTableEmpty } from '@webitel/ui-sdk/src/modules/TableComponentModule/composables/useTableEmpty';
import { storeToRefs } from 'pinia';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';

import { useUserAccessControl } from '../../../../../../../app/composables/useUserAccessControl';
import { useAgentSkillsTableStore } from '../stores/datalist/agent-skills';
import SkillPopup from './agent-skill-popup.vue';

const { t } = useI18n();
const route = useRoute();
const router = useRouter();

const { disableUserInput } = useUserAccessControl();
const { hasReadAccess: hasSkillReadAccess } = useUserAccessControl(
	WtObject.Skill,
);

const tableStore = useAgentSkillsTableStore();

const { dataList, error, isLoading, page, size, next, headers } =
	storeToRefs(tableStore);

const {
	initialize,
	loadDataList,
	updatePage,
	updateSize,
	updateSort,
	updateShownHeaders,
	columnResize,
	columnReorder,
	patchItemProperty,
	deleteEls,
} = tableStore;

const {
	showEmpty,
	image: imageEmpty,
	text: textEmpty,
} = useTableEmpty({
	dataList,
	error,
	isLoading,
});

const setSkillId = (id: string) => {
	router.push({
		params: {
			skillId: id,
		},
	});
};

initialize({
	parentId: route.params.id as string,
});
</script>

<style
  lang="scss"
  scoped
>
.agent-skills-tab__title {
  padding: var(--spacing-xs);
  margin: 0;
}

.wt-action-bar {
  margin-left: auto;
}
</style>

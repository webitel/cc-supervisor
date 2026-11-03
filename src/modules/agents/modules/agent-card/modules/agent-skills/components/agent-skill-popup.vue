<template>
  <wt-popup
    v-bind="$attrs"
    :shown="!!skillId"
    size="sm"
    overflow
    @close="close"
  >
    <template #title>
      {{ popupTitle }}
    </template>
    <template #main>
      <form
        class="agent-skill-popup__form"
        @submit.prevent="save"
      >
        <wt-single-select
          v-model="modelValue.skill"
          :label="t('pages.card.skills.skills', 1)"
          :regle-validation="validationFields?.skill"
          :search-method="loadSkillsOptions"
          :show-clear="false"
          required
        />
        <wt-input-number
          v-model="modelValue.capacity"
          :label="t('pages.card.skills.capacity')"
          :regle-validation="validationFields?.capacity"
          required
        />
      </form>
    </template>
    <template #actions>
      <wt-button
        :disabled="hasValidationErrors"
        @click="save"
      >{{ saveActionText }}
      </wt-button>
      <wt-button
        color="secondary"
        @click="close"
      >{{ t('reusable.close') }}
      </wt-button>
    </template>
  </wt-popup>
</template>

<script lang="ts" setup>
import { SkillsAPI } from '@webitel/api-services/api';
import type { EngineAgentSkill } from '@webitel/api-services/gen/models';
import { useNestedCardComponent } from '@webitel/ui-datalist/card';
import { useClose } from '@webitel/ui-sdk/composables';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

import AgentTabsPathName from '../../../../../../../app/router/_internals/AgentTabsPathName.enum';
import { useAgentSkillCardStore } from '../stores/card/agentSkillCardStore';

const emit = defineEmits<{
	saved: [];
}>();

const { t } = useI18n();
const route = useRoute();

const {
	modelValue,
	validationFields,
	isNew,
	hasValidationErrors,
	save: saveItem,
} = useNestedCardComponent<EngineAgentSkill>({
	useCardStore: useAgentSkillCardStore,
	routeParamName: 'skillId',
	parentId: route.params.id as string,
});

const skillId = computed(() => route.params.skillId);

const popupTitle = computed(() =>
	isNew.value
		? t('pages.card.skills.addSkill')
		: t('pages.card.skills.editSkill'),
);

const saveActionText = computed(() =>
	isNew.value ? t('reusable.add') : t('reusable.save'),
);

const { close } = useClose(AgentTabsPathName.SKILLS);

const save = async () => {
	await saveItem();
	close();
	emit('saved');
};

const loadSkillsOptions = (params: unknown) => SkillsAPI.getLookup(params);
</script>

<style scoped>
.agent-skill-popup__form {
	display: flex;
	flex-direction: column;
	gap: var(--spacing-xs);
}
</style>

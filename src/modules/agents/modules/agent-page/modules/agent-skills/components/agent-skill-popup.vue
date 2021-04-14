<template>
  <wt-popup min-width="480" overflow @close="close">
    <template slot="title">
      {{ $tc('pages.agentPage.skills.skills', 1) }}
    </template>
    <template slot="main">
      <form>
        <wt-select
          :value="itemInstance.skill"
          :v="$v.itemInstance.skill"
          :label="$tc('pages.agentPage.skills.skills', 1)"
          :search="loadDropdownOptionsList"
          :internal-search="false"
          :clearable="false"
          required
          @input="setItemProp({ prop: 'skill', value: $event })"
        ></wt-select>
        <wt-input
          :value="itemInstance.capacity"
          :v="$v.itemInstance.capacity"
          :label="$t('pages.agentPage.skills.capacity')"
          :number-min="0"
          :number-max="100"
          type="number"
          required
          @input="setItemProp({ prop: 'capacity', value: +$event })"
        ></wt-input>
      </form>
    </template>
    <template slot="actions">
      <wt-button
        :disabled="computeDisabled"
        @click="save"
      >{{ $t('reusable.add') }}
      </wt-button>
      <wt-button
        color="secondary"
        @click="close"
      >{{ $t('reusable.close') }}
      </wt-button>
    </template>
  </wt-popup>
</template>

<script>
import {
 maxValue, minValue, numeric, required,
} from 'vuelidate/lib/validators';
import { getSkillsList } from '../api/skills';
import nestedObjectMixin
  from '../../../../../../../app/mixins/client/mixins/objectPagesMixins/openedObjectMixin/nestedObjectMixin';

export default {
  name: 'agent-skill-popup',
  mixins: [nestedObjectMixin],
  props: {
    namespace: {
      type: String,
      required: true,
    },
  },

  validations: {
    itemInstance: {
      skill: { required },
      capacity: {
        numeric,
        minValue: minValue(0),
        maxValue: maxValue(100),
        required,
      },
    },
  },

  methods: {
    async loadDropdownOptionsList(search) {
      const response = await getSkillsList({ search });
      return response.items.map((item) => ({
        name: item.name,
        id: item.id,
      }));
    },
  },
};
</script>

<style scoped>

</style>

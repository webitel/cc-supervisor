<template>
  <wt-popup
    v-bind="$attrs"
    :shown="!!skillId"
    size="sm"
    overflow
    @close="close"
    >
    <template v-slot:title>
      {{ $tc('pages.card.skills.skills', 1) }}
    </template>
    <template v-slot:main>
      <form>
        <wt-select
          :value="itemInstance.skill"
          :v="v$.itemInstance.skill"
          :label="$tc('pages.card.skills.skills', 1)"
          :search-method="loadDropdownOptionsList"
          :clearable="false"
          required
          @input="setItemProp({ prop: 'skill', value: $event })"
        ></wt-select>
        <wt-input
          :value="itemInstance.capacity"
          :v="v$.itemInstance.capacity"
          :label="$t('pages.card.skills.capacity')"
          :number-min="0"
          :number-max="100"
          type="number"
          required
          @input="setItemProp({ prop: 'capacity', value: +$event })"
        ></wt-input>
      </form>
    </template>
    <template v-slot:actions>
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
import { useVuelidate } from '@vuelidate/core';
import {
 maxValue, minValue, numeric, required,
} from '@vuelidate/validators';
import { mapActions } from "vuex";
import SkillsAPI from '../api/skills';
import nestedObjectMixin
  from '../../../../../../../packages/client/mixins/objectPagesMixins/openedObjectMixin/nestedObjectMixin';

export default {
  name: 'agent-skill-popup',
  mixins: [nestedObjectMixin],
  props: {
    namespace: {
      type: String,
      required: true,
    },
  },
  setup: () => ({
    v$: useVuelidate({$stopPropagation: true}),
  }),
  computed: {
    skillId() {
      return this.$route.params.skillId;
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
    ...mapActions({
      setId(dispatch, payload) {
        return dispatch(`${this.namespace}/SET_ITEM_ID`, payload);
      },
    }),
    loadDropdownOptionsList: SkillsAPI.getLookup,
  },

  watch: {
    skillId: {
       handler(id) {
        this.setId(id);
        this.loadItem();
      }, immediate: true,
    },
  },
};
</script>

<style scoped>

</style>

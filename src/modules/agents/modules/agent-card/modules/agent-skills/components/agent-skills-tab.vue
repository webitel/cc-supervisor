<template>
  <section class="table-section table-section--tab-table">
    <skill-popup
      :namespace="namespace"
      @close="closePopup"
    ></skill-popup>
    <wt-table-actions
      class="table-section__actions-wrapper"
      :icons="['refresh']"
      @input="tableActionsHandler"
    >
      <filter-fields
        :headers="headers"
        entity="agentSkills"
        @change="setHeaders"
      ></filter-fields>
      <wt-icon-btn icon="plus" @click="setSkillId('new')"></wt-icon-btn>
    </wt-table-actions>
    <wt-loader v-show="isLoading"></wt-loader>
    <div v-show="!isLoading" class="table-loading-wrapper">
      <wt-table
        ref="wt-table"
        :headers="headers"
        :data="dataList"
        :selectable="false"
        sortable
        @sort="sort"
      >
        <template #skill="{ item }">
          <div v-if="item.skill">
            {{ item.skill.name }}
          </div>
        </template>
        <template #enabled="{ item, index }">
          <wt-switcher
            :model-value="item.enabled"
            @update:model-value="patchItemProperty({ item, index, value: $event, prop: 'enabled' })"
          ></wt-switcher>
        </template>
        <template #actions="{ item, index }">
          <wt-icon-action
            class="table-action"
            action="edit"
            @click="setSkillId(item.id)"
          ></wt-icon-action>
          <wt-icon-action
            class="table-action"
            action="delete"
            @click="removeItem(index)"
          ></wt-icon-action>
        </template>
      </wt-table>
      <filter-pagination :is-next="isNext"/>
    </div>
  </section>
</template>

<script>
import sortFilterMixin from '@webitel/ui-sdk/src/mixins/dataFilterMixins/sortFilterMixin';
import getNamespacedState from '@webitel/ui-sdk/src/store/helpers/getNamespacedState';
import { mapActions, mapState } from 'vuex';

import tablePageMixin from '../../../../../../../app/mixins/supervisor-workspace/tablePageMixin';
import FilterPagination from '../../../../../../_shared/filters/components/filter-pagination.vue';
import FilterFields from '../../../../../../_shared/filters/components/filter-table-fields.vue';
import SkillPopup from './agent-skill-popup.vue';

export default {
  name: 'AgentSkillsTab',
  components: {
    FilterFields,
    FilterPagination,
    SkillPopup,
  },
  mixins: [
    tablePageMixin,
    sortFilterMixin,
  ],
  props: {
    namespace: {
      type: String,
      required: true,
    },
  },
  computed: {
   ...mapState({
     parentId(state) {
       return getNamespacedState(state, this.namespace).parentId;
     },
   }),
  },
  methods: {
    ...mapActions({
      setParentId(dispatch, payload) {
        return dispatch(`${this.namespace}/SET_PARENT_ITEM_ID`, payload);
      },
      setId(dispatch, payload) {
        return dispatch(`${this.namespace}/SET_ITEM_ID`, payload);
      },
      patchItemProperty(dispatch, payload) {
        return dispatch(`${this.namespace}/PATCH_ITEM_PROPERTY`, payload);
      },
      removeItem(dispatch, payload) {
        return dispatch(`${this.namespace}/REMOVE_ITEM`, payload);
      },
    }),
    loadList() {
      if (!this.$route.params.id) return;
      this.setParentId(this.$route.params.id);
      return tablePageMixin.methods.loadList.call(this);
    },
    setSkillId(id) {
      this.setId(id);
      return this.$router.push({
        params: { skillId: id },
      });
    },
    closePopup() {
      return this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

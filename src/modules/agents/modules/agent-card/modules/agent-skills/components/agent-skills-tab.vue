<template>
  <section class="table-wrapper table-wrapper--tab-table">
    <skill-popup
      v-if="isSkillPopup"
      :namespace="namespace"
      @close="closePopup"
    ></skill-popup>
    <wt-table-actions
      class="table-wrapper__actions-wrapper"
      :icons="['refresh']"
      @input="tableActionsHandler"
    >
      <filter-fields
        :headers="headers"
        entity="agentSkills"
        @change="setHeaders"
      ></filter-fields>
      <wt-icon-action
        action="add"
        @click="addItem"
      />
    </wt-table-actions>
    <wt-loader v-show="isLoading"></wt-loader>
    <div class="table-loading-wrapper" v-show="!isLoading">
      <wt-table
        ref="wt-table"
        :headers="headers"
        :data="dataList"
        :selectable="false"
        sortable
        @sort="sort"
      >
        <template v-slot:skill="{ item }">
          <div v-if="item.skill">
            {{ item.skill.name }}
          </div>
        </template>
        <template v-slot:enabled="{ item, index }">
          <wt-switcher
            :value="item.enabled"
            @change="patchItemProperty({ item, index, value: $event, prop: 'enabled' })"
          ></wt-switcher>
        </template>
        <template v-slot:actions="{ item, index }">
          <wt-icon-action
            class="table-action"
            action="edit"
            @click="editItem(item)"
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
import getNamespacedState from '@webitel/ui-sdk/src/store/helpers/getNamespacedState';
import { mapActions, mapState } from 'vuex';
import sortFilterMixin from '@webitel/ui-sdk/src/mixins/dataFilterMixins/sortFilterMixin';
import tablePageMixin from '../../../../../../../app/mixins/supervisor-workspace/tablePageMixin';
import FilterPagination from '../../../../../../_shared/filters/components/filter-pagination.vue';
import FilterFields from '../../../../../../_shared/filters/components/filter-table-fields.vue';
import SkillPopup from './agent-skill-popup.vue';

export default {
  name: 'agent-skills-tab',
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
  data: () => ({
    isSkillPopup: false,
  }),
  computed: {
   ...mapState({
     parentId(state) {
       return getNamespacedState(state, this.namespace).parentId;
     },
   }),
   skillId() {
    return this.$route.params.skillId;
   }
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
    edit(id) {
      this.setId(id);
      this.openPopup();
    },
    openPopup() {
      this.isSkillPopup = true;
    },
    closePopup() {
      this.deleteSkillIdParam();
      this.isSkillPopup = false;
    },
    addItem() {
      this.openPopup();
      return this.$router.push({
        ...this.$route,
        params: { skillId: 'new' },
      });
    },
    editItem({ id }) {
      this.edit(id);
      this.$router.push({
        ...this.$route,
        params: { skillId: id },
      });
    },
    deleteSkillIdParam() {
      const params = { ...this.$route.params };
      delete params.skillId;

      return this.$router.push({
        ...this.$route,
        params,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

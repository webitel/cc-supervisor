<template>
  <article class="table-wrapper agent-skills">
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
        v-model="headers"
        entity="agentSkills"
      ></filter-fields>
      <wt-icon-btn icon="plus" @click="openPopup"></wt-icon-btn>
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
        <template slot="skill" slot-scope="{ item }">
          <div v-if="item.skill">
            {{ item.skill.name }}
          </div>
        </template>
        <template slot="enabled" slot-scope="{ item, index }">
          <wt-switcher
            :value="item.enabled"
            @change="patchItemProperty({ item, index, value: $event, prop: 'enabled' })"
          ></wt-switcher>
        </template>
        <template slot="actions" slot-scope="{ item, index }">
          <edit-action
            @click="edit(item)"
          ></edit-action>
          <delete-action
            @click="remove(index)"
          ></delete-action>
        </template>
      </wt-table>
      <filter-pagination :is-next="isNext"/>
    </div>
  </article>
</template>

<script>
import { mapActions } from 'vuex';
import sortFilterMixin from '@webitel/ui-sdk/src/mixins/dataFilterMixins/sortFilterMixin';
import tablePageMixin from '../../../../../../../app/mixins/supervisor-workspace/tablePageMixin';
import FilterPagination from '../../../../../../_shared/filters/components/filter-pagination.vue';
import FilterFields from '../../../../../../_shared/filters/components/filter-table-fields.vue';
import SkillPopup from './agent-skill-popup.vue';

import DeleteAction from '../../../../../../../../../client/src/app/components/utils/table-cell/default-table-actions/delete-action.vue';
import EditAction from '../../../../../../../../../client/src/app/components/utils/table-cell/default-table-actions/edit-action.vue';

export default {
  name: 'agent-skills-tab',
  components: {
    FilterFields,
    FilterPagination,
    SkillPopup,
    DeleteAction,
    EditAction,
  },
  mixins: [
    tablePageMixin,
    sortFilterMixin,
  ],
  props: {
    namespace: {
      type: String,
    },
  },
  data: () => ({
    isSkillPopup: false,
  }),
  created() {
    this.setParentId(this.$route.params.id);
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
      const agentId = this.$route.params.id;
      const { query } = this.$route;
      return this.loadDataList({
        ...query,
        agentId,
      });
    },
    edit(item) {
      this.setId(item.id);
      this.openPopup();
    },
    async remove(index) {
      await this.removeItem(index);
      this.loadList();
    },
    openPopup() {
      this.isSkillPopup = true;
    },
    closePopup() {
      this.isSkillPopup = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.agent-skills {
    position: relative;

  .table-actions-wrapper {
    align-self: flex-end;
    display: flex;
    align-items: center;
    margin: var(--component-spacing) 0;
  }

  .wt-loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .table-loading-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    min-height: 0;
  }
}
</style>

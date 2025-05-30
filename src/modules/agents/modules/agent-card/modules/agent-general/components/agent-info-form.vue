<template>
  <form class="agent-info-form">
    <wt-select
      :value="agent.team"
      :label="$tc('objects.team')"
      :search-method="searchTeams"
      @input="setItemProp({ prop: 'team', value: $event })"
    ></wt-select>
    <wt-select
      v-if="!isSupervisor"
      :value="agent.supervisor"
      :label="$tc('objects.supervisor')"
      :search-method="searchSupervisors"
      :close-on-select="false"
      multiple
      @input="setItemProp({ prop: 'supervisor', value: $event })"
    ></wt-select>
    <wt-select
      :value="agent.auditor"
      :label="$tc('objects.auditor')"
      :search-method="searchAuditors"
      :close-on-select="false"
      multiple
      @input="setItemProp({ prop: 'auditor', value: $event })"
    ></wt-select>
    <wt-select
      :value="agent.region"
      :label="$tc('objects.region')"
      :search-method="searchRegions"
      @input="setItemProp({ prop: 'region', value: $event })"
    ></wt-select>
    <wt-input
      :value="agent.progressiveCount"
      :label="$t('pages.card.progressiveCount')"
      type="number"
      @input="setItemProp({ prop: 'progressiveCount', value: +$event })"
    ></wt-input>
    <wt-input
      :value="agent.chatCount"
      :label="$t('pages.card.chatCount')"
      type="number"
      @input="setItemProp({ prop: 'chatCount', value: +$event })"
    ></wt-input>
    <wt-button
      :disabled="disabledSave"
      @click="save"
    >{{ $t('defaults.save') }}</wt-button>
  </form>
</template>

<script>
import getNamespacedState from '@webitel/ui-sdk/src/store/helpers/getNamespacedState';
import { mapActions,mapState } from 'vuex';

import regionLookupApi from '../../../../../../_shared/lookups/api/regionLookupApi';
import supervisorLookupApi from '../../../../../../_shared/lookups/api/supervisorLookupApi';
import teamLookupApi from '../../../../../../_shared/lookups/api/teamLookupApi';
import userLookupApi from '../../../../../../_shared/lookups/api/userLookupApi';

export default {
  name: 'AgentInfoForm',
  props: {
    namespace: {
      type: String,
      required: true,
    },
  },
  created() {
    this.loadAgent();
  },
  computed: {
    ...mapState({
      agent(state) {
        return getNamespacedState(state, this.namespace).agent;
      },
    }),
    isSupervisor() {
      return this.agent?.isSupervisor;
    },
    disabledSave() {
      return !this.agent._dirty;
    },
  },
  methods: {
    ...mapActions({
      loadAgent(dispatch, payload) {
        return dispatch(`${this.namespace}/LOAD_AGENT`, payload);
      },
      setItemProp(dispatch, payload) {
        return dispatch(`${this.namespace}/SET_AGENT_PROPERTY`, payload);
      },
      save(dispatch, payload) {
        return dispatch(`${this.namespace}/UPDATE_AGENT`, payload);
      },
    }),
    searchTeams: teamLookupApi,
    searchSupervisors: supervisorLookupApi,
    searchAuditors: userLookupApi,
    searchRegions: regionLookupApi,
  },
};
</script>

<style lang="scss" scoped>
@use '@webitel/ui-sdk/src/css/main';

.agent-info-form {
  @extend %wt-scrollbar;
  padding: var(--spacing-sm);
  overflow: auto;

  .wt-select, .wt-input {
    margin-bottom: var(--spacing-sm);
  }

  .wt-button {
    display: block;
    margin-left: auto;
  }
}
</style>

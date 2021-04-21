<template>
  <form class="agent-info-form">
    <wt-select
      :value="agent.team"
      :label="$tc('objects.team')"
      :search="searchTeams"
      :internal-search="false"
      @input="setItemProp({ prop: 'team', value: $event })"
    ></wt-select>
    <wt-select
      v-if="!isSupervisor"
      :value="agent.supervisor"
      :label="$tc('objects.supervisor')"
      :search="searchSupervisors"
      :internal-search="false"
      @input="setItemProp({ prop: 'supervisor', value: $event })"
    ></wt-select>
    <wt-select
      :value="agent.auditor"
      :label="$tc('objects.auditor')"
      :search="searchAuditors"
      :internal-search="false"
      @input="setItemProp({ prop: 'auditor', value: $event })"
    ></wt-select>
    <wt-select
      :value="agent.region"
      :label="$tc('objects.region')"
      :search="searchRegions"
      :internal-search="false"
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
    >{{ $t('reusable.save') }}</wt-button>
  </form>
</template>

<script>
import getNamespacedState from '@webitel/ui-sdk/src/store/helpers/getNamespacedState';
import { mapState, mapActions } from 'vuex';
import teamLookupApi from '../../../../../../_shared/lookups/api/teamLookupApi';
import supervisorLookupApi from '../../../../../../_shared/lookups/api/supervisorLookupApi';
import userLookupApi from '../../../../../../_shared/lookups/api/userLookupApi';
import regionLookupApi from '../../../../../../_shared/lookups/api/regionLookupApi';

export default {
  name: 'agent-info-form',
  props: {
    namespace: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState({
      agent(state) {
        return getNamespacedState(state, this.namespace).agent;
      },
    }),
    ...mapState('userinfo', {
      agentUserinfo: (state) => state.agent,
    }),
    isSupervisor() {
      return this.agentUserinfo?.isSupervisor;
    },
    disabledSave() {
      return !this.agent._dirty;
    },
  },
  methods: {
    ...mapActions({
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
.agent-info-form {
  .wt-select, .wt-input {
    margin-bottom: var(--component-spacing);
  }

  .wt-button {
    display: block;
    margin-left: auto;
  }
}
</style>

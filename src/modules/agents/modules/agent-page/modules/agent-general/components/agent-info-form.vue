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
      :label="$t('pages.agentPage.progressiveCount')"
      type="number"
      @input="setItemProp({ prop: 'progressiveCount', value: +$event })"
    ></wt-input>
    <wt-input
      :value="agent.chatCount"
      :label="$t('pages.agentPage.chatCount')"
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
import teamFilter from '../../../../../../_shared/filters/api/teamFilter';
import supervisorFilter from '../../../../../../_shared/filters/api/supervisorFilter';
import userFilter from '../../../../../../active-calls/modules/filters/api/userFilter';
import regionFilter from '../../../../filters/api/regionFilter';

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
    searchTeams: teamFilter.getList,
    searchSupervisors: supervisorFilter.getList,
    searchAuditors: userFilter.getList,
    searchRegions: regionFilter.getList,
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

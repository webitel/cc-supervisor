<template>
  <wt-popup class="pause-cause-popup" min-width="480" @close="close">
    <template slot="title">
      {{ $t('packages.agentStatusSelect.pauseCausePopup.title') }}
    </template>
    <template slot="main">
      <wt-loader v-show="!isLoaded"/>
      <form v-show="isLoaded" @submit.prevent="setPause">
        <wt-radio
          class="pause-cause-popup__option"
          v-for="(option, key) of pauseCauses"
          :selected="selected"
          :value="option"
          :label="option"
          :key="key"
          @input="select(option)"
        ></wt-radio>
      </form>
    </template>
    <template slot="actions">
      <wt-button
        :disabled="!selected"
        @click="setPause"
      >{{ $t('reusable.ok') }}
      </wt-button>
      <wt-button
        color="secondary"
        @click="close"
      >{{ $t('reusable.cancel') }}
      </wt-button>
    </template>
  </wt-popup>
</template>

<script>
import PauseCauseAPI from '../../api/pause-cause';

export default {
  name: 'pause-cause-popup',
  data: () => ({
    selected: '',
    pauseCauses: [],
    isLoaded: false,
  }),
  created() {
    this.loadPauseCauses();
  },
  computed: {
  },

  methods: {
    async loadPauseCauses() {
      this.isLoaded = false;
      try {
        const response = await PauseCauseAPI.getList();
        this.pauseCauses = response.items.map((item) => item.name);
      } catch {}
      this.isLoaded = true;
    },
    select(option) {
      this.selected = option;
    },
    setPause() {
      this.$emit('change', this.selected);
      this.close();
    },
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss" scoped>
.pause-cause-popup__option:not(:last-child) {
  margin-bottom: var(--component-spacing);
}
</style>

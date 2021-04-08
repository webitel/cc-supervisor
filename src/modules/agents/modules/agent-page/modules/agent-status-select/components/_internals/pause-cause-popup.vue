<template>
  <wt-popup class="pause-cause-popup" min-width="480" @close="close">
    <template slot="title">
      {{ $t('packages.agentStatusSelect.pauseCausePopup.title') }}
    </template>
    <template slot="main">
      <form @submit.prevent="setPause">
        <ul>
          <li
            class="pause-cause-popup__option"
            v-for="(option) of options"
            :key="option.id"
          >
            <wt-radio
              class="pause-cause-popup__option__radio"
              :selected="selected.id"
              :value="option.id"
              :label="option.name"
              @input="select(option)"
            ></wt-radio>
            <div class="pause-cause-popup__option__limits-wrapper">
              <span :class="{
                    'pause-cause-popup__option__duration--overflow': isDurationOverflow(option),
                 }">
                {{ optionDuration(option) }}
              </span>
              /
              <span>{{ optionLimit(option) }}</span>
            </div>
          </li>
        </ul>
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
export default {
  name: 'pause-cause-popup',
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    selected: '',
  }),
  methods: {
    isDurationOverflow({ durationMin, limitMin }) {
      return (durationMin > limitMin) && limitMin !== 0;
    },
    optionDuration({ durationMin, limitMin }) {
      return this.isDurationOverflow({ durationMin, limitMin })
      ? `-${durationMin - limitMin} ${this.$t('packages.agentStatusSelect.pauseCausePopup.min')}`
        : `${durationMin} ${this.$t('packages.agentStatusSelect.pauseCausePopup.min')}`;
    },
    optionLimit({ limitMin }) {
      return limitMin
        ? `${limitMin} ${this.$t('packages.agentStatusSelect.pauseCausePopup.min')}`
        : this.$t('packages.agentStatusSelect.pauseCausePopup.unlimited');
    },
    select(option) {
      this.selected = option;
    },
    setPause() {
      this.$emit('change', this.selected.name);
      this.close();
    },
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss" scoped>
.pause-cause-popup__option {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: var(--component-spacing);
  }
}

.pause-cause-popup__option__limits-wrapper {
  & > span {
    @extend %typo-strong-sm;
    padding: 6px 10px;
  }

  .pause-cause-popup__option__duration--overflow {
    color: var(--false-color);
  }
}
</style>

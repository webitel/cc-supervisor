<template>
  <div class="hs-multiselect">
    <div class="hs-multiselect-wrap">
      <vue-multiselect
        :class="{'opened': isOpened}"
        :value="validation"
        :options="opts"
        :placeholder="placeholder || label"
        :multiple="multiple"
        :close-on-select="closeOnSelect"
        :limit="1"
        :label="'name'"
        :track-by="trackBy"
        :limitText="limitText"
        :loading="false"
        :internal-search="true"
        :custom-label="displayLabel"
        :maxHeight="120"
        @open="isOpened = true"
        @input="input"
        @close="close"
      >
        <template slot="option" slot-scope="{ option }">
          <div class="multiselect__option__content">
            <span>{{option.name || option}}</span>
            <icon class="multiselect__option__tick">
              <svg class="icon icon-tick_sm sm">
                <use xlink:href="#icon-tick_sm"></use>
              </svg>
            </icon>
          </div>
        </template>
      </vue-multiselect>
      <icon class="hs-multiselect__arrow-down">
        <svg class="icon icon-arrow-down_md md">
          <use xlink:href="#icon-arrow-down_md"></use>
        </svg>
      </icon>
    </div>
  </div>
</template>

<script>
  import VueMultiselect from 'vue-multiselect';

  export default {
    name: 'multiselect-row',
    components: {
      VueMultiselect,
    },
    props: {
      value: {
        // type: [Array, Object],
        required: true,
      },

      options: {
        type: Array,
      },

      label: {
        type: String,
      },

      placeholder: {
        type: String,
      },

      trackBy: {
        type: String,
        default: 'id',
      },

      apiMode: {
        type: Boolean,
        default: true,
      },

      multiple: {
        type: Boolean,
        default: false,
      },

      closeOnSelect: {
        type: Boolean,
        default: true,
      },

      hideDetails: {
        type: Boolean,
        default: false,
      },

      readonly: {
        type: Boolean,
        default: false,
      },
    },

    data: () => ({
      isLoading: false,
      isOpened: false,
    }),

    computed: {
      opts() {
        const { options } = this;
        if (this.multiple) {
          const optionsDiff = options.filter((item) => !this.value
          .some((valueItem) => valueItem[this.trackBy] === item[this.trackBy]));
          return [...this.value, ...optionsDiff];
        }
        return options;
      },

      validation: {
        get() {
          return this.value;
        },
        set(value) {
          this.$emit('input', value);
        },
      },
    },

    methods: {
      limitText: (count) => `${count + 1}`,

      displayLabel(option) {
        let tmpOption = option.name || option;
        if (tmpOption.length > 15) tmpOption = `${tmpOption.substr(0, 15)}...`;
        return tmpOption;
      },

      input(value) {
        if (!this.readonly && value) {
          this.$emit('input', value);
        }
      },

      close() {
        this.$emit('closed');
        this.isOpened = false;
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "../../css/ui-components/multiselect-spinner";
  @import "../../css/ui-components/shared";

  $select-paddings: 10px 30px 10px 15px;

  .hs-multiselect-wrap {
    position: relative;
    width: 100%;
    height: (40px);
  }

  .hs-multiselect__arrow-down {
    position: absolute;
    top: 50%;
    right: (3px);
    transform: translateY(-50%);
    pointer-events: none;

    .icon {
      fill: #000;
      stroke: #000
    }
  }

  .multiselect {
    position: absolute;
    width: 100%;
    border: 1px solid $input-border-color;
    border-radius: $border-radius;
    background: #fff;
    cursor: pointer;
    transition: $transition;

    &.opened {
      z-index: 1;
    }

    &:hover, &.opened {
      border-color: #000;
    }

    // visible area
    &__tags {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: (40px);
      padding: $select-paddings;
      box-sizing: border-box;

      .multiselect__strong {
        @extend .count-badge;
        font-weight: normal;
      }

      .multiselect__placeholder {
        @extend .typo-input;
        color: $label-color;
      }

      .multiselect__input {
        @extend .typo-input;
        outline: none;
        border: none;
      }

      .multiselect__single {
        @extend .typo-input;
        display: inline-block;
      }

      .multiselect__tag {
        @extend .typo-input;
      }
    }

    // options
    &__content-wrapper {
      @extend .cc-scrollbar;
      overflow: auto;
    }

    &__content {
      width: 100%;
    }

    // empty/not found texts
    li:not(.multiselect__element) {
      @extend .typo-input;
      padding: $select-paddings;
    }

    &__element {
      @extend .typo-input;
      width: 100%;
      transition: $transition;
      cursor: pointer;

      .multiselect__option {
        display: block;
        border-radius: $border-radius;

        &:hover {
          background: $list-option__hover;
        }

        &__content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: $select-paddings;
          padding-right: (8px);
          box-sizing: border-box;
        }

        .multiselect__option__tick .icon {
          fill: transparent;
          stroke: transparent;
        }

        &:hover .multiselect__option__tick .icon {
          fill: #000;
          stroke: #000;
        }

        &.multiselect__option--selected
        .multiselect__option__tick .icon {
          fill: $true-color;
          stroke: $true-color;
        }
      }
    }

    &:not(.multiselect--active) {
      .multiselect__input {
        display: none;
      }
    }

    &--active {
      .multiselect__tags-wrap,
      .multiselect__strong {
        display: none !important;
      }
    }
  }
</style>

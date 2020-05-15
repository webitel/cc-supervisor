<template>
  <div class="hs-multiselect">
    <div class="hs-multiselect-wrap">
      <vue-multiselect
        :class="{'opened': isOpened}"
        :value="validation"
        :options="options"
        :placeholder="placeholder || label"
        :multiple="false"
        :close-on-select="true"
        :limit="1"
        :track-by="trackBy"
        :limitText="limitText"
        :loading="false"
        :internal-search="true"
        @input="input"
        @open="isOpened = true"
        @close="close"        
      >
         <template slot="option" slot-scope="{ option }">
          <div class="multiselect__option__content">
            <status                    
                    :class="option == 'Online' ? {'status__true':true} : (option == 'Waiting' ? {'status__info':true} : {'status__false':true})"
                    :text="option"
            >
            </status>
          </div>
        </template>

         <template slot="placeholder">
              <status
                :class="status.status == 'online' ? {'status__true':true} : (status.status == 'waiting' ? {'status__info':true} : {'status__false':true})"
                :text="status.time"
            >
            </status>
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
  import debounce from '../../utils/debounce';
  import status from './status.vue';

  export default {
    name: 'status-select',
    components: {
      VueMultiselect,
      status,
    },
    props: {
      status: {
          type: Object,
          required: true,
      },
      value: {
        // type: [Array, Object],
        required: false,
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

      fetchMethod: {
        type: Function,
      },

      hideDetails: {
        type: Boolean,
        default: false,
      },
    },

    data: () => ({
      isLoading: false,
      isOpened: false,
      fetchedOptions: [],
      options: ["Online", "Offline", "Waiting"]
    }),

    created() {
      this.fetch();
      this.fetch = debounce(this.fetch);
    },

    computed: {
    //   opts() {
    //     if (this.status.status=='online') {
    //         return [{ value: this.status.time, type:"Online" }, { type:"Offline" }, { type:"Waiting" }];
    //     } else if (this.status.status=='waiting') {
    //         return [{ value: this.status.time, type:"Waiting" }, { type:"Offline" }, { type:"Online" }];
    //     } else {
    //         return [{ value: this.status.time, type:"Offline" }, { type:"Online" }, { type:"Waiting" }];
    //     }
    //   },

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
      limitText: (count) => `${count}`,

      async fetch(search) {
        if (this.apiMode) {
          this.fetchedOptions = await this.fetchMethod(search);
        }
      },

      input(value) {
        if (value) {
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

<style lang="scss">
  @import "../../assets/css/ui-components/multiselect-spinner";
  @import "../../assets/css/ui-components/shared";

  $select-paddings: calcRem(7px) calcRem(30px) calcRem(7px) calcRem(8px);

  .hs-multiselect-wrap {
    position: relative;
    width: 100%;
    height: calcRem(40px);
  }

  .hs-multiselect__arrow-down {
    position: absolute;
    top: 50%;
    right: calcRem(3px);
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
      height: calcRem(40px);
      padding: $select-paddings;
      box-sizing: border-box;

      .multiselect__strong {
        @extend .count-badge;
        font-weight: normal;
      }

      .multiselect__placeholder {
        @extend .typo-body-sm;
        color: $label-color;
      }

      .multiselect__input {
        @extend .typo-body-sm;
        outline: none;
        border: none;
      }

      .multiselect__single {
        @extend .typo-body-sm;
        display: inline-block;
      }

      .multiselect__tag {
        @extend .typo-body-sm;
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
      @extend .typo-body-sm;
      padding: $select-paddings;
    }

    &__element {
      @extend .typo-body-sm;
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
          padding-right: calcRem(8px);
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

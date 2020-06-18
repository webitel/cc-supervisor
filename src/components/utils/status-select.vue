<template>
  <div class="hs-multiselect">
    <div class="hs-multiselect-wrap">
      <vue-multiselect
        :class="{'opened': isOpened}"
        :options="opts"
        :placeholder="'Select...'"
        :multiple="false"
        :close-on-select="true"
        :track-by="'value'"
        :limit="1"
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
                    :class="option.value == 'online' ? {'status__true':true} : (option.value == 'pause' ? {'status__info':true} : {'status__false':true})"
                    :text="option.label"
            >
            </status>
          </div>
        </template>

         <template slot="placeholder">
            <status
              :class="selected.status == 'online' ? {'status__true':true} : (selected.status == 'pause' ? {'status__info':true} : {'status__false':true})"
              :text="selected.time"
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
  import { mapActions } from 'vuex';
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
      agentId: {
        type: String,
        required: true,
      },
      status: {
        type: Object,
        required: true,
      },
    },

    data() {
      return {
        selected: this.status,
        isLoading: false,
        isOpened: false,
        options: [{ label: "Activate", value: "online"}, { label: "Stop", value: "offline"}, { label: "Break", value: "pause"}]
      };
    },

    computed: {
      opts() {
        if (this.selected.status=='online') {
            return [{ label: "Stop", value: "offline"}, { label: "Break", value: "pause"}];
        } else if (this.selected.status=='pause') {
            return [{ label: "Activate", value: "online"}, { label: "Stop", value: "offline"}];
        } else {
            return [{ label: "Activate", value: "online"}, { label: "Break", value: "pause"} ];
        }
      },
    },

    methods: {

      ...mapActions('agents', {
        updateStatus: 'UPDATE_STATUS',
      }),

      limitText: (count) => `${count}`,

      input(value) {
        if (value) {
          this.selected = {status: value.value, time: 'waiting...'}
          this.updateStatus({ agentId: this.agentId, status: this.selected.status });
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

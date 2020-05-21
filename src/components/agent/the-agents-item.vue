<template>
    <div>
        <header class="filter-header span-size">
            <button
                class="back-btn"
                @click="$router.go(-1)"
                >
                <icon>
                    <svg class="icon icon-arrow_back_md md">
                    <use xlink:href="#icon-arrow_back_md"></use>
                    </svg>
                </icon>
            </button>
            <div class="filter-item main-info">
                <span class="name">{{itemInstance.name}}</span>
                <span class="phone">{{itemInstance.phone_number}}</span>
            </div>
            <button class="icon-btn">
                <icon>
                    <svg class="icon icon-call_processing_md md agent-call-button">
                    <use xlink:href="#icon-call_processing_md"></use>
                    </svg>
                </icon>
            </button>
            <button class="icon-btn btn-margin">
                <icon>
                    <svg class="icon icon-chat_md md agent-chat-button">
                    <use xlink:href="#icon-chat_md"></use>
                    </svg>
                </icon>
            </button>
            <status-select
                class="status-cell filter-item"
                :status="itemInstance.status || {}"
            ></status-select>
            <status
                class="filter-item"
                :class="{'status__false':true}"
                :text="itemInstance.offline_time"
            >
            </status>
            <status
                class="filter-item"
                :class="{'status__info':true}"
                :text="itemInstance.waiting_time"
            >
            </status>
             <status
                class="filter-item"
                :class="{'status__true':true}"
                :text="itemInstance.online_time"
            >
            </status>
            <selector-team
                v-if="itemInstance.teams"
                class="selector-item filter-team"
                :agentId="itemInstance.id"
                :options="teams"
                :values="itemInstance.teams"
            >
            </selector-team>
        </header>
       <tabs-component
                :tabs="tabs"
                :root="$options.name"
                :initialTab="'calls'"
        >
            <template slot="component" slot-scope="props">
                <component
                        class="tabs-inner-component"
                        :is="props.currentTab"
                ></component>
            </template>
        </tabs-component>
    </div>
</template>

<script>
import tabsComponent from '@/components/utils/tabs-component.vue';
import { mapActions, mapState } from 'vuex';
import { fetchTeams } from '@/api/filter-getters/teamFilter';
import selectorTeam from '../selectors/selector-team.vue';
import statusSelect from '../utils/status-select.vue';
import status from '../utils/status.vue';
import theAgentsItemCalls from './the-agents-item-calls.vue';
import theAgentsItemChats from './the-agents-item-chats.vue';


export default {
    name: 'the-agents-item',
    components: {
        theAgentsItemCalls,
        theAgentsItemChats,
        tabsComponent,
        selectorTeam,
        statusSelect,
        status,
    },
    mixins: [
    ],
    async mounted() {
        await this.loadItem(this.$route.params.id);
        this.teams = await fetchTeams();
    },
    data() {
        return {
            teams: [],
        };
    },
    watch: {
    },
    computed: {
        ...mapState('agents', {
            itemInstance: (state) => state.itemInstance,
        }),
        id: {
            get() { return this.itemInstance.id; },
        },
        tabs() {
           return [{
                        text: 'Calls',
                        value: 'calls',
                    }, {
                        text: 'Chats',
                        value: 'chats',
                    }];
        },
    },
    methods: {
        ...mapActions('agents', {
            loadItem: 'FETCH_ITEM',
        }),
    },
};
</script>

<style lang="scss" scoped>

.btn-margin {
    margin-right: calcRem(30px);
}

.agent-call-button {
    background: #4CAF50;
    fill: #FFFFFF;
    border-radius: 50%;
}

.agent-chat-button {
    background: #708FFF;
    fill: #FFFFFF;
    border-radius: 50%;
}

.main-info {
    display: inline-grid;
}

.span-size {
    font-size: 14px;
    line-height: 20px;
}

.name {
    @extend .span-size;
    font-weight: 600;
}

.phone {
    @extend .span-size;
}

.back-btn {
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  margin-right: 25px;
  .icon {
    fill: #323232;
  }

  &:hover .icon {
    fill: $icon-color__hover;
    stroke: $icon-color__hover;
  }

  &.active .icon {
    fill: $icon-color__active;
    stroke: $icon-color__active;
  }
}

.nameLink {
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  .filter-header {
    display: flex;
    align-items: left;
    min-height: 68px;
    padding: 35px 28px;
    margin-bottom: 28px;

    background: #fff;
    border-radius: $border-radius;
    .label {
        color: #acacac;
    }
    .filter-item {
        min-width: calcRem(80px);
        margin-right: calcRem(30px);
    }
    .filter-team {
        min-width: calcRem(170px);
    }
}

.status-cell {
    width: calcRem(126px)
}

.object-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 68px;
        padding: 15px 28px;
        margin-bottom: 28px;

        background: #fff;
        border-radius: $border-radius;
    }

.object-title {
        @extend .typo-heading-lg;

        margin: 0;
        letter-spacing: 0.15px;

        span {
            @extend .typo-heading-lg;
        }
    }
 .object-header__title-wrap {
        display: flex;
    }
    .history-section {
    padding: calcRem(12px) calcRem(28px);
    border-radius: $border-radius;
    background: #fff;
  }

  .history-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .history-heading__h1 {
    @extend .typo-heading-md;
  }

  .history-heading__actions-wrap {
    display: flex;
    align-items: center;
    position: relative;

    .cc-btn {
      margin-left: calcRem(20px);
    }

    .files-counter {
      $offset: calcRem(10px);
      @extend .typo-body-sm;
      position: absolute;
      right: 0;
      top: calc(100% + #{$offset});
      padding: calcRem(10px) calcRem(15px);
      background: #fff;
      box-shadow: $box-shadow;
      border-radius: $border-radius;

      &__count {
        @extend .typo-heading-sm;
      }
    }
  }
</style>

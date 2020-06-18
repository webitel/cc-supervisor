<template>
    <div>
        <header class="filter-header">
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
                <span class="title">{{itemInstance.name}}</span>
                <span>{{itemInstance.phone_number}}</span>
            </div>
            <button class="icon-btn btn-margin" @click.prevent="callAgent()">
                <icon>
                    <svg class="icon icon-call_processing_md md call_btn">
                    <use xlink:href="#icon-call_processing_md"></use>
                    </svg>
                </icon>
            </button>
            <!-- <button class="icon-btn btn-margin">
                <icon>
                    <svg class="icon icon-chat_md md chat_btn">
                    <use xlink:href="#icon-chat_md"></use>
                    </svg>
                </icon>
            </button> -->
            <status-select
                v-if="itemInstance.status"
                class="status-cell filter-item"
                :status="itemInstance.status"
                :agentId="this.$route.params.id"
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
            <!-- <the-agents-help-popup
                class="attention-element"
                v-if="itemInstance.attentions"
                :agent="itemInstance"
                :type="itemInstance.attentions.type"
                :count="itemInstance.attentions.count"
            >
            </the-agents-help-popup> -->
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
// import theAgentsItemChats from './the-agents-item-chats.vue';
// import theAgentsHelpPopup from './the-agents-help-popup.vue';


export default {
    name: 'the-agents-item',
    components: {
        theAgentsItemCalls,
        // theAgentsItemChats,
        // theAgentsHelpPopup,
        tabsComponent,
        selectorTeam,
        statusSelect,
        status,
    },
    mixins: [
    ],
    mounted() {
        this.load();
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
                    },
                    // {
                    //     text: 'Chats',
                    //     value: 'chats',
                    // },
                ];
        },
    },
    methods: {
        ...mapActions('agents', {
            loadItem: 'FETCH_ITEM',
        }),

        ...mapActions('call', {
            openWindow: 'OPEN_WINDOW',
            setCallInfo: 'SET_CALL_INFO',
        }),

        callAgent() {
            this.setCallInfo({ time: '00:00:17', agent: this.itemInstance });
            this.openWindow();
        },

        async load() {
            await this.loadItem(this.$route.params.id);
            this.teams = await fetchTeams();
        },
    },
};
</script>

<style lang="scss" scoped>

.btn-margin {
    margin-right: (30px);
}

.main-info {
    display: inline-grid;
}

.back-btn {
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  margin-right: 25px;
  .icon {
    fill: $back-btn-color;
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
    position: relative;
    display: flex;
    align-items: center;
    min-height: 68px;
    padding: 35px 28px;
    margin-bottom: 28px;

    background: $content-bg-color;
    border-radius: $border-radius;
    .label {
        color: $label-color;
    }
    .filter-item {
        min-width: (80px);
        margin-right: (30px);
    }
    .filter-team {
        min-width: (170px);
    }
}

.status-cell {
    width: (126px)
}

.object-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 68px;
        padding: 15px 28px;
        margin-bottom: 28px;

        background: $content-bg-color;
        border-radius: $border-radius;
    }


 .object-header__title-wrap {
        display: flex;
    }
    .history-section {
    padding: (12px) (28px);
    border-radius: $border-radius;
    background: $content-bg-color;
  }

  .attention-element {
    align-items: center;
    display: flex;
    position: absolute;
    right: 50px;
  }
</style>

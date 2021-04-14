<!--<template>-->
<!--  <div>-->
<!--    <div class="table-element">-->
<!--      <button-->
<!--        class="icon-btn replace-hover"-->
<!--        @click.prevent="isOpened = true"-->
<!--      >-->
<!--        <icon>-->
<!--          <svg class="icon icon-attention_notificaton_hover_md md"-->
<!--               :class="{red: type === 'error', yell: type === 'warning'}">-->
<!--            <use xlink:href="#icon-attention_notificaton_hover_md"></use>-->
<!--          </svg>-->
<!--        </icon>-->
<!--      </button>-->
<!--      <strong class="count">-->
<!--        {{ count }}-->
<!--      </strong>-->
<!--    </div>-->
<!--    <popup-container v-if="isOpened">-->
<!--      <template slot="popup-header">-->
<!--        <button class="icon-btn close-button" @click.prevent="isOpened = false">-->
<!--          <icon>-->
<!--            <svg class="icon icon-close_md md">-->
<!--              <use xlink:href="#icon-close_md"></use>-->
<!--            </svg>-->
<!--          </icon>-->
<!--        </button>-->
<!--        <h1 class="popup-header__h1">Agent help</h1>-->
<!--        <div class="header-align">-->
<!--          <button class="icon-btn" @click.prevent="callAgent()">-->
<!--            <icon>-->
<!--              <svg class="icon icon-call_processing_md xl call-btn">-->
<!--                <use xlink:href="#icon-call_processing_md"></use>-->
<!--              </svg>-->
<!--            </icon>-->
<!--          </button>-->
<!--          <button class="icon-btn header-button-margim">-->
<!--            <icon>-->
<!--              <svg class="icon icon-chat_md xl chat-btn">-->
<!--                <use xlink:href="#icon-chat_md"></use>-->
<!--              </svg>-->
<!--            </icon>-->
<!--          </button>-->
<!--        </div>-->
<!--        <div class="header-align">-->
<!--          <span class="agent-name">{{ agent.name }}</span>-->
<!--        </div>-->
<!--      </template>-->
<!--      <template slot="popup-main">-->
<!--        <ul>-->
<!--          <li-->
<!--            class="attention-item"-->
<!--            v-for="(attention) of data"-->
<!--            :key="attention.id"-->
<!--          >-->
<!--            <icon class="attention-item__icon">-->
<!--              <svg :class="{-->
<!--                      red: attention.priority==='error',-->
<!--                       yell: attention.priority==='warning'-->
<!--                    }" class="icon md">-->
<!--                <use xlink:href="#icon-attention_notificaton_hover_md"></use>-->
<!--              </svg>-->
<!--            </icon>-->
<!--            <div>-->
<!--              <div>-->
<!--                    <span class="attention-item__title">-->
<!--                      Call:-->
<!--                    </span>-->
<!--                <span class="attention-item__description">-->
<!--                      {{ attention.time }}-->
<!--                    </span>-->
<!--                <span class="attention-item__title">-->
<!--                      Client:-->
<!--                    </span>-->
<!--                <span class="attention-item__description">-->
<!--                      {{ attention.client }}-->
<!--                    </span>-->
<!--              </div>-->
<!--              <div>-->
<!--                    <span class="attention-item__title">-->
<!--                      Subject:-->
<!--                    </span>-->
<!--                <span class="attention-item__description">-->
<!--                      {{ attention.subject }}-->
<!--                    </span>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="attention-item__actions" v-if="attention.type=='call'">-->
<!--              <button-->
<!--                class="icon-btn"-->
<!--                @click.prevent="callAgent(attention.client)"-->
<!--              >-->
<!--                <icon>-->
<!--                  <svg class="icon lg call-btn">-->
<!--                    <use xlink:href="#icon-call_join_md"></use>-->
<!--                  </svg>-->
<!--                </icon>-->
<!--              </button>-->
<!--              <button-->
<!--                class="icon-btn action-btn"-->
<!--              >-->
<!--                <icon>-->
<!--                  <svg class="icon lg">-->
<!--                    <use xlink:href="#icon-speaker_off_md"></use>-->
<!--                  </svg>-->
<!--                </icon>-->
<!--              </button>-->
<!--            </div>-->
<!--            <div class="attention-item__actions" v-else>-->
<!--              <button-->
<!--                class="icon-btn "-->
<!--              >-->
<!--                <icon>-->
<!--                  <svg class="icon lg chat-btn">-->
<!--                    <use xlink:href="#icon-chat_join_md"></use>-->
<!--                  </svg>-->
<!--                </icon>-->
<!--              </button>-->
<!--              <button-->
<!--                class="icon-btn action-btn"-->
<!--              >-->
<!--                <icon>-->
<!--                  <svg class="icon lg">-->
<!--                    <use xlink:href="#icon-see_chat_md"></use>-->
<!--                  </svg>-->
<!--                </icon>-->
<!--              </button>-->
<!--            </div>-->
<!--            <button-->
<!--              class="icon-btn attention-item__remove-btn"-->
<!--              @click.prevent="removeAttention(attention.id)"-->
<!--            >-->
<!--              <icon>-->
<!--                <svg class="icon md">-->
<!--                  <use xlink:href="#icon-close_md"></use>-->
<!--                </svg>-->
<!--              </icon>-->
<!--            </button>-->
<!--          </li>-->
<!--        </ul>-->
<!--      </template>-->
<!--    </popup-container>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import { mapActions, mapState } from 'vuex';-->

<!--export default {-->
<!--  name: 'the-agents-help-popup',-->

<!--  props: {-->
<!--    agent: {-->
<!--      type: Object,-->
<!--      required: true,-->
<!--    },-->
<!--    type: {-->
<!--      type: String,-->
<!--      required: true,-->
<!--    },-->
<!--    count: {-->
<!--      type: Number,-->
<!--      required: true,-->
<!--    },-->
<!--  },-->

<!--  data: () => ({-->
<!--    isOpened: false,-->
<!--    isLoading: false,-->
<!--    isNext: false,-->
<!--  }),-->

<!--  computed: {-->
<!--    ...mapState('agentAttentions', {-->
<!--      data: (state) => state.dataList,-->
<!--    }),-->
<!--  },-->

<!--  watch: {-->
<!--    isOpened(value) {-->
<!--      if (value) {-->
<!--        this.loadList();-->
<!--      }-->
<!--    },-->
<!--  },-->

<!--  methods: {-->
<!--    ...mapActions('agentAttentions', {-->
<!--      loadDataList: 'LOAD_DATA_LIST',-->
<!--      removeItemData: 'REMOVE_ITEM',-->
<!--    }),-->

<!--    ...mapActions('call', {-->
<!--      openWindow: 'OPEN_WINDOW',-->
<!--      setCallInfo: 'SET_CALL_INFO',-->
<!--    }),-->

<!--    callAgent(clientName) {-->
<!--      this.isOpened = false;-->
<!--      this.setCallInfo({-->
<!--        time: '00:00:17',-->
<!--        agent: this.agent,-->
<!--        clientName,-->
<!--      });-->
<!--      this.openWindow();-->
<!--    },-->

<!--    async loadList() {-->
<!--      this.isLoading = true;-->
<!--      try {-->
<!--        this.isNext = await this.loadDataList(this.agent.id);-->
<!--      } catch {-->
<!--      } finally {-->
<!--        this.isLoading = false;-->
<!--      }-->
<!--    },-->
<!--    async removeAttention(key) {-->
<!--      this.isLoading = true;-->
<!--      try {-->
<!--        await this.removeItemData(this.agent.id, key);-->
<!--      } catch {-->
<!--      } finally {-->
<!--        this.isLoading = false;-->
<!--      }-->
<!--    },-->
<!--  },-->

<!--};-->
<!--</script>-->

<!--<style lang="scss" scoped>-->
<!--@import "../../../css/ui-components/shared";-->

<!--.attention-item {-->
<!--  position: relative;-->
<!--  align-items: center;-->
<!--  display: flex;-->
<!--  height: 88px;-->
<!--  border: 1px solid #F2F2F2;-->
<!--  box-sizing: border-box;-->
<!--  border-radius: 4px;-->
<!--  width: 494px;-->
<!--  padding: 14px;-->
<!--  margin-bottom: 5px;-->

<!--  &.active, &:hover {-->
<!--    border: 1px solid $accent-color;-->
<!--  }-->

<!--  &__title {-->
<!--    @extend %typo-heading-md;-->
<!--    margin-right: 1px;-->
<!--  }-->

<!--  &__icon {-->
<!--    margin-right: 15px;-->
<!--  }-->

<!--  &__description {-->
<!--    @extend %typo-body-md;-->
<!--    margin-right: 2px;-->
<!--  }-->

<!--  &__remove-btn {-->
<!--    position: absolute;-->
<!--    right: 2px;-->
<!--    top: 2px-->
<!--  }-->

<!--  &__actions {-->
<!--    right: 25px;-->
<!--    position: absolute;-->
<!--  }-->
<!--}-->

<!--.red {-->
<!--  fill: $false-color;-->
<!--  color: $false-color;-->
<!--}-->

<!--.yell {-->
<!--  fill: $accent-color;-->
<!--}-->

<!--.close-button {-->
<!--  position: absolute;-->
<!--  right: 10px;-->
<!--  top: 10px;-->
<!--}-->

<!--.header-align {-->
<!--  text-align: center;-->
<!--}-->

<!--.agent-name {-->
<!--  @extend %typo-heading-md;-->
<!--  text-decoration-line: underline;-->
<!--}-->

<!--.watch-btn {-->
<!--  background-color: #F9F9F9;-->
<!--  margin-left: 5px;-->
<!--}-->

<!--.table-element {-->
<!--  display: flex;-->
<!--}-->

<!--.count {-->
<!--  @extend .count-badge;-->
<!--  margin-left: 8px;-->
<!--  width: 36px;-->
<!--  padding: 6px 15px;-->
<!--  font-weight: normal;-->
<!--}-->

<!--.replace-hover {-->
<!--  &:hover .icon {-->
<!--    fill: #ACACAC;-->
<!--    stroke: #ACACAC;-->
<!--  }-->
<!--}-->

<!--.header-button-margin {-->
<!--  margin-left: 10px;-->
<!--}-->
<!--</style>-->

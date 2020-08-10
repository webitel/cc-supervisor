<template>
  <div class="header-notifications">
    <!--  v-clickaway="close" -->
    <button
      class="icon-btn header-notifications__btn"
      :class="{'opened': isOpened}"
      @click.prevent="isOpened = !isOpened"
    >
      <icon>
        <svg class="icon md">
          <use xlink:href="#icon-bell_md"></use>
        </svg>
      </icon>
    </button>
    <div
      class="header-notifications__wrapper"
      :class="{'hidden': !isOpened}"
    >
      <ul>
        <li
          class="header-notifications__item"
          v-for="(notification, key) of notifications"
          :key="key"
        >
        <span class="header-notifications__subject">
            {{notification.subject}}
        </span>
        <span class="header-notifications__description">
            {{notification.description}}
        </span>
        <button
          class="icon-btn header-notifications__remove-btn"
          @click.prevent="removeNotification(key)"
        >
          <icon>
            <svg class="icon md">
              <use xlink:href="#icon-close_md"></use>
            </svg>
          </icon>
        </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'the-notifications',
    directives: {
      // clickaway,
    },
    data: () => ({
      isOpened: false,
    }),

    computed: {
      ...mapState({
        notifications: (state) => state.websocket.notifications,
      }),
    },

    methods: {
      close() {
        this.isOpened = false;
      },
      ...mapActions({
        removeNotification: 'REMOVE_NOTIFICATION',
      }),
    },
  };
</script>

<style lang="scss" scoped>
  $header-notifications-gap: 12px;
  $header-notifications-shadow: 0px 8px 18px rgba(0, 0, 0, 0.08);
  $header-notifications-border-color: #eaeaea;
  $header-notifications-border-color--hover: $accent-color;

  .header-notifications {
    position: relative;
    display: flex;
    align-items: center;
    margin-left: 30px;
    z-index: 90;
  }

  .header-notifications__wrapper {
    @extend .cc-scrollbar;
    position: absolute;
    top: calc(100% + 5px); // icon + 5px
    right: 0;
    max-height: 80vh;
    padding: $header-notifications-gap;
    background: #fff;
    border-radius: $border-radius;
    box-shadow: $header-notifications-shadow;
    transition: $transition;
    overflow: auto;
  }

  .header-notifications__item {
    align-items: center;
    display: flex;
    height: 58px;
    border: 1px solid #F2F2F2;
    box-sizing: border-box;
    border-radius: 4px;
    width: 380px;
    padding: 14px;
    margin-bottom: 5px;
    &.active, &:hover {
      border: 1px solid $accent-color;
    }
  }

  .header-notifications__subject {
        @extend .typo-heading-md;
        margin-right: 12px;
  }

  .header-notifications__description {
      @extend .typo-body-md;
      margin-right: 12px;
  }

  .header-notifications__remove-btn {
    position: absolute;
    right: 5%;
  }
</style>

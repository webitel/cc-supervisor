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
    <nav
      class="header-notifications__nav-wrapper"
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
    </nav>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';
  import clickaway from '../../directives/clickaway';

  export default {
    name: 'the-notifications',
    directives: {
      clickaway,
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
      ...mapMutations({
        removeNotification: 'DELETE_NOTIFICATION',
      }),
    },
  };
</script>

<style lang="scss" scoped>
  $header-notifications-gap: 12px;
  $header-notifications-shadow: 0px 8px 18px rgba(0, 0, 0, 0.08);
  $header-notifications-border-color: #eaeaea;
  $header-notifications-border-color--hover: $accent-color;


  // helper class
  .typo-header-notifications {
    font-family: 'Montserrat Regular', monospace;
    font-size: 14px;
    line-height: 20px;
  }

  .header-notifications {
    position: relative;
    display: flex;
    align-items: center;
    margin-left: 30px;
    z-index: 90;
  }

  // dropdown part
  .header-notifications__nav-wrapper {
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

  .header-notifications__nav-title {
    @extend .typo-header-notifications;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: $header-notifications-gap;
  }

  // ul with li apps
  .header-notifications__nav {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: $header-notifications-gap;
  }

  .header-notifications__card {
    width: 120px;
    height: 120px;
    box-sizing: border-box;
    border: 1px solid $header-notifications-border-color;
    border-radius: $border-radius;
    transition: $transition;

    &.active, &:hover {
      border-color: $header-notifications-border-color--hover;
    }
  }

  // a tag
  .header-notifications__card__link {
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  // img inside a
  .header-notifications__card__img {
    width: 100%;
    height: 100%;
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
        @extend .typo-text-bold;
        margin-right: 12px;
  }

  .header-notifications__description {
      @extend .typo-text;
      margin-right: 12px;
  }

  .header-notifications__remove-btn {
    position: absolute;
    right: 5%;
  }
</style>

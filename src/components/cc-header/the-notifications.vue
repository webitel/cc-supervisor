<template>
  <div class="app-navigator">
    <!--  v-clickaway="close" -->
    <button
      class="icon-btn app-navigator__btn"
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
      class="app-navigator__nav-wrapper"
      :class="{'hidden': !isOpened}"
    >
      <ul>
        <li
            class="not-item"
          v-for="(not, key) of notifications"
          :key="key"
        >
        <span class="subject">
            {{not.subject}}
        </span>
        <span class="description">
            {{not.description}}
        </span>
        <button
          class="icon-btn remove-btn"
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
  // import { mapState } from 'vuex';
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
      notifications() {
        return this.$store.state.websocket.notifications;
      },
      // ...mapState('websocket', {
      //   notifications: (state) => state.notifications,
      // }),
    },

    methods: {
      close() {
        this.isOpened = false;
      },
      removeNotification(index) {
        this.$store.commit('DELETE_NOTIFICATION', index);
      },
    },
  };
</script>

<style lang="scss" scoped>
  $app-navigator-gap: 12px;
  $app-navigator-shadow: 0px calcRem(8px) calcRem(18px) rgba(0, 0, 0, 0.08);
  $app-navigator-border-color: #eaeaea;
  $app-navigator-border-color--hover: $accent-color;


  // helper class
  .typo-app-navigator {
    font-family: 'Montserrat Regular', monospace;
    font-size: calcRem(14px);
    line-height: calcRem(20px);
  }

  .app-navigator {
    position: relative;
    display: flex;
    align-items: center;
    margin-left: calcRem(30px);
    z-index: 90;
  }

  // dropdown part
  .app-navigator__nav-wrapper {
    @extend .cc-scrollbar;
    position: absolute;
    top: calc(100% + 5px); // icon + 5px
    right: 0;
    max-height: 80vh;
    padding: $app-navigator-gap;
    background: #fff;
    border-radius: $border-radius;
    box-shadow: $app-navigator-shadow;
    transition: $transition;
    overflow: auto;
  }

  .app-navigator__nav-title {
    @extend .typo-app-navigator;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: $app-navigator-gap;
  }

  // ul with li apps
  .app-navigator__nav {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: $app-navigator-gap;
  }

  .app-navigator__card {
    width: calcRem(120px);
    height: calcRem(120px);
    box-sizing: border-box;
    border: 1px solid $app-navigator-border-color;
    border-radius: $border-radius;
    transition: $transition;

    &.active, &:hover {
      border-color: $app-navigator-border-color--hover;
    }
  }

  // a tag
  .app-navigator__card__link {
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  // img inside a
  .app-navigator__card__img {
    width: 100%;
    height: 100%;
  }

  .not-item {
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
      border: 1px solid #FFC107;
    }
    .subject {
        @extend .typo-text-bold;
        margin-right: 12px;
    }
    .description {
        @extend .typo-text;
        margin-right: 12px;
    }
    .remove-btn{
      position: absolute;
      right: 5%;
    }
  }
</style>

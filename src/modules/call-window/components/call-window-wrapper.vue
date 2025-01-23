<template>
  <aside
    class="call-window-wrapper"
    @mouseenter="isExpanded = true"
    @focus="isExpanded = true"
    @mouseleave="isExpanded = false"
    @blur="isExpanded = false"
  >
    <div class="call-window-content-wrapper">
      <section class="call-window-visible-wrapper">
        <header class="call-window-header">
          <slot name="header" v-bind="{ isExpanded }"></slot>
        </header>
        <p class="call-window-title">
          <slot name="title"></slot>
        </p>
      </section>
      <wt-expand-transition>
        <section
          v-if="isExpanded"
          class="call-window-hidden-wrapper"
        >
          <article class="call-window-content">
            <slot name="content"></slot>
          </article>
          <footer class="call-window-footer">
            <slot name="footer"></slot>
          </footer>
        </section>
      </wt-expand-transition>
    </div>
  </aside>
</template>

<script>
import WtExpandTransition from '@webitel/ui-sdk/src/components/transitions/wt-expand-transition.vue';

export default {
  name: 'call-window-wrapper',
  components: { WtExpandTransition },
  data: () => ({
    isExpanded: false,
  }),
};
</script>

<style lang="scss" scoped>
@use '@webitel/ui-sdk/src/css/main';

$width: 232px;

.call-window-wrapper {
  position: fixed;
  right: var(--spacing-xs);
  bottom: var(--spacing-xs);
  padding: var(--spacing-xs);
  z-index: 101;
  background: var(--wt-page-wrapper-background-color);
  border-radius: 16px;
  box-shadow: var(--elevation-10);

  .call-window-content-wrapper {
    width: $width;
    padding: var(--spacing-lg);
    background: var(--content-wrapper-color);
    border-radius: 16px;
  }

  .call-window-header {
    display: grid;
    grid-template-columns: 40px 72px 40px;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-sm);
  }

  .call-window-title {
    @extend %typo-subtitle-2;
    text-align: center;
  }

  .call-window-title,
  .call-window-content,
  .call-window-footer {
    margin-top: var(--spacing-lg);
  }
}
</style>

<template>
  <span class="tooltip" :class="{'tooltip--visible': visible}">
    <slot></slot>
  </span>
</template>

<script>
  export default {
    name: 'tooltip',
    props: {
      visible: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>

<style lang="scss" scoped>
  $tooltip-bg-color: #fff;
  $tooltip-box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);

  .tooltip {
    @extend %typo-body-sm;
    position: absolute;
    display: inline-block;
    padding: 10px 15px;
    background: $tooltip-bg-color;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    transition: var(--transition);
    opacity: 0;
    pointer-events: none;
    z-index: 100;

    &--visible, &:hover {
      opacity: 1;
      pointer-events: auto;
    }
  }
</style>

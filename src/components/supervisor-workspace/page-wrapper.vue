<template>
  <section class="page-wrapper">
    <div class="page-wrapper__header">
      <slot name="header"></slot>
    </div>
    <div class="page-wrapper__actions-panel">
      <slot name="actions-panel"></slot>
    </div>
    <div class="page-wrapper__main">
      <slot name="main"></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'page-wrapper',
};
</script>

<style lang="scss" scoped>
@import "../../css/supervisor-workspace/page-wrapper";
</style>

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
.page-wrapper {
  padding: 20px 30px;
}

.page-wrapper__header,
.page-wrapper__actions-panel,
.page-wrapper__main {
  margin-bottom: 20px;
  background: var(--main-primary-color);
  border-radius: var(--border-radius);
}

.page-wrapper__actions-panel,
.page-wrapper__main {
  padding: 20px 30px;
}

</style>

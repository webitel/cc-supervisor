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
  display: flex;
  flex-direction: column;
  min-height: 100%;
  box-sizing: border-box;
  padding: 20px 30px;
}

.page-wrapper__header,
.page-wrapper__actions-panel,
.page-wrapper__main {
  box-sizing: border-box;
  background: var(--main-primary-color);
  border-radius: var(--border-radius);
}

.page-wrapper__header,
.page-wrapper__actions-panel {
  margin-bottom: 20px;
}

.page-wrapper__actions-panel {
  padding: 20px 30px;
}

.page-wrapper__main {
  flex: 1;
  display: flex;
  width: 100%;
  padding: 20px 30px 30px;
}

</style>

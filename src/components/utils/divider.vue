<template>
  <hr class="divider">
</template>

<script>
  export default {
    name: 'divider',
  };
</script>

<style lang="scss" scoped>
$header-separator-color: #EAEAEA;
  .divider {
    display: block;
    width: 100%;
    max-width: 100%;
    height: 0;
    max-height: 0;
    padding: 0;
    margin: 0;
    border: (1px) solid $header-separator-color;
    border-top-width: thin;
  }
</style>

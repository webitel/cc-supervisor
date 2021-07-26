<template>
  <wt-error-page type="403" @back="$router.push('/')"></wt-error-page>
</template>

<script>
export default {
  name: 'access-denied-component',
};
</script>

<style lang="scss" scoped>

</style>

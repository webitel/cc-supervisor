<template>
  <wt-error-page type="403" @back="$router.push('/')"></wt-error-page>
</template>

<script>
export default {
	name: 'AccessDeniedComponent',
};
</script>

<style lang="scss" scoped>

</style>

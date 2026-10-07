<template>
  <wt-error-page type="403" @back="router.push('/')"></wt-error-page>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style lang="scss" scoped>

</style>

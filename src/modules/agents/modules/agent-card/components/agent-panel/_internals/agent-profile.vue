<template>
  <article class="agent-profile">
    <div class="agent-profile__pic">
      <img
        class="agent-profile__pic__img"
        src="../../../../../../../app/assets/img/default-avatar.svg"
        alt="Agent avatar"
      >
    </div>
    <span class="agent-profile__name typo-body-1">{{ name }}</span>
  </article>
</template>

<script lang="ts" setup>
withDefaults(
	defineProps<{
		name?: string;
	}>(),
	{
		name: '',
	},
);
</script>

<style scoped>
.agent-profile {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);

  .agent-profile__pic {
    width: 24px;
    height: 24px;
  }

  .agent-profile__pic__img {
    width: 100%;
    height: 100%;
  }

}
</style>

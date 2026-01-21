<template>
  <article class="agent-profile">
    <div class="agent-profile__pic">
      <img
        class="agent-profile__pic__img"
        src="../../../../../../../app/assets/img/default-avatar.svg"
        alt="Agent avatar"
      >
    </div>
    <strong class="agent-profile__name typo-subtitle-1">{{ name }}</strong>
  </article>
</template>

<script>
export default {
  name: 'AgentProfile',
  props: {
    name: {
      type: String,
      default: '',
    },
  },
};
</script>

<style
  lang="scss"
  scoped
>
@use '@webitel/ui-sdk/src/css/main';

.agent-profile {
  display: flex;
  align-items: center;
  padding: 5px 10px;

  .agent-profile__pic {
    width: 40px;
    height: 40px;
    margin-right: var(--spacing-sm);

    &__img {
      width: 100%;
      height: 100%;
    }
  }

}
</style>

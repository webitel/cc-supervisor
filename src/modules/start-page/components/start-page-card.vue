<template>
  <article class="start-page-card">
    <header class="start-page-card__header">
      <wt-icon v-if="card.disabled" icon="lock" color="false"/>
      {{ card.name }}
    </header>
    <section class="start-page-card__main-section">
      <img :src="card.image" :alt="card.name">
      <p class="start-page-card__description">
        {{ card.text }}
      </p>
    </section>
    <footer>
      <wt-button
          :disabled="card.disabled"
          wide
          @click="open"
      >
        {{ $t('reusable.open') }}
      </wt-button>
    </footer>
  </article>
</template>

<script>

export default {
  name: 'start-page-card',
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  methods: {
    open() {
      this.$router.push(this.card.route);
    },
  },
};
</script>

<style lang="scss" scoped>
.start-page-card {
  box-sizing: border-box;
  width: 410px;
  padding: var(--spacing-sm);
  color: var(--contrast-color);
  border-radius: var(--border-radius);
  background-color: var(--main-color);
}

.start-page-card__header {
  @extend %typo-heading-2;
  display: flex;
  align-items: center;
}

.start-page-card__header .wt-icon {
  margin-right: var(--spacing-xs);
}

.start-page-card__main-section {
  margin-bottom: var(--spacing-sm);
}

.start-page-card__description {
  @extend %typo-body-2;
  height: 42px;
  margin-top: var(--spacing-sm);
  //in order to cut text after 3rd line:
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>

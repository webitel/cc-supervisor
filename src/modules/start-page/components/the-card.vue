<template>
  <div class="card">
    <header class="card__header">
      {{ card.title }}
    </header>
    <main>
      <img :src="card.image" :alt="card.title">
      <p class="card__description">
        {{ card.text }}
      </p>
    </main>
    <footer>
      <div>
        <button class="card__button" @click="redirect">
          Open
        </button>
      </div>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'the-card',
  props: { card: Object },
  methods: {
    redirect() {
      this.$router.push(this.card.path);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 410px;
  background-color: var(--main-color);
  margin: var(--component-padding);
  padding: var(--component-padding);
  border-radius: var(--border-radius);
  color: var(--contrast-color);
}

.card__header {
  @extend %typo-heading-md;
}

.card__description {
  @extend %typo-body-md;
  margin: var(--component-padding) 0;
  height: 42px;
  //in order to cut text after 3rd line:
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.card__button {
  @extend %typo-strong-md;
  background-color: var(--accent-color);
  border-radius: var(--border-radius);
  width: 100%;
  height: 38px;
  color: var(--main-color);
}

img {
  width: 100%;
}
</style>

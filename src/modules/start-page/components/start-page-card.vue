<template>
  <article class="start-page-card">
    <header class="start-page-card__header">
      <!--      it is an image in order to test, will be icon-->
      <!--      <img v-if="card.disabled" src="https://eimg.pravda.com/images/doc/a/7/a7a20b6&#45;&#45;&#45;&#45;&#45;&#45;.jpg">-->
      {{ card.title }}
    </header>
    <section class="start-page-card__image">
      <img :src="card.image" :alt="card.title">
    </section>
    <section class="start-page-card__description">
      <p>
        {{ card.text }}
      </p>
    </section>
    <footer>
      <wt-button wide color="primary" :disabled="card.disabled" @click="open">
        Open
      </wt-button>
    </footer>
  </article>
</template>

<script>

export default {
  name: 'the-card',
  props: { card: Object, required: true },
  methods: {
    open() {
      this.$router.push(this.card.path);
    },
  },
};
</script>

<style lang="scss" scoped>
.start-page-card {
  width: 410px;
  margin: var(--component-spacing);
  padding: var(--component-padding);
  border-radius: var(--border-radius);
  background-color: var(--main-color);
  color: var(--contrast-color);
}

.start-page-card__header {
  @extend %typo-heading-md;
}

.start-page-card__image {
  width: 100%;
}

.start-page-card__description {
  @extend %typo-body-md;
  height: 42px;
  margin: var(--component-spacing) 0;
  //in order to cut text after 3rd line:
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.start-page-card__header img {
  width: 10%;
}
</style>

<template>
  <div class="start-page-wrapper">
    <start-page-card
      v-for="(card) of navCards"
      :key="card.value"
      :card="card"
    />
  </div>
</template>

<script>
import StartPageCard from './start-page-card.vue';
import queuesSectionPic from '../assets/queues-section-pic.svg';
import agentsSectionPic from '../assets/agents-section-pic.svg';
import activeCallSectionPic from '../assets/active-calls-section-pic.svg';
import navMixin from '../../../app/mixins/supervisor-workspace/navMixin';

export default {
  name: 'the-start-page',
  mixins: [navMixin],
  components: { StartPageCard },
  computed: {
    navCards() {
      return this.nav.map((navItem) => {
        if (navItem.value === 'queues') {
          return {
            image: queuesSectionPic,
            text: this.$t('pages.queue.description'),
            ...navItem,
          };
        }

        if (navItem.value === 'agents') {
          return {
            image: agentsSectionPic,
            text: this.$t('pages.agent.description'),
            ...navItem,
          };
        }

        if (navItem.value === 'activeCalls') {
          return {
            image: activeCallSectionPic,
            text: this.$t('pages.activeCall.description'),
            ...navItem,
          };
        }
      });
    },
  },
};
</script>

<style scoped>
.start-page-wrapper {
  box-sizing: border-box;
  min-width: 440px;
  min-height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 440px);
  justify-content: center;
  align-content: center;
  grid-gap: var(--component-spacing);
  padding: var(--component-padding);
}
</style>

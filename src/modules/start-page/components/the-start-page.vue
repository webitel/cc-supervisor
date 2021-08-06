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
import SupervisorSections
  from '@webitel/ui-sdk/src/enums/WebitelApplications/SupervisorSections.enum';
import StartPageCard from './start-page-card.vue';
import queuesSectionPic from '../assets/queues-section-pic.svg';
import agentsSectionPic from '../assets/agents-section-pic.svg';
import activeCallsSectionPic from '../assets/active-calls-section-pic.svg';
import navMixin from '../../../app/mixins/supervisor-workspace/navMixin';

export default {
  name: 'the-start-page',
  mixins: [navMixin],
  components: { StartPageCard },
  computed: {
    navCards() {
      const cardSectionPic = {
          [SupervisorSections.QUEUES]: queuesSectionPic,
          [SupervisorSections.AGENTS]: agentsSectionPic,
          [SupervisorSections.ACTIVE_CALLS]: activeCallsSectionPic,
        };
      return this.nav.map((navItem) => ({
          ...navItem,
          disabled: !this.checkNavAccess({ name: navItem.value }),
          name: this.$t(`pages.startPage.${navItem.value}.name`),
          text: this.$t(`pages.startPage.${navItem.value}.text`),
          image: cardSectionPic[navItem.value],
        }));
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

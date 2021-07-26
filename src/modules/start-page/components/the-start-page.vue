<template>
  <div class="start-page-wrapper">
    <start-page-card v-for="card of navCards" :key="card.value" :card="card"/>
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
            text: 'blablablaQueues',
            ...navItem,
          };
        }

        if (navItem.value === 'agents') {
          return {
            image: agentsSectionPic,
            text: 'blablablaAgents',
            disabled: true,
            ...navItem,
          };
        }

        if (navItem.value === 'activeCalls') {
          return {
            image: activeCallSectionPic,
            text: 'blablablaActiveCalls',
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  min-width: 490px;
}
</style>

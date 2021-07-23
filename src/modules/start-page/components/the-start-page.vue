<template>
  <div class="start-page-wrapper">
    <start-page-card v-for="card in cardData" :key="card.title" :card="card"/>
  </div>
</template>

<script>
import StartPageCard from './start-page-card.vue';
import queuesSectionPic from '../assets/queues-section-pic.svg';
import agentsSectionPic from '../assets/agents-section-pic.svg';
import activeCallSectionPic from '../assets/active-calls-section-pic.svg';

export default {
  name: 'the-start-page',
  components: { StartPageCard },
  data: () => ({
      cardData: [
        {
          title: 'Queue',
          image: queuesSectionPic,
          path: 'queues',
          text: 'There are seven days of the week, or uniquely named 24-hour periods designed to provide scheduling context and make time more easily measureable. Each of these days is identifiable by specific plans, moods, and tones.',
        },
        {
          title: 'Agents',
          image: agentsSectionPic,
          path: 'agents',
          disabled: true,
          text: 'Monday is viewed by many to be the "worst" day of the week, as.',
        },
        {
          title: 'Active Call',
          image: activeCallSectionPic,
          path: 'active-calls',
          text: 'Tuesday is the second day of the week, and is in many ways similar to Monday. Not a whole lot changes, schedule-wise, between Tuesday and Monday; most individuals go to school or work and return home to watch television, play video games, make plans with friends, spend time with family, read, or engage in a similar leisure-related activity.',
        },
      ],
  }),
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

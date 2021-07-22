<template>
  <div class="start-page-wrapper">
    <the-card v-for="card in cardData" :key="card.title" :card="card"/>
  </div>
</template>

<script>
import TheCard from './the-card.vue';
import queuesImg from '../assets/queues.svg';
import agentsImg from '../assets/agents.svg';
import activeImg from '../assets/active.svg';

export default {
  name: 'the-start-page',
  components: { TheCard },
  data() {
    return {
      cardData: [
        {
          title: 'Queue',
          image: queuesImg,
          path: 'queues',
          text: 'There are seven days of the week, or uniquely named 24-hour periods designed to provide scheduling context and make time more easily measureable. Each of these days is identifiable by specific plans, moods, and tones.',
        },
        {
          title: 'Agents',
          image: agentsImg,
          text: 'Monday is viewed by many to be the "worst" day of the week, as.',
          path: 'agents',
        },
        {
          title: 'Active Call',
          image: activeImg,
          path: 'active-calls',
          text: 'Tuesday is the second day of the week, and is in many ways similar to Monday. Not a whole lot changes, schedule-wise, between Tuesday and Monday; most individuals go to school or work and return home to watch television, play video games, make plans with friends, spend time with family, read, or engage in a similar leisure-related activity.',
        },
      ],
    };
  },
};
</script>

<style scoped>
.start-page-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  min-width: 490px;
}
</style>

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
import { mapState } from 'vuex';
import StartPageCard from './start-page-card.vue';

import QueuesSecDark from '../assets/queues-section-dark.svg';
import QueuesSecLight from '../assets/queues-section-light.svg';
import AgentsSecDark from '../assets/agents-section-dark.svg';
import AgentsSecLight from '../assets/agents-section-light.svg';
import ActiveCallsSecDark from '../assets/active-calls-section-dark.svg';
import ActiveCallsSecLight from '../assets/active-calls-section-light.svg';

import navMixin from '../../../app/mixins/supervisor-workspace/navMixin';

export default {
  name: 'the-start-page',
  mixins: [navMixin],
  components: { StartPageCard },
  computed: {
    ...mapState('appearance', {
      theme: (state) => state.theme,
    }),
    navCards() {
      const cardSectionPic = {
          [SupervisorSections.QUEUES]: {
            dark: QueuesSecDark,
            light: QueuesSecLight,
          },
          [SupervisorSections.AGENTS]: {
            dark: AgentsSecDark,
            light: AgentsSecLight,
          },
          [SupervisorSections.ACTIVE_CALLS]: {
            dark: ActiveCallsSecDark,
            light: ActiveCallsSecLight,
          },
        };
      return this.nav.map((navItem) => {
        return {
          ...navItem,
          disabled: !navItem.access,
          name: this.$t(`pages.startPage.${navItem.value}.name`),
          text: this.$t(`pages.startPage.${navItem.value}.text`),
          image: this.theme === 'dark' ? cardSectionPic[navItem.value].dark : cardSectionPic[navItem.value].light,
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
  grid-template-columns: repeat(auto-fit, 410px);
  justify-content: center;
  align-content: center;
  grid-gap: var(--spacing-sm);
  padding: var(--spacing-sm);
}
</style>

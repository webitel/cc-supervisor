<template>
  <wt-start-page
    :nav="navCards"
    :dark-mode="theme === 'dark'"
  />
</template>

<script>
import WtStartPage from '@webitel/ui-sdk/src/components/on-demand/wt-start-page/components/wt-start-page.vue';
import SupervisorSections
  from '@webitel/ui-sdk/src/enums/WebitelApplications/SupervisorSections.enum';
import { mapState } from 'vuex';

import navMixin from '../../../app/mixins/supervisor-workspace/navMixin';
import ActiveCallsSecDark from '../assets/active-calls-section-dark.svg';
import ActiveCallsSecLight from '../assets/active-calls-section-light.svg';
import AgentsSecDark from '../assets/agents-section-dark.svg';
import AgentsSecLight from '../assets/agents-section-light.svg';
import QueuesSecDark from '../assets/queues-section-dark.svg';
import QueuesSecLight from '../assets/queues-section-light.svg';

export default {
  name: 'TheStartPage',
  components: {
    WtStartPage,
  },
  mixins: [navMixin],
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
      return this.nav.map((navItem) => ({
        ...navItem,
        disabled: !this.checkNavAccess({ name: navItem.value, scopeClass: navItem.class }),
        name: this.$t(`pages.startPage.${navItem.value}.name`),
        text: this.$t(`pages.startPage.${navItem.value}.text`),
        images: {
          light: cardSectionPic[navItem.value].light,
          dark: cardSectionPic[navItem.value].dark,
        },
      }));
    },
  },
};
</script>

<style scoped>
</style>

import convertDuration from '@webitel/ui-sdk/src/scripts/convertDuration';
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('now', {
      now: (state) => state.now,
    }),
    startTime() {
      const task = this.call || {};
      const start = task.answeredAt
        ? task.answeredAt : task.createdAt;
      let sec = Math.round((this.now - start) / 10 ** 3);
      sec = sec <= 0 ? 0 : sec; // handles -1 time after answer
      return convertDuration(sec);
    },
  },
};

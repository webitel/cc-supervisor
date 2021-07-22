import Vue from 'vue';
import VueRouter from 'vue-router';

import Auth from '../../modules/_reusable/auth/components/auth.vue';
import Queue from '../../modules/queues/components/the-queues.vue';
import ActiveCalls from '../../modules/active-calls/components/the-active-calls.vue';
import Agents from '../../modules/agents/components/the-agents.vue';
import AgentPage from '../../modules/agents/modules/agent-card/components/agent-card.vue';
import SupervisorWorkspace from '../components/the-supervisor-workspace.vue';
import notFound from '../components/utils/the-not-found-component.vue';
import TheStartPage from '../../modules/start-page/components/the-start-page';

// https://stackoverflow.com/a/55544303
if (!process || process.env.NODE_ENV !== 'test') {
  Vue.use(VueRouter);
}

const routes = [{
  path: '/auth',
  name: 'auth',
  component: Auth,
}, {
  path: '/',
  redirect: { name: 'the-start-page' },
  component: SupervisorWorkspace,
  children: [{
    path: 'queues',
    name: 'queues',
    component: Queue,
  }, {
    path: 'agents',
    name: 'agents',
    component: Agents,
  }, {
    path: 'agents/:id',
    name: 'agent-page',
    component: AgentPage,
  }, {
    path: 'active-calls',
    name: 'active-calls',
    component: ActiveCalls,
  }, {
    path: 'start-page',
    name: 'the-start-page',
    component: TheStartPage,
  },
  ],
}, {
  path: '*',
  name: 'not-found',
  component: notFound,
}];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0,
    };
  },
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('access-token');
  if (!(to.fullPath === '/auth')) {
    if (!token) {
      next('/auth');
    }
  }
  next();
});

export default router;

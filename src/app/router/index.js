import { createRouter, createWebHistory } from 'vue-router';
import SupervisorSections
  from '@webitel/ui-sdk/src/enums/WebitelApplications/SupervisorSections.enum';

import Auth from '@webitel/ui-sdk/src/modules/Userinfo/components/the-auth.vue';
import Queue from '../../modules/queues/components/the-queues.vue';
import ActiveCalls from '../../modules/active-calls/components/the-active-calls.vue';
import Agents from '../../modules/agents/components/the-agents.vue';
import AgentPage from '../../modules/agents/modules/agent-card/components/agent-card.vue';
import SupervisorWorkspace from '../components/the-supervisor-workspace.vue';
import notFound from '../components/utils/the-not-found-component.vue';
import AccessDenied from '../components/utils/access-denied-component.vue';
import TheStartPage from '../../modules/start-page/components/the-start-page.vue';
import store from '../store';

const checkRouteAccess = ((to, from, next) => {
  const hasReadAccess = store.getters['userinfo/CHECK_OBJECT_ACCESS']({ route: to });
  if (hasReadAccess) {
    next();
  } else {
    next('/access-denied');
  }
});

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
    name: SupervisorSections.QUEUES,
    component: Queue,
    beforeEnter: checkRouteAccess,
  }, {
    path: 'agents',
    name: SupervisorSections.AGENTS,
    component: Agents,
    beforeEnter: checkRouteAccess,
  }, {
    path: 'agents/:id',
    name: `${SupervisorSections.AGENTS}-card`,
    component: AgentPage,
    beforeEnter: checkRouteAccess,
  }, {
    path: 'active-calls',
    name: SupervisorSections.ACTIVE_CALLS,
    component: ActiveCalls,
    beforeEnter: checkRouteAccess,
  }, {
    path: 'start-page',
    name: 'the-start-page',
    component: TheStartPage,
  },
  ],
}, {
  path: '/access-denied',
  name: 'access-denied',
  component: AccessDenied,
}, {
  path: '/:pathMatch(.*)*',
  name: 'not-found',
  component: notFound,
}];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    return {
      left: 0,
      top: 0,
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

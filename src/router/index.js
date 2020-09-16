import Vue from 'vue';
import VueRouter from 'vue-router';

import Auth from '../components/supervisor-workspace/shared/auth/auth.vue';
import Queue from '../components/queues/the-queues.vue';
import ActiveCalls from '../components/active-calls/the-active-calls.vue';
import Agents from '../components/agents/the-agents.vue';
import AgentPage from '../components/agents/agent-page/agent-page.vue';
import SupervisorWorkspace from '../components/supervisor-workspace/the-supervisor-workspace.vue';
import notFound from '../components/utils/the-not-found-component.vue';

// https://stackoverflow.com/a/55544303
if (!process || process.env.NODE_ENV !== 'test') {
  Vue.use(VueRouter);
}

const routes = [{
    path: '/auth',
    name: 'auth',
    component: Auth,
}, {
    path: '/supervisor',
    redirect: { name: 'queues' },
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
    }],
}, {
    path: '*',
    name: 'not-found',
    component: notFound,
}];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL, // eslint-disable-next-line no-unused-vars
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

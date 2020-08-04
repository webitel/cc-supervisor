import Vue from 'vue';
import VueRouter from 'vue-router';

import Auth from '../components/auth/auth.vue';
import Queue from '../components/queue/the-queues.vue';
import ActiveCalls from '../components/activeCall/the-active-calls.vue';
import Agents from '../components/agent/the-agents.vue';
import AgentsItem from '../components/agent/the-agents-item.vue';
import moduleWrap from '../components/object-utils/the-object-wrap.vue';
import notFound from '../components/utils/the-not-found-component.vue';
import settings from '../components/the-settings.vue';

Vue.use(VueRouter);

const routes = [{
    path: '/auth',
    name: 'auth',
    component: Auth,
}, {
    path: '/supervisor',
    redirect: { name: 'queues' },
    component: moduleWrap,
    children: [{
        path: 'settings',
        name: 'settings',
        component: settings,
    }, {
        path: 'queues',
        name: 'queues',
        component: Queue,
    }, {
        path: 'agents',
        name: 'agents',
        component: Agents,
    }, {
        path: 'agents/:id',
        name: 'agent-view',
        component: AgentsItem,
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

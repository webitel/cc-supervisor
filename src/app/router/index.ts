import { SupervisorSections, WtObject } from "@webitel/ui-sdk/enums";
import { createRouter, createWebHistory } from "vue-router";

import ActiveCalls from "../../modules/active-calls/components/the-active-calls.vue";
import Agents from "../../modules/agents/components/the-agents.vue";
import AgentPage from "../../modules/agents/modules/agent-card/components/agent-card.vue";
import AgentTabsPathName from "./_internals/AgentTabsPathName.enum.js";
import RoutePaths from "./_internals/RoutePaths.enum.js";
const General = import(
  "../../modules/agents/modules/agent-card/modules/agent-general/components/agent-general-tab.vue"
);
const Skills = import(
  "../../modules/agents/modules/agent-card/modules/agent-skills/components/agent-skills-tab.vue"
);
const StatusHistory = import(
  "../../modules/agents/modules/agent-card/modules/agent-status-history/components/agent-status-history-tab.vue"
);
const Calls = import(
  "../../modules/agents/modules/agent-card/modules/agent-calls/components/agent-calls-tab.vue"
);
const ScreenRecordigs = import(
  "../../modules/agents/modules/agent-card/modules/agent-screen-recordings/components/agent-screen-recordings-tab.vue"
);
const Screenshots = import(
  "../../modules/agents/modules/agent-card/modules/agent-screenshots/components/agent-screenshots-tab.vue"
);
const Pdfs = import(
  "../../modules/agents/modules/agent-card/modules/agent-pdfs/components/agent-pdfs-tab.vue"
);

import Queue from "../../modules/queues/components/the-queues.vue";
import TheStartPage from "../../modules/start-page/components/the-start-page.vue";
import SupervisorWorkspace from "../components/the-supervisor-workspace.vue";
import AccessDenied from "../components/utils/access-denied-component.vue";
import notFound from "../components/utils/the-not-found-component.vue";

const routes = [
  {
    path: "/",
    redirect: { name: "the-start-page" },
    component: SupervisorWorkspace,
    children: [
      {
        path: "/queues",
        name: SupervisorSections.Queues,
        component: Queue,
        meta: {
          WtObject: WtObject.Queue,
          UiSection: SupervisorSections.Queues,
        },
      },
      {
        path: "agents",
        name: SupervisorSections.Agents,
        component: Agents,
        meta: {
          WtObject: WtObject.Agent,
          UiSection: SupervisorSections.Agents,
        },
      },
      {
        path: "agents/:id",
        name: `${SupervisorSections.Agents}-card`,
        component: AgentPage,
        redirect: { name: AgentTabsPathName.GENERAL },
        meta: {
          WtObject: WtObject.Agent,
          UiSection: SupervisorSections.Agents,
        },
        children: [
          {
            path: "general",
            name: AgentTabsPathName.GENERAL,
            component: General,
          },
          {
            path: "work-logs",
            name: AgentTabsPathName.WORK_LOG,
            component: Calls,
          },
          {
            path: "state-history",
            name: AgentTabsPathName.STATE_HISTORY,
            component: StatusHistory,
          },
          {
            path: "skills/:skillId?",
            name: AgentTabsPathName.SKILLS,
            component: Skills,
          },
          {
            path: "screen-recordings",
            name: AgentTabsPathName.SCREEN_RECORDINGS,
            component: ScreenRecordigs,
          },
          {
            path: "screenshots",
            name: AgentTabsPathName.SCREENSHOTS,
            component: Screenshots,
          },
          {
            path: "pdfs",
            name: AgentTabsPathName.PDFS,
            component: Pdfs,
          },
        ],
      },
      {
        path: "active-calls",
        name: SupervisorSections.ActiveCalls,
        component: ActiveCalls,
        meta: {
          WtObject: WtObject.Call,
          UiSection: SupervisorSections.ActiveCalls,
        },
      },
      {
        path: RoutePaths.StartPage,
        name: "the-start-page",
        component: TheStartPage,
      },
    ],
  },
  {
    path: "/access-denied",
    name: "access-denied",
    component: AccessDenied,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: notFound,
  },
];

export let router = null;

export const initRouter = async ({
  beforeEach = [],
} = {}) => {
  router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),

    scrollBehavior(to, from, savedPosition) {
      return {
        left: 0,
        top: 0,
      };
    },
    routes,
  });

  router.beforeEach((to, from, next) => {
    if (!localStorage.getItem("access-token") && !to.query.accessToken) {
      const desiredUrl = encodeURIComponent(window.location.href);
      const authUrl = import.meta.env.VITE_AUTH_URL;
      window.location.href = `${authUrl}?redirectTo=${desiredUrl}`;
    } else if (to.query.accessToken) {
      // assume that access token was set from query before app initialization in main.js
      const newQuery = { ...to.query };
      delete newQuery.accessToken;
      next({ ...to, query: newQuery });
    } else {
      next();
    }
  });

  beforeEach.forEach((guard) => {
    router.beforeEach(guard);
  });

  return router;
};

import { SupervisorSections, WtApplication } from '@webitel/ui-sdk/enums';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

import { useUserinfoStore } from '../../userinfo/store/userInfoStore';
import ActiveCallsSecDark from '../assets/active-calls-section-dark.svg';
import ActiveCallsSecLight from '../assets/active-calls-section-light.svg';
import AgentsSecDark from '../assets/agents-section-dark.svg';
import AgentsSecLight from '../assets/agents-section-light.svg';
import QueuesSecDark from '../assets/queues-section-dark.svg';
import QueuesSecLight from '../assets/queues-section-light.svg';

type NavItem = {
	value: string;
	name: string;
	route: string;
	disabled?: boolean;
};

type NavCard = NavItem & {
	disabled: boolean;
	text: string;
	images: {
		light: string;
		dark: string;
	};
};

export const useNavStore = defineStore('nav', () => {
	const { t } = useI18n();
	const router = useRouter();

	const { routeAccessGuard } = useUserinfoStore();

	const isInitialized = ref(false);

	const nav = computed(() => {
		const queues = {
			value: SupervisorSections.Queues,
			name: t(
				`WtApplication.${WtApplication.Supervisor}.sections.${SupervisorSections.Queues}`,
			),
			route: '/queues',
		};
		const agents = {
			value: SupervisorSections.Agents,
			name: t(
				`WtApplication.${WtApplication.Supervisor}.sections.${SupervisorSections.Agents}`,
			),
			route: '/agents',
		};
		const activeCalls = {
			value: SupervisorSections.ActiveCalls,
			name: t(
				`WtApplication.${WtApplication.Supervisor}.sections.${SupervisorSections.ActiveCalls}`,
			),
			route: '/active-calls',
		};
		const navItems = [
			queues,
			agents,
			activeCalls,
		];

		return navItems.map((navItem) => {
			const route = router.resolve({
				path: navItem.route,
			});
			const hasAccess = routeAccessGuard(route) === true;
			return {
				...navItem,
				disabled: !hasAccess,
			};
		});
	});

	const navCards = computed((): NavCard[] => {
		const cardSectionPic = {
			[SupervisorSections.Queues]: {
				dark: QueuesSecDark,
				light: QueuesSecLight,
			},
			[SupervisorSections.Agents]: {
				dark: AgentsSecDark,
				light: AgentsSecLight,
			},
			[SupervisorSections.ActiveCalls]: {
				dark: ActiveCallsSecDark,
				light: ActiveCallsSecLight,
			},
		};

		return nav.value.map((navItem) => {
			return {
				...navItem,
				name: t(`pages.startPage.${navItem.value}.name`),
				text: t(`pages.startPage.${navItem.value}.text`),
				images: {
					light: cardSectionPic[navItem.value].light,
					dark: cardSectionPic[navItem.value].dark,
				},
			};
		});
	});

	const initializeNav = async () => {
		if (isInitialized.value) {
			return;
		}
		isInitialized.value = true;
	};

	return {
		nav,
		navCards,
		initializeNav,
	};
});

<template>
    <aside
            class="the-nav__wrap"
            :class="{'collapsed': collapsed}"
    >
        <nav class="the-nav expanded-nav">
            <header class="nav__header">
                <button
                    @click.prevent="toggleCollapse"
                >
                    <icon>
                        <svg class="icon icon-burger_md md burger-button__icon">
                            <use xlink:href="#icon-burger_md"></use>
                        </svg>
                    </icon>
                </button>
                <i class="icon-icon_menu-burger" @click="toggleCollapse"></i>
                <div class="logo-wrap">
                    <img class="logo" src="../../assets/img/logo.svg" alt="logo">
                </div>
            </header>
            <ul class="nav-items">
                <li class="nav-item-wrap" v-for="(item, index) in nav" @click="navigate(item)" :key="index">
                    <div class="nav-item" :class="{'nav-item__current': index === selectedIndex}">
                        <icon class="nav-icon">
                            <svg class="icon md nav-icon__svg" :class="{'nav-icon__svg--selected ': index === selectedIndex}">
                                <use :xlink:href="`#icon-${item.iconClass}_md`"></use>
                            </svg>
                        </icon>
                        <span class="nav-text">{{item.displayName()}}</span>
                    </div>
                </li>
            </ul>
        </nav>
    </aside>
</template>

<script>

    export default {
        name: 'the-nav',
        mounted() {
            this.expandCurrentRoute();
        },
        watch: {
            $route() {
                this.expandCurrentRoute();
            },
        },
        data() {
            return {
                nav: [
                    {
                        name: 'queues',
                        displayName: () => this.$t('nav.queue'),
                        route: { name: 'queues', query: { period: 'today' } },
                        iconClass: 'queue',
                    },
                    {
                        name: 'agent',
                        displayName: () => this.$t('nav.agents'),
                        route: { name: 'agents' },
                        iconClass: 'agent',
                    },
                    {
                        name: 'active-calls',
                        displayName: () => this.$t('nav.activeCalls'),
                        route: { name: 'active-calls' },
                        iconClass: 'agents',
                    },
                ],
                collapsed: false,
                selectedIndex: 0,
            };
        },

        methods: {
            toggleCollapse() {
                this.collapsed = !this.collapsed;
            },

            navigate(item) {
                if (!item.subnav && item.route.name !== this.$router.currentRoute.name) {
                    this.$router.push(item.route);
                }
            },

            expandCurrentRoute() {
                const currentItem = this.nav.find((currItem) => this.$router.currentRoute.name === currItem.route.name);
                if (currentItem) {
                    this.setCurrent(currentItem);
                }
            },

            setCurrent(currItem) {
                this.nav.forEach((item, index) => {
                    if (item === currItem) {
                        this.selectedIndex = index;
                    }
                });
            },
        },
    };
</script>

<style lang="scss" scoped>
    $nav-bg-color: #171A2A;
    $nav-paddings: 0 38px 0 20px;

    .burger-button__icon {
        fill: $nav-icon-color;
    }

    .the-nav__wrap {
        @extend .box-shadow;
        /*flex-basis: 272px;*/
        position: relative;
        /*min-width: 272px;*/
        /*width: 272px;*/
        min-height: 100vh;
        background: $nav-bg-color;
        z-index: 101;

        .the-nav {
            position: sticky;
            top: 0;
            width: 272px;
            padding-top: 20px;
            color: $nav-icon-color;

            i:before {
                color: $nav-icon-color;
            }

            .nav__header {
                display: flex;
                width: 100%;
                padding: $nav-paddings;
                margin: 0 auto 44px;

                .icon-icon_menu-burger {
                    margin-right: 23px;
                    color: #fff;
                    cursor: pointer;
                }

                .logo-wrap {
                    cursor: pointer;
                }
            }

            .nav-item-wrap {
                .nav-item {
                    @extend .typo-nav-item;

                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    width: 100%;
                    max-height: 36px;
                    padding: 6px 38px 6px 20px;
                    cursor: pointer;

                    .nav-icon-arrow {
                        margin-left: auto;
                        transform: rotate(-90deg);
                        transition: $transition;
                    }

                    .nav-icon {
                        margin-right: 18px;
                        transition: $transition;
                    }

                    .nav-icon__svg {
                        fill: #fff;
                    }

                    &:hover .nav-icon__svg {
                        fill: $accent-color;
                        stroke: $accent-color;
                    }

                    .nav-icon__svg--selected {
                        fill: $accent-color;
                    }

                    .nav-text {
                        transition: $transition;
                    }
                }

                .subnav-items {
                    .subnav-item {
                        @extend .typo-nav-item;

                        display: flex;
                        justify-content: flex-start;
                        width: 100%;
                        padding: 11px 38px 11px 62px;
                        cursor: pointer;

                        &:hover, &.nav-item__current {
                            background: rgba(0, 0, 0, 0.1);

                            .subnav-text, .subnav-icon {
                                color: $accent-color;
                            }
                        }
                    }
                }

                &:hover, .nav-item__expanded, .nav-item__current {
                    .nav-icon-arrow:before, .nav-icon:before, .nav-text {
                        color: $accent-color;
                        fill: $accent-color;
                        stroke: $accent-color;
                    }
                }

                .nav-item__expanded {
                    .nav-icon-arrow {
                        transform: rotate(0);
                    }
                }

                .nav-item__expanded {
                    background: rgba(0, 0, 0, 0.35);
                }
            }
        }

        &.collapsed {
            flex-basis: 64px;
            /*min-width: 64px;*/
            /*width: 64px;*/

            .nav__header {
                .logo {
                    display: none;
                }
            }

            .the-nav {
                width: 64px;

                .nav-item-wrap {
                    .nav-item {
                        .nav-icon {
                            margin-right: 28px;
                        }

                        .nav-icon-arrow {
                            display: none;
                        }

                        .nav-text {
                            opacity: 0;
                            pointer-events: none;
                        }
                    }

                    .subnav-items {

                        .subnav-item {
                            min-width: calc(220px - 64px);
                            padding: 12px 38px 12px 10px;
                            margin-left: 64px;
                            background: $nav-bg-color;
                        }
                    }

                    .nav-item__expanded {
                        background: $nav-bg-color;

                        &.nav-item {
                            width: 220px;
                        }

                        .nav-text {
                            opacity: 1;
                            pointer-events: auto;
                        }
                    }
                }
            }

        }
    }

</style>
